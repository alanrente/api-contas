import { Module } from '@nestjs/common';
import { NovoGastosService } from './novo-gastos.service';
import { NovoGastosController } from './novo-gastos.controller';

@Module({
  controllers: [NovoGastosController],
  providers: [NovoGastosService]
})
export class NovoGastosModule {}
