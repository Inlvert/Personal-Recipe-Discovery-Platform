import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from 'src/user/model/user.model';
import { JwtModule } from '@nestjs/jwt';
import { SessionService } from 'src/services/session.service';
import { RefreshToken } from './model/refershToken.model';
import { JwtTokenService } from 'src/services/jwt-token.service';

@Module({
  imports: [
    SequelizeModule.forFeature([User, RefreshToken]),
    JwtModule.register({})
  ],
  providers: [AuthService, SessionService, JwtTokenService],
  controllers: [AuthController]
})
export class AuthModule {}
