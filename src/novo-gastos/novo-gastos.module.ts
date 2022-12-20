import { Module } from '@nestjs/common';
import { NovoGastosService } from './novo-gastos.service';
import { NovoGastosController } from './novo-gastos.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { NovoGasto } from './entities/novo-gasto.entity';
import { Compra } from './entities/compra.entity';

@Module({
  imports: [TypeOrmModule.forFeature([NovoGasto, Compra])],
  controllers: [NovoGastosController],
  providers: [NovoGastosService],
  exports: [NovoGastosService],
})
export class NovoGastosModule {}
