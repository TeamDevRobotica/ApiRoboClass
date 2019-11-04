import { Entity, Column, ManyToOne, OneToMany } from "typeorm";
import { Identidad } from "../comun/Identidad";
import { PosibleRespuesta } from "./PosibleRespuesta";
import { NivelPregunta } from "./NivelPregunta";
import { Contenido } from "../contenido/Contenido";

@Entity()
export class Pregunta extends Identidad {

    @Column()
    pregunta: string;

    @Column()
    orden: number;

    @OneToMany(type => PosibleRespuesta, posiblesRespuestas => posiblesRespuestas.pregunta,
        {cascade:true})
    posiblesRespuestas: PosibleRespuesta[];

    @ManyToOne(type => NivelPregunta, nivelPregunta => nivelPregunta.preguntas, { cascade: true })
    nivelPregunta: NivelPregunta;

    @ManyToOne(type => Contenido, contenido => contenido.preguntas, { cascade: true })
    contenido: Contenido;

}