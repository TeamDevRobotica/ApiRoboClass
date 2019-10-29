import { Entity, OneToMany, ManyToOne, Column } from "typeorm";
import { Identidad } from "../comun/Identidad";
import { CursoCreado } from "../cursoCreado/CursoCreado";
import { Pregunta } from "../pregunta/Pregunta";
import { TemaContenido } from "../temaContenido/TemaContenido";
import { Docente } from "../docente/Docente";

@Entity()
export class Contenido extends Identidad {
    @Column()
    titulo: string;

    @Column()
    descripcion: string;

    @Column()
    contenido: string;

    @Column()
    estado: boolean;
    
    @OneToMany(type => CursoCreado, cursosCreados => cursosCreados.contenido)
    cursosCreados: CursoCreado[]; // Un Contenido tiene muchos CursosCreados

    @OneToMany(type => Pregunta, preguntas => preguntas.contenido)
    preguntas: Pregunta[]; // Un Contenido tiene muchas Preguntas

    @ManyToOne(type => TemaContenido, temaContenido => temaContenido.contenidos, {cascade:true})
    temaContenido: TemaContenido; // Un Contenido pertenece a un Tema

    @ManyToOne(type => Docente, docente => docente.contenidos, {cascade:true})
    docente: Docente; // Un Contenido pertenece a un Docente
}