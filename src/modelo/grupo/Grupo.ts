import { Entity, Column } from "typeorm";

@Entity()
export class Grupo {
    @Column()
    nombre: string;
}