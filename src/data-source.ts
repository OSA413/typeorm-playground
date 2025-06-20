import "reflect-metadata"
import { DataSource } from "typeorm"
import { Employee } from "./entity/Example"

export const AppDataSourcePostgres = new DataSource({
    "name": "sqlite",
    "type": "sqlite",
    "database": "./temp/sqlitedb-1.db",
    logging: true,
    synchronize: true,
    entities: [Employee],
    migrations: [],
    migrationsRun: true,
    subscribers: [],
})
