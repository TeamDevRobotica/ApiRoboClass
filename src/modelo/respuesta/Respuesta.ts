import { Entity, OneToMany, ManyToOne, PrimaryGeneratedColumn, Column } from "typeorm";
import { Docente } from "../docente/Docente";
import { Cursado } from "../cursado/Cursado";

@Entity()
export class Respuesta {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    descripcion: string;

    @ManyToOne(type => Cursado, cursado => cursado.respuestas, {cascade:true})
    cursado: Cursado; //una Respuesta relacionada a un Cursado de un estudiante
}