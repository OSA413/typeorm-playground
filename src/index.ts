import { AppDataSource } from "./data-source";
import { Album } from "./entity/Example";

AppDataSource.initialize().then(async dataSource => {
    const repo = dataSource.getRepository(Album);
    await repo.save({numberOfLikes: 4123, albumId: 123, title: "test"});
    console.log(await repo.createQueryBuilder().getOne());
    console.log(await repo.createQueryBuilder().select(["Album.albumId", "Album.number_of_likes", "Album.total", "Album.title"]).getOne());
})