import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { Estudiante } from "../estudiante/Estudiante";


@Entity()
export class Cursado {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    fechaInscripcion: Date;

    @ManyToOne(type => Estudiante, estudiante => estudiante.cursado, {cascade:true})
    estudiante: Estudiante;

    //@Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    //fechaCreacion: Date;
}