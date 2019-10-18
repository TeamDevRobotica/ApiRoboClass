import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, ManyToOne } from "typeorm";
import { Identidad } from "../comun/Identidad";
import { GrupoUsuario } from "./GrupoUsuario";

@Entity()
export class Usuario extends Identidad {

    @Column()
    usuario: string;

    @Column()
    clave: string;

    @ManyToOne(type => GrupoUsuario, grupoUsuario => grupoUsuario.usuarios, { cascade: true })
    grupoUsuario: GrupoUsuario;

}