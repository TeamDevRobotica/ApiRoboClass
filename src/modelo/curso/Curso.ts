import { Entity, OneToMany, ManyToOne, Column } from "typeorm";
import { CursoCreado } from "../cursoCreado/CursoCreado";
import { Division } from "../division/Division";
import { Identidad } from "../comun/Identidad";

@Entity()
export class Curso extends Identidad{
    @Column()
    descripcion: string;

    @ManyToOne(type => Division, division => division.cursos, {cascade:true})
    division: Division; // Un Curso pertenece a una Division

    @OneToMany(type => CursoCreado, cursosCreados => cursosCreados.curso)
    cursosCreados: CursoCreado[]; // Un Curso tiene muchos CursosCreados
}