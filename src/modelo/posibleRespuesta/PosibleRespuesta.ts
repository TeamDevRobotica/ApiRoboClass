import { Entity, OneToMany, ManyToOne, Column } from "typeorm";
import { RespuestaAlumno } from "../respuestaAlumno/RespuestaAlumno";
import { Identidad } from "../comun/Identidad";
import { Pregunta } from "../pregunta/Pregunta";

@Entity()
export class PosibleRespuesta extends Identidad{
    @Column()
    descripcion: string;

    @Column()
    estado: boolean;

    @OneToMany(type => RespuestaAlumno, respuestasAlumno => respuestasAlumno.posibleRespuesta)
    respuestasAlumno: RespuestaAlumno[]; // Una PosibleRespuesta tiene muchas Respuestas

    @ManyToOne(type => Pregunta, pregunta => pregunta.posiblesRespuestas, {cascade:true})
    pregunta: Pregunta; // Una PosibleRespuesta pertenece a una Pregunta
}