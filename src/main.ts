import { Logger, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const port = process.env.PORT || 3000;

  app.useGlobalPipes(new ValidationPipe());

  app.enableCors();

  await app.listen(port);

  const server = 'server';

  Logger.log(`Server running on port: ${port}`, server);
  Logger.log(`Environment: ${process.env.NODE_ENV}`, server);
  Logger.log(`Database: ${process.env.DB_HOST}`, server);
}
bootstrap();
