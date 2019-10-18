import { Entity, OneToMany, ManyToOne } from "typeorm";
import { Persona } from "../persona/Persona";
import { Institucion } from "../comun/Institucion";
import { CursoCreado } from "../cursoCreado/CursoCreado";
import { Contenido } from "../contenido/Contenido";

@Entity()
export class Docente extends Persona {
    @ManyToOne(type => Institucion, institucion => institucion.docentes, { cascade: true })
    institucion: Institucion; // Un Docente pertenece a una Institucion (En esta version de la App)

    @OneToMany(type => CursoCreado, cursosCreados => cursosCreados.docente)
    cursosCreados: CursoCreado[]; // Un Docente tiene muchos CursosCreados
    
    @OneToMany(type => Contenido, contenidos => contenidos.docente)
    contenidos: Contenido[]; // Un Docente tiene muchos Contenidos
}