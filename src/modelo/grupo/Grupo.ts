import { Entity, Column, OneToMany } from "typeorm";
import { Identidad } from "../comun/Identidad";
import { Usuario } from "../comun/Usuario";

@Entity()
export class Grupo extends Identidad{
    @Column()
    nombre: string;

    @OneToMany(type => Usuario, usuarios => usuarios.grupo)
    usuarios: Usuario[]; //Un Grupo tiene muchos Usuarios
}