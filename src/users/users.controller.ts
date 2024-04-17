import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  // constructior
  constructor(private readonly userService: UsersService) {}

  //   routes
  @Get() //GET /users or  /users?role=value
  findAll(@Query('role') role?: 'INTERN' | 'ENGINEER' | 'ADMIN') {
    return this.userService.findAll(role);
  }

  @Get('interns') //GET /users:id
  findAllInters() {
    return [];
  }

  @Get(':id') //GET /users:id
  findOne(@Param('id') id: string) {
    return this.userService.findOne(+id);
  }

  @Post() //POST /users
  create(
    @Body()
    user: {
      name: string;
      email: string;
      role: 'INTERN' | 'ENGINEER' | 'ADMIN';
    },
  ) {
    return user;
  }

  @Patch(':id') //PATCH /users:id
  update(
    @Param('id') id: string,
    @Body()
    user: {
      name?: string;
      email?: string;
      role?: 'INTERN' | 'ENGINEER' | 'ADMIN';
    },
  ) {
    return this.userService.update(+id, user);
  }

  @Delete(':id') //DELETE /users:id
  delete(@Param('id') id: string) {
    return this.userService.delete(+id);
  }
}
