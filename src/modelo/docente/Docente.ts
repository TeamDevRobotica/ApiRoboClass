import { Persona } from "../persona/Persona";
import { Entity, OneToMany, ManyToOne } from "typeorm";
import { Institucion } from "../comun/Institucion";

@Entity()
export class Docente extends Persona {
    @ManyToOne(type => Institucion, institucion => institucion.docentes, { cascade: true })
    institucion: Institucion;
}