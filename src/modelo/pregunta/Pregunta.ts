import { Entity, OneToMany, ManyToOne, PrimaryGeneratedColumn, Column } from "typeorm";
import { Identidad } from "../comun/Identidad";
import { PosibleRespuesta } from "../posibleRespuesta/PosibleRespuesta";

@Entity()
export class Pregunta extends Identidad{
    @Column()
    descripcion: string;

    @OneToMany(type => PosibleRespuesta, posiblesRespuestas => posiblesRespuestas.pregunta)
    posiblesRespuestas: PosibleRespuesta[]; //

    //@ManyToOne(type => Cursado, cursado => cursado.respuestas, {cascade:true})
    //cursado: Cursado; //una Respuesta relacionada a un Cursado de un estudiante
}