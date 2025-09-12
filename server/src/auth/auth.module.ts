import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from 'src/user/model/user.model';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    SequelizeModule.forFeature([User]),
    JwtModule.register({})
  ],
  providers: [AuthService],
  controllers: [AuthController]
})
export class AuthModule {}
