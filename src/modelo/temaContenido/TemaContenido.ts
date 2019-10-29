import { Entity, OneToMany, Column } from "typeorm";
import { Identidad } from "../comun/Identidad";
import { Contenido } from "../contenido/Contenido";

@Entity()
export class TemaContenido extends Identidad {
    @Column()
    titulo: string;
    
    @OneToMany(type => Contenido, contenidos => contenidos.temaContenido)
    contenidos: Contenido[]; // Un Tema tiene muchos Contenidos
}