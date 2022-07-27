"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dataSource = void 0;
const typeorm_1 = require("typeorm");
exports.dataSource = new typeorm_1.DataSource({
    type: "postgres",
    host: "db",
    port: 5432,
    username: "postgres",
    password: "example",
    // database: "park_info",
    entities: ["src/domain/*.js"],
    logging: true,
    synchronize: true,
});
