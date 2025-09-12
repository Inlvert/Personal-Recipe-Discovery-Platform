import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { RefreshToken } from 'src/auth/model/refershToken.model';
import { User } from 'src/user/model/user.model';
import { JwtTokenService } from './jwt-token.service';

@Injectable()
export class SessionService {
  constructor(
    @InjectModel(User) private userModel: typeof User,
    @InjectModel(RefreshToken) private refreshTokenModel: typeof RefreshToken,
    private readonly jwtTokenService: JwtTokenService,
  ) {}

  async createSession(user: User) {
    const tokenPayload = {
      id: user.id,
      firstName: user.firstName,
      lastName: user.lastName,
    };

    const tokenPair = await this.jwtTokenService.createTokenPair(tokenPayload);

    await this.refreshTokenModel.create({
      token: tokenPair.refreshToken,
      userId: user.id,
    });

    const { password, ...userData } = user.toJSON();

    return {
      user: userData,
      tokenPair,
    };
  }

  async refreshSession(refreshTokenInstants) {
    const user = await this.userModel.findByPk(refreshTokenInstants.userId);

    if (!user) {
      throw new NotFoundException('user not found');
    }

    const tokenPayload = {
      id: user.id,
      firstName: user.firstName,
      lastName: user.lastName,
    };

    const tokenPair = await this.jwtTokenService.createTokenPair(tokenPayload);

    await this.refreshTokenModel.update(
      { token: tokenPair.refreshToken },
      { where: { token: refreshTokenInstants.token } },
    );

    return {
      user,
      tokenPair,
    };
  }
}
