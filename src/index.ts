import { DataSource } from "typeorm";
import { AppDataSourcePostgres } from "./data-source";
import { faker } from '@faker-js/faker';

const run = async (dataSource: DataSource) => {
    const repo = dataSource.getRepository("Category");
    await repo.save({ name: faker.animal.bird() });
    const qb = repo.createQueryBuilder("category");

    qb.select(["id", "name"].map(x => ["category", x].join(".")))

    console.log(await qb.getMany())
}

AppDataSourcePostgres.initialize().then(run)