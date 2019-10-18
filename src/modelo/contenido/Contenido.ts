import { Entity, Column, ManyToOne, OneToMany } from "typeorm";
import { Identidad } from "../comun/Identidad";
import { TemaContenido } from "./TemaContenido";
import { CursoCreado } from "../cursadoCreado/CursoCreado";
import { Docente } from "../docente/Docente";
import { Pregunta } from "../pregunta/Pregunta";

@Entity()
export class Contenido extends Identidad {

    @Column()
    titulo: string;

    @Column()
    contenido: string;

    @Column()
    codigoContenido: string;

    @Column()
    publico: boolean;

    @ManyToOne(type => TemaContenido, tema => tema.contenidos, { cascade: true })
    tema: TemaContenido;

    @OneToMany(type => CursoCreado, cursosCreados => cursosCreados.contenido)
    cursosCreados: CursoCreado[];

    @ManyToOne(type => Docente, docente => docente.contenidos, { cascade: true })
    docente: Docente;

    @OneToMany(type => Pregunta, preguntas => preguntas.contenido)
    preguntas: Pregunta[];

}