import { Entity, Column, OneToMany } from "typeorm";
import { Identidad } from "../comun/Identidad";
import { Curso } from "./Curso";

@Entity()
export class Division extends Identidad {

    @Column()
    descripcion: string;

    @OneToMany(type => Curso, cursos => cursos.division)
    cursos: Curso[];

}