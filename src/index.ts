import { DataSource } from "typeorm";
import { AppDataSourcePostgres } from "./data-source";
import { Employee } from "./entity/Example";

const run = async (dataSource: DataSource) => {
    const repo = dataSource.getRepository(Employee);
    const qb = repo.createQueryBuilder("employee");

    // `employee_id` is incorrect, use `employeeId`
    // But this shows that it can select the primary key twice
    // And have different results for getSql and log of getMany
    qb.select(["employee_id", "hireDate"].map(x => ["employee", x].join(".")))

    console.log(qb.getSql())
    console.log(await qb.getMany())
}

AppDataSourcePostgres.initialize().then(run)