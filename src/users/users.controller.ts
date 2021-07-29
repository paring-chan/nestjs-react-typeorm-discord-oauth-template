import { Controller, Get, Req, UseGuards } from '@nestjs/common'
import { Request } from 'express'
import { AuthGuard } from '@nestjs/passport'

@Controller('users')
export class UsersController {
    @Get('@me')
    @UseGuards(AuthGuard('jwt'))
    async me(@Req() req: Request) {
        return req.user
    }
}
