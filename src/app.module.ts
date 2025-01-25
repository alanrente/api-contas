import { AppController } from './app.controller';
import { Logger, Module } from '@nestjs/common';
import { CartoesModule } from './cartoes/cartoes.module';

import { ConfigModule } from '@nestjs/config';
import { getDatabaseExportConfig } from './config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { PessoasModule } from './pessoas/pessoas.module';
import { GastosModule } from './gastos/gastos.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { PublicModule } from 'public/public.module';
import { ProfilesModule } from './profiles/profiles.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRoot(getDatabaseExportConfig()),
    CartoesModule,
    PessoasModule,
    GastosModule,
    AuthModule,
    UsersModule,
    PublicModule,
    ProfilesModule,
  ],
  controllers: [AppController],
  providers: [Logger],
})
export class AppModule {
  constructor(private dataSource: DataSource) {}
}
