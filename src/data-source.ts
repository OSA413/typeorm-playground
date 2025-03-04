import "reflect-metadata"
import { DataSource } from "typeorm"
import { Album } from "./entity/Example"

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "test",
    password: "test",
    database: "test",
    synchronize: true,
    logging: true,
    entities: [Album],
    migrations: [],
    migrationsRun: true,
    subscribers: [],
})