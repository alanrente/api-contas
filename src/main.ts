import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const port = process.env.PORT || 3000;

  app.useGlobalPipes(new ValidationPipe());

  app.enableCors();

  await app.listen(port);

  console.log(process.env.LOCALHOST + process.env.PORT);
  console.log('NODE_ENV: ', process.env.NODE_ENV);
}
bootstrap();
