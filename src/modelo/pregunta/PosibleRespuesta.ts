import { Entity, Column, ManyToOne, OneToMany } from "typeorm";
import { Identidad } from "../comun/Identidad";
import { Pregunta } from "./Pregunta";
import { RespuestaAlumno } from "../respuesta/RespuestaAlumno";

@Entity()
export class PosibleRespuesta extends Identidad {

    @Column()
    descripcion: string;

    @Column()
    correcta: boolean;

    @ManyToOne(type => Pregunta, pregunta => pregunta.posiblesRespuestas/*, { cascade: true }*/)
    pregunta: Pregunta;

    @OneToMany(type => RespuestaAlumno, respuestasAlumnos => respuestasAlumnos.posibleRespuesta)
    respuestasAlumnos: RespuestaAlumno[];

}