import { Module } from '@nestjs/common';
import { CompraService } from './compras.service';
import { CompraController } from './compras.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Lancamentos } from './entities/lancamentos.entity';
import { Compra } from './entities/compra.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Lancamentos, Compra])],
  controllers: [CompraController],
  providers: [CompraService],
  exports: [CompraService],
})
export class ComprasModule {}
