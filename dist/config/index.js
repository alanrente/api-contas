"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDatabaseExportConfig = void 0;
function getDatabaseExportConfig() {
    return {
        type: 'postgres',
        host: process.env.DB_HOST,
        port: Number(process.env.DB_PORT),
        username: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_DATABASE,
        schema: process.env.DB_SCHEMA,
        entities: [__dirname + '/../**/*.entity.{js,ts}'],
        synchronize: true,
    };
}
exports.getDatabaseExportConfig = getDatabaseExportConfig;
//# sourceMappingURL=index.js.map