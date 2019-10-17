import { Entity, OneToMany, ManyToOne, PrimaryGeneratedColumn, Column } from "typeorm";
import { Identidad } from "../comun/Identidad";
import { CursoCreado } from "../cursoCreado/CursoCreado";
import { Pregunta } from "../pregunta/Pregunta";
import { Tema } from "../tema/Tema";

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
}