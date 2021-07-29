import { Module } from '@nestjs/common'
import { UsersService } from './users.service'
import { TypeOrmModule } from '@nestjs/typeorm'
import { User } from './user.entity'
import { UsersController } from './users.controller'

@Module({
    providers: [UsersService],
    imports: [TypeOrmModule.forFeature([User])],
    exports: [UsersService, TypeOrmModule],
    controllers: [UsersController],
})
export class UsersModule {}
