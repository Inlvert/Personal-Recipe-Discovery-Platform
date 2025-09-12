import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { RefreshToken } from 'src/auth/model/refershToken.model';
import { User } from 'src/user/model/user.model';
import { JwtTokenService } from './jwt-token.service';

@Injectable()
export class SessionService {
  constructor(
    @InjectModel(User) private userModel: typeof User,
    @InjectModel(RefreshToken) private rfreshTokenModel: typeof RefreshToken,
    private readonly jwtTokenService: JwtTokenService,
  ) {}

  async createSession(user: User) {
    const tokenPayload = {
      id: user.id,
      firstName: user.firstName,
      lastName: user.lastName,
    };

    const tokenPair = await this.jwtTokenService.createTokenPair(tokenPayload);

    await this.rfreshTokenModel.create({
      token: tokenPair.refreshToken,
      userId: user.id,
    });

    return {
      user,
      tokenPair,
    };
  }
  

  // async refreshSession()
}
