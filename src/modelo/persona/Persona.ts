import { Entity, Column, OneToOne, JoinColumn } from "typeorm";
import { Identidad } from "../comun/Identidad";
import { Usuario } from "../comun/Usuario";

export abstract class Persona extends Identidad {

    @Column()
    nombre: string;

    @Column()
    apellido: string;

    @Column()
    correo: string;

    @Column({ unique: true })
    dni: number;

    @OneToOne(type => Usuario)
    @JoinColumn()
    usuario: Usuario;
}