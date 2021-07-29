import { Module } from '@nestjs/common'
import { ServeStaticModule } from '@nestjs/serve-static'
import { AuthModule } from './auth/auth.module'
import * as path from 'path'
import { TypeOrmModule } from '@nestjs/typeorm'

@Module({
    imports: [
        ServeStaticModule.forRoot({
            rootPath: path.join(__dirname, '../client/build'),
        }),
        AuthModule,
        TypeOrmModule.forRoot(),
    ],
})
export class AppModule {}
