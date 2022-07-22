import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export function getDatabaseExportConfig(): TypeOrmModuleOptions {
  return {
    type: 'postgres',
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    schema: process.env.DB_SCHEMA,
    entities: [__dirname + '/../**/*.entity.{js,ts}'],
    synchronize: false,
    // autoLoadEntities: true,
  };
}
