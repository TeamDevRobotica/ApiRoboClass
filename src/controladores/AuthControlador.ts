import { JsonController, Param, Body, Get, Post, Put, Delete } from "routing-controllers";
import { getRepository } from "typeorm";
import { Docente } from "../modelo/docente/Docente";
import { Estudiante } from "../modelo/estudiante/Estudiante";
import { Usuario } from "../modelo/usuario/Usuario";

//Este controlador se encarga de gestionar los accesos
@JsonController()
export class AuthControlador {

    private docenteRepositorio = getRepository(Docente);
    private estudianteRepositorio = getRepository(Estudiante);
    private usuarioRepositorio = getRepository(Usuario);

    @Get("/auth/login/:usuario/:clave")
    async getUsuario(@Param("usuario") usuario: string, @Param("clave") clave: string) {
        return this.controlarUsuario(usuario, clave);
    }

    async controlarUsuario(@Param("usuario") usuario: string, @Param("clave") clave: string) {
        let retorno: Array<any> = [];

        let usuarioRepo = await this.usuarioRepositorio.findOne({ where: { usuario: usuario, clave: clave } });

        let docente = await this.docenteRepositorio.findOne({
            relations: ['usuario', 'institucion'],
            where: {
                usuario: usuarioRepo
            }
        });
        if (docente) {
            retorno.push(docente);
            retorno.push('docente');
            return retorno;
        }

        let estudiante = await this.estudianteRepositorio.findOne({
            relations: ['usuario'],
            where: {
                usuario: usuarioRepo
            }
        });
        if (estudiante) {
            retorno.push(estudiante);
            retorno.push('estudiante');
            return retorno;
        }

        return false;
    }

}