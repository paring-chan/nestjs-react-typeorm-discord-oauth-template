import {User as UserEntity} from '../src/users/user.entity'

declare global {
    namespace Express {
        interface User extends UserEntity {}
    }
}
