import { Injectable, UnauthorizedException } from '@nestjs/common'
import { PassportStrategy } from '@nestjs/passport'
import * as Strategy from 'passport-discord'
import { AuthService } from './auth.service'

@Injectable()
export class DiscordStrategy extends PassportStrategy(Strategy) {
    constructor(private authService: AuthService) {
        super({
            clientID: process.env.DISCORD_CLIENT_ID,
            clientSecret: process.env.DISCORD_CLIENT_SECRET,
            callbackURL: process.env.DISCORD_CLIENT_CALLBACK,
            scope: ['identify'],
        })
    }

    async validate(accessToken: string, refreshToken: string, profile: any) {
        const user = await this.authService.validateUser(profile)
        if (!user) {
            throw new UnauthorizedException()
        }
        return user
    }
}
