import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Request } from 'express';
import { RefreshToken } from 'src/auth/model/refershToken.model';
import { JwtTokenService } from 'src/services/jwt-token.service';

@Injectable()
export class JwtRefreshTokenGuard implements CanActivate {
  constructor(
    private readonly jwtTokenService: JwtTokenService,
    @InjectModel(RefreshToken) private refreshTokenModel: typeof RefreshToken,
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const req = context.switchToHttp().getRequest<Request>();

    const refreshToken = req?.body.refreshToken;

    if (!refreshToken) {
      throw new UnauthorizedException('RefreshToken missing');
    }

    try {
      const tokenPayload =
        await this.jwtTokenService.verifyRefreshToken(refreshToken);

      const tokenInstants = await this.refreshTokenModel.findOne({
        where: { token: refreshToken },
        raw: true,
      });

      if (!tokenInstants) {
        throw new UnauthorizedException('Refresh token required');
      }

      req['tokenInstants'] = tokenInstants;

      return true;
    } catch (error) {
      throw new UnauthorizedException('Invalid refresh token');
    }
  }
}
