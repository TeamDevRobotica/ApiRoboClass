import { Entity, OneToMany, ManyToOne, PrimaryGeneratedColumn, Column } from "typeorm";
import { Identidad } from "../comun/Identidad";
import { PosibleRespuesta } from "../posibleRespuesta/PosibleRespuesta";
import { Nivel } from "../nivel/Nivel";

@Entity()
export class Pregunta extends Identidad{
    @Column()
    descripcion: string;

    @OneToMany(type => PosibleRespuesta, posiblesRespuestas => posiblesRespuestas.pregunta)
    posiblesRespuestas: PosibleRespuesta[]; //

    @ManyToOne(type => Nivel, nivel => nivel.preguntas, {cascade:true})
    nivel: Nivel; //
}