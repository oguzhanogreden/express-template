import { DataSource } from "typeorm"

export const dataSource = new DataSource({
  type: "postgres",
  host: "db",
  port: 5432,
  username: "postgres",
  password: "example",
  // database: "park_info",
  entities: ["src/domain/*.js"],
  logging: true,
  synchronize: true,
})