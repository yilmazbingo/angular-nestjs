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
import { Observable, of } from 'rxjs';
import { User } from '../models/user.interface';
import { UserService } from '../user_service/user.service';
import { catchError, map } from 'rxjs/operators';

@Controller('users')
export class UserController {
  constructor(private userService: UserService) {}
  @Post()
  create(@Body() user: User): Observable<User | Object> {
    return this.userService.create(user).pipe(
      map((user: User) => user),
      catchError((error) => of({ error: error.message })),
    );
  }

  @Post('login')
  login(@Body() user: User): Observable<Object> {
    return this.userService.login(user).pipe(
      map((jwt: string) => {
        return { accessToken: jwt };
      }),
    );
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
