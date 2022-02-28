import { Module } from '@nestjs/common';
import { CartoesService } from './cartoes.service';
import { CartoesController } from './cartoes.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CartaoEntity } from './entities/cartao.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CartaoEntity])],
  controllers: [CartoesController],
  providers: [CartoesService],
  exports: [CartoesService],
})
export class CartoesModule {}
