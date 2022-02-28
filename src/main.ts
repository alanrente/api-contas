import { Logger, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const port = process.env.PORT || 3000;

  app.useGlobalPipes(new ValidationPipe());

  app.enableCors();

  await app.listen(port);

  Logger.log(`Server running on ${process.env.LOCALHOST + port}`, 'Bootstrap');
  Logger.log(`Environment: ${process.env.NODE_ENV}`, 'Bootstrap');
  Logger.log(`Database: ${process.env.DB_HOST}`, 'Bootstrap');
}
bootstrap();
