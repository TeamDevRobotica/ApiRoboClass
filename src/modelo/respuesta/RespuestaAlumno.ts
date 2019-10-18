import { Entity, ManyToOne } from "typeorm";
import { Identidad } from "../comun/Identidad";
import { Cursado } from "../cursado/Cursado";
import { PosibleRespuesta } from "../pregunta/PosibleRespuesta";

@Entity()
export class RespuestaAlumno extends Identidad {

    @ManyToOne(type => PosibleRespuesta, posibleRespuesta => posibleRespuesta.respuestasAlumnos, { cascade: true })
    posibleRespuesta: PosibleRespuesta;

    @ManyToOne(type => Cursado, cursado => cursado.respuestasAlumnos, { cascade: true })
    cursado: Cursado;

}