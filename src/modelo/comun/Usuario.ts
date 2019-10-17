import { Entity, Column } from "typeorm";
import { Identidad } from "./Identidad";

@Entity()
export class Usuario extends Identidad {
    @Column()
    usuario: string;

    @Column()
    clave: string;

    // @OneToOne(type => Grupo, {cascade: true}) //cascada: cuando guardemos una Usuario
    // @JoinColumn()                             //automaticamente debe guardar el grupo al que pertenece
    // grupo: Grupo;
}