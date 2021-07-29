import { Module } from '@nestjs/common'
import { ServeStaticModule } from '@nestjs/serve-static'
import { AuthModule } from './auth/auth.module'
import * as path from 'path'

@Module({
    imports: [
        ServeStaticModule.forRoot({
            rootPath: path.join(__dirname, '../client/build'),
        }),
        AuthModule,
    ],
})
export class AppModule {}
