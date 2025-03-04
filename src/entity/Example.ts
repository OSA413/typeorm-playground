import { AfterLoad, Column, Entity, Index, ManyToOne, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm"

@Entity("album")
export class Album {
    @PrimaryColumn({name: "album_id", primaryKeyConstraintName: "album_pkey"})
    albumId!: number;

    @Column({name: "title"})
    title!: string;

    @Column({type: "numeric", nullable: true})
    total!: number;

    @Column({name: "number_of_likes"})
    numberOfLikes!: number;
}