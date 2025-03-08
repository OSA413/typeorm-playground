import "reflect-metadata"
import { DataSource } from "typeorm"
import { Album } from "./entity/Example"

export const AppDataSourcePostgres = new DataSource({
    "name": "oracle",
    "type": "oracle",
    "host": "localhost",
    "port": 1521,
    "serviceName": "XEPDB1",
    "username": "typeorm",
    "password": "oracle",
    "logging": true,
    "extra": {
      "connectString": "localhost:1521/XEPDB1"
    },
    synchronize: true,
    entities: [Album],
    migrations: [],
    migrationsRun: true,
    subscribers: [],
})
