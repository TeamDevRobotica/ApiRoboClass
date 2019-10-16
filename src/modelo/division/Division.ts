import { Entity, OneToMany, ManyToOne, PrimaryGeneratedColumn, Column } from "typeorm";
import { Curso } from "../curso/Curso";

@Entity()
export class Division {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    descripcion: string;
    
    @OneToMany(type => Curso, cursos => cursos.division)
    cursos: Curso[];
}