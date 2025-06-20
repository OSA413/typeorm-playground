import { DataSource } from "typeorm";
import { AppDataSourcePostgres } from "./data-source";
import { Employee } from "./entity/Example";

const run = async (dataSource: DataSource) => {
    const repo = dataSource.getRepository(Employee);
    await repo.createQueryBuilder().delete().execute();
    await repo.save({
        "employeeId" : 1,
        "birthDate" : "1962-02-17T19:00:00.000Z",
        "hireDate" : "2002-08-13T18:00:00.000Z",
    });
    await repo.insert({
        "employeeId" : 2,
        "birthDate" : "1962-02-17T19:00:00.000Z",
        "hireDate" : "2002-08-13T18:00:00.000Z",
    });

    console.log(await repo.createQueryBuilder("employee").getMany());
    console.log(await repo.find())
}

AppDataSourcePostgres.initialize().then(run)