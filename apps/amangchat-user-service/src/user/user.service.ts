import { Injectable } from '@nestjs/common';

import { User } from '@models/user.schema';
import { BaseRepository } from '@baseRepository/base.repository';
import {
  CreateUserRequest,
  StatusResponse,
  UserResponse,
} from '@protos/user_pb';

@Injectable()
export class UserService extends BaseRepository<User> {
  async createUser(request: CreateUserRequest): Promise<UserResponse> {
    const email = request.getEmail();
    const password = request.getPassword();
    const username = request.getUsername();

    const user = await this.findOne({ email });
    const userResponse = new UserResponse();

    if (user) {
      userResponse.setStatus(
        new StatusResponse()
          .setSuccess(true)
          .setMessage('User Created successfully')
      );
      return userResponse;
    }

    const newUser = await this.create({ email, password, username });

    userResponse.setEmail(newUser.email);
    userResponse.setStatus(
      new StatusResponse()
        .setSuccess(true)
        .setMessage('User Created successfully')
    );
    userResponse.setUserid(newUser._id);
    userResponse.setUsername(newUser.username);

    return userResponse;
  }
}
