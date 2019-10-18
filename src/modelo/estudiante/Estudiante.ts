import { Persona } from "../persona/Persona";
import { Entity, OneToMany } from "typeorm";
import { Cursado } from "../cursado/Cursado";

@Entity()
export class Estudiante extends Persona {
    @OneToMany(type => Cursado, cursados => cursados.estudiante)
    cursados: Cursado[]; // Un Estudiante tiene muchos Cursados
}