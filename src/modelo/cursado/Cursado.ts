import { Entity, ManyToOne, OneToMany } from "typeorm";
import { Estudiante } from "../estudiante/Estudiante";
import { CursoCreado } from "../cursoCreado/CursoCreado";
import { RespuestaAlumno } from "../respuestaAlumno/RespuestaAlumno";
import { Identidad } from "../comun/Identidad";

@Entity()
export class Cursado extends Identidad{
    @ManyToOne(type => Estudiante, estudiante => estudiante.cursados, {cascade:true})
    estudiante: Estudiante; // Un Cursado pertenece a un Estudiante

    @ManyToOne(type => CursoCreado, cursoCreado => cursoCreado.cursados)
    cursoCreado: CursoCreado; // Un Cursado pertenece a un CursoCreado

    @OneToMany(type => RespuestaAlumno, respuestasAlumno => respuestasAlumno.cursado)
    respuestasAlumno: RespuestaAlumno[]; // un Cursado tiene muchas Respuestas
}