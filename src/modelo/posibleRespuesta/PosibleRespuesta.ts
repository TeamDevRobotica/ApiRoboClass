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
    respuestas: Respuesta[]; // Una PosibleRespuesta tiene muchas Respuestas

    @ManyToOne(type => Pregunta, pregunta => pregunta.posiblesRespuestas, {cascade:true})
    pregunta: Pregunta; // Una PosibleRespuesta pertenece a una Pregunta
}