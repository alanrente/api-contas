import { Module } from '@nestjs/common';
import { CartoesModule } from './cartoes/cartoes.module';

import { ConfigModule } from '@nestjs/config';
import { getDatabaseExportConfig } from './config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';
import { PessoasModule } from './pessoas/pessoas.module';
import { GastosModule } from './gastos/gastos.module';

@Module({
  imports: [ConfigModule.forRoot(), TypeOrmModule.forRoot(getDatabaseExportConfig()), CartoesModule, PessoasModule, GastosModule],
  controllers: [],
  providers: [],
})
export class AppModule {
  constructor(private connection: Connection) {}
}
