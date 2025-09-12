import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateUserDto } from 'src/user/dto/create-user.dto';
import { User } from 'src/user/model/user.model';

@Injectable()
export class AuthService {
  constructor(@InjectModel(User) private userModel: typeof User) {}

  async registartionUser( createUserDto: CreateUserDto) {
    const user = await this.userModel.create(createUserDto)
  }
}
