import { Entity, Column, ManyToOne, OneToMany } from "typeorm";
import { Identidad } from "../comun/Identidad";
import { PosibleRespuesta } from "./PosibleRespuesta";
import { Pregunta } from "./Pregunta";

@Entity()
export class NivelPregunta extends Identidad {

    @Column()
    nivel: string;

    @OneToMany(type => Pregunta, pregunta => pregunta.nivelPregunta)
    preguntas: Pregunta[];

}