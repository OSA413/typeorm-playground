import { AfterLoad, Column, Entity, Index, ManyToOne, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm"

@Entity("album")
export class Album {
    @PrimaryColumn({name: "album_id"})
    albumId!: number;

    @Column({type: "numeric", precision: 10, scale: 2})
    total!: number;

    @Column({type: "numeric", precision: 10, scale: 2})
    otherNumberic!: number;
}