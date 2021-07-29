import { atom } from 'recoil'
import { User } from './types'

export const tokenState = atom<string | null | false>({
    key: 'token',
    default: null,
})

export const userState = atom<User | null>({
    key: 'user',
    default: null,
})
