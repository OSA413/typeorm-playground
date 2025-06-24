import { DataSource, EntitySchema } from "typeorm"
import { Category } from "./entity/Example"

export const AppDataSourcePostgres = new DataSource({
    "name": "sqlite",
    "type": "sqlite",
    "database": "./temp/sqlitedb-1.db",
    logging: true,
    synchronize: true,
    entities: [new EntitySchema(Category)],
    migrations: [],
    migrationsRun: true,
    subscribers: [],
})
