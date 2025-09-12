import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { SessionService } from 'src/services/session.service';
import { CreateUserDto } from 'src/user/dto/create-user.dto';
import { User } from 'src/user/model/user.model';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel(User) private userModel: typeof User,
    private readonly sessionService: SessionService,
  ) {}

  async registrationUser(createUserDto: CreateUserDto) {
    const user = await this.userModel.create(createUserDto);

    const userWithTokenPair = await this.sessionService.createSession(user);

    return userWithTokenPair;
  }

  async loginUser(createUserDto: CreateUserDto) {
    const user = await this.userModel.findOne({
      where: {email: createUserDto.email}
    })

    if(!user) {
      throw new UnauthorizedException('Invalid data for user')
    }

    if(user.password !== createUserDto.password) {
      throw new UnauthorizedException('Invalid data for user')
    }

    const userWithTokenPair = await this.sessionService.createSession(user);

    return userWithTokenPair

  }
}
