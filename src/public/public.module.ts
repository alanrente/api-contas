import { Module } from '@nestjs/common';
import { PublicController } from './public.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PublicaEntity } from './entities/publica.entity';

@Module({
  imports: [TypeOrmModule.forFeature([PublicaEntity])],
  controllers: [PublicController],
  providers: [],
  exports: [],
})
export class PublicModule {}
