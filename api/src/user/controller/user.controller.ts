import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Delete,
  Patch,
  Put,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { User } from '../models/user.interface';
import { UserService } from '../user_service/user.service';

@Controller('users')
export class UserController {
  constructor(private userService: UserService) {}
  @Post()
  create(@Body() user: User): Observable<User> {
    return this.userService.create(user);
  }

  @Get(':id')
  findOne(@Param('id') id: string): Observable<User> {
    return this.userService.findOne(parseInt(id));
  }
  @Get()
  findAll(): Observable<User[]> {
    return this.userService.findAll();
  }
  @Delete(':id')
  deleteOne(@Param('id') id: string): Observable<User> {
    return this.userService.deleteOne(parseInt(id));
  }

  @Put(':id')
  updateOne(@Param('id') id: string, @Body() user: User): Observable<User> {
    return this.userService.updateOne(parseInt(id), user);
  }
}
