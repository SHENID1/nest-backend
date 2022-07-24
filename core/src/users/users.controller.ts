import { Controller, Post, Body, Get } from '@nestjs/common';
import { CreteUserDto } from "./dto/crete-user.dto";
import { UsersService } from "./users.service";

@Controller('users')
export class UsersController {
  constructor(private userService: UsersService) {}
  @Post()
  create(@Body() userDto: CreteUserDto ){
    return this.userService.createUser(userDto);
  }

  @Get()
  getAll() {
      return this.userService.getAllUser()
  }
}
