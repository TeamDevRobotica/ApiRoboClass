import { Entity, Column, ManyToOne } from "typeorm";
import { Identidad } from "./Identidad";
import { GrupoUsuario } from "../grupoUsuario/GrupoUsuario";

@Entity()
export class Usuario extends Identidad {
    @Column()
    usuario: string;

    @Column()
    clave: string;

    @ManyToOne(type => GrupoUsuario, grupo => grupo.usuarios, { cascade: true })
    grupoUsuario: GrupoUsuario; //Un Usuario tiene un Grupo
}