import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { Estudiante } from "../estudiante/Estudiante";
import { CursoCreado } from "../cursoCreado/CursoCreado";


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
}