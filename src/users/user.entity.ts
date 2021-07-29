import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number

    @Column({ unique: true })
    discordID: string

    @Column()
    username: string

    @Column()
    discriminator: number

    @Column()
    avatar: string
}
