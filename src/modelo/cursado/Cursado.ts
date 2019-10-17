import { Entity, ManyToOne, OneToMany } from "typeorm";
import { Estudiante } from "../estudiante/Estudiante";
import { CursoCreado } from "../cursoCreado/CursoCreado";
import { Respuesta } from "../respuesta/Respuesta";
import { Identidad } from "../comun/Identidad";

@Entity()
export class Cursado extends Identidad{
    @ManyToOne(type => Estudiante, estudiante => estudiante.cursados, {cascade:true})
    estudiante: Estudiante;

    @ManyToOne(type => CursoCreado, cursoCreado => cursoCreado.cursados)
    cursoCreado: CursoCreado;

    @OneToMany(type => Respuesta, respuestas => respuestas.cursado)
    respuestas: Respuesta[]; //lista de respuestas por cursado del estudiante
}