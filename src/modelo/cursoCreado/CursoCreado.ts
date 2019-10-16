import { Entity, OneToMany, ManyToOne, PrimaryGeneratedColumn, Column } from "typeorm";
import { Docente } from "../docente/Docente";

@Entity()
export class CursoCreado {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    descripcion: string;

    @ManyToOne(type => Docente, docente => docente.cursosCreados, {cascade:true})
    docente: Docente; //Docente que crea el curso
}