import { Entity, Column, ManyToOne, OneToMany } from "typeorm";
import { Identidad } from "../comun/Identidad";
import { Cursado } from "../cursado/Cursado";
import { Contenido } from "../contenido/Contenido";
import { Docente } from "../docente/Docente";
import { Curso } from "./Curso";

@Entity()
export class CursoCreado extends Identidad {

    @Column()
    estado: string;

    @ManyToOne(type => Contenido, contenido => contenido.cursosCreados, { cascade: true })
    contenido: Contenido;

    @OneToMany(type => Cursado, cursados => cursados.cursoCreado)
    cursados: Cursado[];

    @ManyToOne(type => Docente, docente => docente.cursosCreados, { cascade: true })
    docente: Docente;

    @ManyToOne(type => Curso, curso => curso.cursosCreados, { cascade: true })
    curso: Curso;

}