import { Entity, OneToMany, Column } from "typeorm";
import { Identidad } from "../comun/Identidad";
import { Pregunta } from "../pregunta/Pregunta";
@Entity()
export class Nivel extends Identidad {
    @Column()
    descripcion: string;
    
    @OneToMany(type => Pregunta, preguntas => preguntas.nivel)
    preguntas: Pregunta[];
}