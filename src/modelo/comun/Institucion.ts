import { Entity, Column, OneToMany } from "typeorm";
import { Identidad } from "./Identidad";
import { Docente } from "../docente/Docente";

@Entity()
export class Institucion extends Identidad {
    @Column()
    descripcion: string;

    @Column()
    cue: string;

    @OneToMany(type => Docente, docentes => docentes.institucion)
    docentes: Docente[]; // Una Institucion tiene muchos Docentes
}