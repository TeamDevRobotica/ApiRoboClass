import { Entity, Column, ManyToOne, OneToMany } from "typeorm";
import { Identidad } from "../comun/Identidad";
import { RespuestaAlumno } from "../respuesta/RespuestaAlumno";
import { Estudiante } from "../estudiante/Estudiante";
import { CursoCreado } from "../cursadoCreado/CursoCreado";

@Entity()
export class Cursado extends Identidad {

    @Column()
    estado: string;

    @ManyToOne(type => Estudiante, estudiante => estudiante.cursados, { cascade: true })
    estudiante: Estudiante;

    @OneToMany(type => RespuestaAlumno, respuestasAlumnos => respuestasAlumnos.cursado)
    respuestasAlumnos: RespuestaAlumno[];

    @ManyToOne(type => CursoCreado, cursoCreado => cursoCreado.cursados, { cascade: true })
    cursoCreado: CursoCreado;

}