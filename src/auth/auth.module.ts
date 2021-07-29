import { Module } from '@nestjs/common'
import { AuthService } from './auth.service'
import { AuthController } from './auth.controller'
import { UsersModule } from '../users/users.module'
import { DiscordStrategy } from './discord.strategy'
import { JwtModule } from '@nestjs/jwt'
import { JwtStrategy } from './jwt.strategy'

@Module({
    providers: [AuthService, DiscordStrategy, JwtStrategy],
    controllers: [AuthController],
    imports: [
        UsersModule,
        JwtModule.register({
            secret: process.env.JWT_SECRET,
        }),
    ],
})
export class AuthModule {}
