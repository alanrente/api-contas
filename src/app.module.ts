import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CartoesController } from './cartoes/cartoes.controller';

@Module({
  imports: [],
  controllers: [AppController, CartoesController],
  providers: [AppService],
})
export class AppModule {}
