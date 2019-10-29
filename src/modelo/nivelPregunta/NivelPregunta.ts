import { Entity, OneToMany, Column } from "typeorm";
import { Identidad } from "../comun/Identidad";
import { Pregunta } from "../pregunta/Pregunta";
@Entity()
export class NivelPregunta extends Identidad {
    @Column()
    descripcion: string;
    
    @OneToMany(type => Pregunta, preguntas => preguntas.nivelPregunta)
    preguntas: Pregunta[]; // Un Nivel tiene muchas Preguntas 
}