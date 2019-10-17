import { Entity, OneToMany, ManyToOne, Column } from "typeorm";
import { Docente } from "../docente/Docente";
import { Cursado } from "../cursado/Cursado";
import { Curso } from "../curso/Curso";
import { Identidad } from "../comun/Identidad";
import { Contenido } from "../contenido/Contenido";

@Entity()
export class CursoCreado extends Identidad{
    @Column()
    descripcion: string;

    @ManyToOne(type => Docente, docente => docente.cursosCreados, {cascade:true})
    docente: Docente; //Docente que crea el curso

    @ManyToOne(type => Curso, curso => curso.cursosCreados, {cascade:true})
    curso: Curso; //

    @ManyToOne(type => Contenido, contenido => contenido.cursosCreados, {cascade:true})
    contenido: Contenido; //

    @OneToMany(type => Cursado, cursados => cursados.cursoCreado)
    cursados: Cursado[];
}