import { Entity, Column, ManyToOne } from "typeorm";
import { Identidad } from "./Identidad";
import { Grupo } from "../grupo/Grupo";

@Entity()
export class Usuario extends Identidad {
    @Column()
    usuario: string;

    @Column()
    clave: string;

    @ManyToOne(type => Grupo, grupo => grupo.usuarios, { cascade: true })
    grupo: Grupo; //Un Usuario tiene un Grupo
}