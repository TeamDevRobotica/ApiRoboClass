import { Entity, ManyToOne, Column } from "typeorm";
import { Cursado } from "../cursado/Cursado";
import { PosibleRespuesta } from "../posibleRespuesta/PosibleRespuesta";
import { Identidad } from "../comun/Identidad";

@Entity()
export class Respuesta extends Identidad{
    @Column()
    descripcion: string;

    @ManyToOne(type => Cursado, cursado => cursado.respuestas, {cascade:true})
    cursado: Cursado; //una Respuesta relacionada a un Cursado de un estudiante

    @ManyToOne(type => PosibleRespuesta, posibleRespuesta => posibleRespuesta.respuestas, {cascade:true})
    posibleRespuesta: PosibleRespuesta; //una Respuesta relacionada a un Cursado de un estudiante
}