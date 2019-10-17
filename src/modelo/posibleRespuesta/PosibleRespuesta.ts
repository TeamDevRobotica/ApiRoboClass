import { Entity, OneToMany, ManyToOne, Column } from "typeorm";
import { Respuesta } from "../respuesta/Respuesta";
import { Identidad } from "../comun/Identidad";
import { Pregunta } from "../pregunta/Pregunta";

@Entity()
export class PosibleRespuesta extends Identidad{
    @Column()
    descripcion: string;

    @Column()
    estado: boolean;

    @OneToMany(type => Respuesta, respuestas => respuestas.posibleRespuesta)
    respuestas: Respuesta[]; //lista de respuestas relacionadas con una PosiblesResuesta 

    @ManyToOne(type => Pregunta, pregunta => pregunta.posiblesRespuestas, {cascade:true})
    pregunta: Pregunta; //una Respuesta relacionada a un Cursado de un estudiante
}