import { Entity, OneToMany, ManyToOne, PrimaryGeneratedColumn, Column } from "typeorm";
import { CursoCreado } from "../cursoCreado/CursoCreado";
import { Division } from "../division/Division";

@Entity()
export class Curso {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    descripcion: string;

    @ManyToOne(type => Division, division => division.cursos, {cascade:true})
    division: Division; //Docente que crea el curso

    @OneToMany(type => CursoCreado, cursosCreados => cursosCreados.curso)
    cursosCreados: CursoCreado[];
}