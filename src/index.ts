import { DataSource } from "typeorm";
import { AppDataSourceMSSQL, AppDataSourcePostgres } from "./data-source";
import { Album } from "./entity/Example";


const run = async (dataSource: DataSource) => {
    const repo = dataSource.getRepository(Album);
    await repo.save({albumId: 123, total: 1.98, otherNumberic: 5});
    console.log(dataSource.driver.options.type, await repo.createQueryBuilder().getOne());
    console.log(dataSource.driver.options.type, await repo.find())
}

AppDataSourcePostgres.initialize().then(run)
AppDataSourceMSSQL.initialize().then(run)