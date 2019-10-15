import { Persona } from "../persona/Persona";
import { Entity, OneToMany, ManyToOne } from "typeorm";
import { Cursado } from "../cursado/Cursado";

@Entity()
export class Estudiante extends Persona {
    @OneToMany(type => Cursado, cursado => cursado.estudiante)
    cursado: Cursado;
}