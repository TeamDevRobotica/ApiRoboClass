import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, ManyToOne, OneToMany } from "typeorm";
import { Identidad } from "../comun/Identidad";
import { Contenido } from "./Contenido";

@Entity()
export class TemaContenido extends Identidad {

    @Column()
    descripcion: string;

    @OneToMany(type => Contenido, contenidos => contenidos.tema)
    contenidos: Contenido[];
}