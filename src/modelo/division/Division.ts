import { Entity, OneToMany, Column } from "typeorm";
import { Curso } from "../curso/Curso";
import { Identidad } from "../comun/Identidad";

@Entity()
export class Division extends Identidad {
    @Column()
    descripcion: string;
    
    @OneToMany(type => Curso, cursos => cursos.division)
    cursos: Curso[];
}