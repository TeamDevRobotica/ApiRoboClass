import { JsonController, Get, Param, Post, Put, Body, Delete } from "routing-controllers";
import { getRepository } from "typeorm";
import { Usuario } from "../modelo/comun/Usuario";


@JsonController()
export class LoginControlador {

    private adminRepositorio = getRepository(Usuario);

    @Get("/login/:usuario/:clave")
    async getLogin(@Param("usuario") usuario: string, @Param("clave") clave: string) {
        return this.controlarUsuario(usuario, clave);
    }

    async controlarUsuario(@Param("usuario") usuario: string, @Param("clave") clave: string) {
        let retorno: Array<any> = [];
        let admin = await this.adminRepositorio.findOne({
            where: {
                usuario: usuario,
                clave: clave
            }
        });

        if (admin) {
            retorno.push(admin);
            retorno.push('admin');
            return retorno;
        }

        return false;
    }


    // @Get("/login")
    // getAll() {
    //     return this.adminRepositorio.find();
    // }

}