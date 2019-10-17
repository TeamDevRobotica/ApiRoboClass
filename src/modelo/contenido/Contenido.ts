import { Entity, OneToMany, ManyToOne, Column } from "typeorm";
import { Identidad } from "../comun/Identidad";
import { CursoCreado } from "../cursoCreado/CursoCreado";
import { Pregunta } from "../pregunta/Pregunta";
import { Tema } from "../tema/Tema";
import { Docente } from "../docente/Docente";

@Entity()
export class Contenido extends Identidad {
    @Column()
    contenido: string;

    @Column()
    estado: boolean;
    
    @OneToMany(type => CursoCreado, cursosCreados => cursosCreados.contenido)
    cursosCreados: CursoCreado[];

    @OneToMany(type => Pregunta, preguntas => preguntas.contenido)
    preguntas: Pregunta[];

    @ManyToOne(type => Tema, tema => tema.contenidos, {cascade:true})
    tema: Tema; //

    @ManyToOne(type => Docente, docente => docente.contenidos, {cascade:true})
    docente: Docente; //
}