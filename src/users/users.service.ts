import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { User } from './user.entity'
import { Repository } from 'typeorm'

@Injectable()
export class UsersService {
    constructor(@InjectRepository(User) private repo: Repository<User>) {}

    async findOne(discordID: string): Promise<User | undefined> {
        return this.repo.findOne({
            where: {
                discordID,
            },
        })
    }
}
