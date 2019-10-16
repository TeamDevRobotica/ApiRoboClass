import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from "typeorm";
import { Estudiante } from "../estudiante/Estudiante";
import { CursoCreado } from "../cursoCreado/CursoCreado";
import { Respuesta } from "../respuesta/Respuesta";


@Entity()
export class Cursado {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    fechaInscripcion: Date;

    @ManyToOne(type => Estudiante, estudiante => estudiante.cursados, {cascade:true})
    estudiante: Estudiante;

    @ManyToOne(type => CursoCreado, cursoCreado => cursoCreado.cursados)
    cursoCreado: CursoCreado;

    @OneToMany(type => Respuesta, respuestas => respuestas.cursado)
    respuestas: Respuesta[]; //lista de respuestas por cursado del estudiante
}