import { Persona } from "../persona/Persona";
import { Entity, OneToMany, ManyToOne } from "typeorm";
import { Institucion } from "../comun/Institucion";
import { CursoCreado } from "../cursoCreado/CursoCreado";

@Entity()
export class Docente extends Persona {
    @ManyToOne(type => Institucion, institucion => institucion.docentes, { cascade: true })
    institucion: Institucion; //institucion al que pertenece un docente

    @OneToMany(type => CursoCreado, cursosCreados => cursosCreados.docente)
    cursosCreados: CursoCreado[]; //lista de cursos creados por el docente
    
    //@OneToMany(type => Docente, docentes => docentes.institucion)
    //docentes: Docente[];
}