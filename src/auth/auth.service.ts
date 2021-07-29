import { Injectable } from '@nestjs/common'
import { UsersService } from '../users/users.service'
import { Repository } from 'typeorm'
import { User } from '../users/user.entity'
import { InjectRepository } from '@nestjs/typeorm'

@Injectable()
export class AuthService {
    constructor(
        private usersService: UsersService,
        @InjectRepository(User) private usersRepo: Repository<User>,
    ) {}

    async validateUser(profile: any) {
        let user = await this.usersService.findOne(profile.id)
        if (!user) {
            user = this.usersRepo.create({
                discordID: profile.id,
            })
        }
        user.username = profile.username
        user.discriminator = profile.discriminator
        user.avatar = `https://cdn.discordapp.com/avatars/${profile.avatar}.png?size=256`
        await this.usersRepo.save(user)
        return profile
    }
}
