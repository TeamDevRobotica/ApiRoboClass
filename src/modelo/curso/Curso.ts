import { Entity, OneToMany, ManyToOne, PrimaryGeneratedColumn, Column } from "typeorm";
import { Cursado } from "../cursado/Cursado";
import { CursoCreado } from "../cursoCreado/CursoCreado";

@Entity()
export class Curso {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    descripcion: string;

    //@ManyToOne(type => Docente, docente => docente.cursosCreados, {cascade:true})
    //docente: Docente; //Docente que crea el curso

    @OneToMany(type => CursoCreado, cursosCreados => cursosCreados.curso)
    cursosCreados: CursoCreado[];
}