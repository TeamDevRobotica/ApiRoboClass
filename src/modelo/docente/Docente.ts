import { Persona } from "../persona/Persona";
import { Entity, OneToMany, ManyToOne } from "typeorm";
import { Institucion } from "../comun/Institucion";
import { CursoCreado } from "../cursadoCreado/CursoCreado";
import { Contenido } from "../contenido/Contenido";

@Entity()
export class Docente extends Persona {

    @ManyToOne(type => Institucion, institucion => institucion.docentes, { cascade: true })
    institucion: Institucion;

    @OneToMany(type => CursoCreado, cursados => cursados.docente)
    cursosCreados: CursoCreado[];

    @OneToMany(type => Contenido, contenidos => contenidos.docente)
    contenidos: Contenido[];

}