import { Entity, Column } from "typeorm";
import { Identidad } from "../comun/Identidad";

@Entity()
export class Grupo extends Identidad{
    @Column()
    nombre: string;
}