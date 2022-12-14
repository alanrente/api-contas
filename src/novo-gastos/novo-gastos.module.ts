import { Module } from '@nestjs/common';
import { NovoGastosService } from './novo-gastos.service';
import { NovoGastosController } from './novo-gastos.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { NovoGasto } from './entities/novo-gasto.entity';

@Module({
  imports: [TypeOrmModule.forFeature([NovoGasto])],
  controllers: [NovoGastosController],
  providers: [NovoGastosService],
  exports: [NovoGastosService],
})
export class NovoGastosModule {}
