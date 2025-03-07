import "reflect-metadata"
import { DataSource } from "typeorm"
import { Album } from "./entity/Example"

export const AppDataSourcePostgres = new DataSource({
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


export const AppDataSourceMSSQL = new DataSource({
    name: "mssql",
    type: "mssql",
    host: "localhost",
    username: "sa",
    password: "Admin12345",
    database: "tempdb",
    extra: {
      trustServerCertificate: true
    },
    synchronize: true,
    logging: true,
    entities: [Album],
    migrations: [],
    migrationsRun: true,
    subscribers: [],
})