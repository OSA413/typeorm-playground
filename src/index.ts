import { DataSource } from "typeorm";
import { AppDataSourcePostgres } from "./data-source";
import { Album } from "./entity/Example";

const run = async (dataSource: DataSource) => {
    const repo = dataSource.getRepository(Album);
    await repo.save({albumId: 123, total: 1.98, numberOfLikes: 5});
    // Crash
    // console.log(await repo.createQueryBuilder().select(`total`).getOne());

    // OK
    console.log(await repo.createQueryBuilder("album").select(`album.total`).getOne());

    // OK
    console.log(await repo.find({select: {total: true}}))
}

AppDataSourcePostgres.initialize().then(run)