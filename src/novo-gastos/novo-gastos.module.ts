import { Module } from '@nestjs/common';
import { NovoGastosService } from './novo-gastos.service';
import { NovoGastosController } from './novo-gastos.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Lancamentos } from './entities/lancamentos.entity';
import { Compra } from './entities/compra.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Lancamentos, Compra])],
  controllers: [NovoGastosController],
  providers: [NovoGastosService],
  exports: [NovoGastosService],
})
export class NovoGastosModule {}
