import { Entity, OneToMany, ManyToOne, PrimaryGeneratedColumn, Column } from "typeorm";
import { Respuesta } from "../respuesta/Respuesta";

@Entity()
export class PosibleRespuesta {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    descripcion: string;

    @Column()
    estado: boolean;

    @OneToMany(type => Respuesta, respuestas => respuestas.posibleRespuesta)
    respuestas: Respuesta[]; //lista de respuestas relacionadas con una PosiblesResuesta 

    //@ManyToOne(type => Cursado, cursado => cursado.respuestas, {cascade:true})
    //cursado: Cursado; //una Respuesta relacionada a un Cursado de un estudiante
}