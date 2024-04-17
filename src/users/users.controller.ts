import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
  ParseIntPipe,
  ValidationPipe,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdatedUserDto } from './dto/update-user.dto';
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
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.userService.findOne(id);
  }

  @Post() //POST /users
  create(
    @Body(ValidationPipe)
    createUserDto: CreateUserDto,
  ) {
    return createUserDto;
  }

  @Patch(':id') //PATCH /users:id
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body(ValidationPipe)
    user: UpdatedUserDto,
  ) {
    return this.userService.update(id, user);
  }

  @Delete(':id') //DELETE /users:id
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.userService.delete(id);
  }
}
