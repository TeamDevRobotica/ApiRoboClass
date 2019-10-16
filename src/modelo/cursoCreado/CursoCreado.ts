import { Entity, OneToMany, ManyToOne, PrimaryGeneratedColumn, Column } from "typeorm";
import { Docente } from "../docente/Docente";
import { Cursado } from "../cursado/Cursado";
import { Curso } from "../curso/Curso";

@Entity()
export class CursoCreado {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    descripcion: string;

    @ManyToOne(type => Docente, docente => docente.cursosCreados, {cascade:true})
    docente: Docente; //Docente que crea el curso

    @ManyToOne(type => Curso, curso => curso.cursosCreados, {cascade:true})
    curso: Curso; //

    @OneToMany(type => Cursado, cursados => cursados.cursoCreado)
    cursados: Cursado[];
}