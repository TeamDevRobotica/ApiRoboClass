import { Entity, Column, OneToMany, ManyToOne } from "typeorm";
import { Identidad } from "../comun/Identidad";
import { CursoCreado } from "./CursoCreado";
import { Division } from "./Division";

@Entity()
export class Curso extends Identidad {

    @Column()
    descripcion: string;

    @OneToMany(type => CursoCreado, cursosCreados => cursosCreados.curso)
    cursosCreados: CursoCreado[];

    @ManyToOne(type => Division, division => division.cursos, { cascade: true })
    division: Division;

}