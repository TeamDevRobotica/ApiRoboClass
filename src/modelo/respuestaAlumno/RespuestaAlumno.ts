import { Entity, ManyToOne, Column } from "typeorm";
import { Cursado } from "../cursado/Cursado";
import { PosibleRespuesta } from "../posibleRespuesta/PosibleRespuesta";
import { Identidad } from "../comun/Identidad";

@Entity()
export class RespuestaAlumno extends Identidad{
    @Column()
    descripcion: string;

    @ManyToOne(type => Cursado, cursado => cursado.respuestasAlumno, {cascade:true})
    cursado: Cursado; // Una Respuesta pertenece a un Cursado

    @ManyToOne(type => PosibleRespuesta, posibleRespuesta => posibleRespuesta.respuestasAlumno, {cascade:true})
    posibleRespuesta: PosibleRespuesta; // Una Respuesta pertenece a una PosibleRespuesta
}