import { Entity, OneToMany, ManyToOne, PrimaryGeneratedColumn, Column } from "typeorm";
import { Docente } from "../docente/Docente";
import { Cursado } from "../cursado/Cursado";

@Entity()
export class CursoCreado {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    descripcion: string;

    @ManyToOne(type => Docente, docente => docente.cursosCreados, {cascade:true})
    docente: Docente; //Docente que crea el curso

    @OneToMany(type => Cursado, cursados => cursados.cursoCreado)
    cursados: Cursado[];

}