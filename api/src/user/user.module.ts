import { Module } from '@nestjs/common';
import { UserController } from './controller/user.controller';
import { UserService } from './user_service/user.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './models/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([UserEntity])],
  providers: [UserService],
  controllers: [UserController],
})
export class UserModule {}
