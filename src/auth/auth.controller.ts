import { Controller, Get, Redirect, Req, UseGuards } from '@nestjs/common'
import { AuthGuard } from '@nestjs/passport'
import { JwtService } from '@nestjs/jwt'
import { Request } from 'express'

@Controller('auth')
export class AuthController {
    constructor(private jwt: JwtService) {}

    @Get('login')
    @UseGuards(AuthGuard('discord'))
    @Redirect()
    async login(@Req() req: Request) {
        return {
            url: `/callback?token=${await this.jwt.signAsync({
                id: req.user.id,
            })}`,
            statusCode: 301,
        }
    }
}
