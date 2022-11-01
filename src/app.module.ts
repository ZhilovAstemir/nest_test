import { Module } from '@nestjs/common';
import AdminJS from 'adminjs';
import { Database, Resource } from '@adminjs/typeorm';
import { AdminModule } from '@adminjs/nestjs';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';

import { UsersModule } from './modules/users/users.module';
import { NewsModule } from './modules/news/news.module';
import { EnvConfig, TypeormConfig, AdminJSConfig } from './common/configs';

AdminJS.registerAdapter({
  Resource,
  Database,
});

@Module({
  imports: [
    ConfigModule.forRoot(EnvConfig),
    TypeOrmModule.forRootAsync(TypeormConfig),
    AdminModule.createAdminAsync(AdminJSConfig),
    UsersModule,
    NewsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
