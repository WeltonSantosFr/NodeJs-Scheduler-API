import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("category")
export class Categories {
  @PrimaryGeneratedColumn("uuid")
  readonly id: string;

  @Column()
  name: string;
}
