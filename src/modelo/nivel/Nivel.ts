import { Entity, OneToMany, ManyToOne, PrimaryGeneratedColumn, Column } from "typeorm";
import { Curso } from "../curso/Curso";
import { Identidad } from "../comun/Identidad";
import { Pregunta } from "../pregunta/Pregunta";

@Entity()
export class Nivel extends Identidad {
    @Column()
    descripcion: string;
    
    @OneToMany(type => Pregunta, preguntas => preguntas.nivel)
    preguntas: Pregunta[];
}