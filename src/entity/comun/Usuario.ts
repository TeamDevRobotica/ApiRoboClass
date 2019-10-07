import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import { Identidad } from "./Identidad";

@Entity()
export class Usuario extends Identidad {

    @Column()
    Usuario: string;

    @Column()
    Clave: string;

}