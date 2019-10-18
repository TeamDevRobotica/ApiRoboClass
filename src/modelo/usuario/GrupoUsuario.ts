import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Identidad } from "../comun/Identidad";
import { Usuario } from "./Usuario";

@Entity()
export class GrupoUsuario extends Identidad {

    @Column()
    descripcion: string;

    @OneToMany(type => Usuario, usuarios => usuarios.grupoUsuario)
    usuarios: Usuario[];

}