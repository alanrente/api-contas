import { AppController } from './app.controller';
import { Module } from '@nestjs/common';
import { CartoesModule } from './cartoes/cartoes.module';

import { ConfigModule } from '@nestjs/config';
import { getDatabaseExportConfig } from './config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { PessoasModule } from './pessoas/pessoas.module';
import { GastosModule } from './gastos/gastos.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { ComprasModule } from 'compras/compras.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot(getDatabaseExportConfig()),
    CartoesModule,
    PessoasModule,
    GastosModule,
    AuthModule,
    UsersModule,
    ComprasModule,
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {
  constructor(private dataSource: DataSource) {}
}
