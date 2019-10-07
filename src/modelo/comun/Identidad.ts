import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

export abstract class Identidad {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    fechaCreacion: Date;

}