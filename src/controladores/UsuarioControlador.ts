import { JsonController, Param, Body, Get, Post, Put, Delete } from "routing-controllers";
import { getRepository } from "typeorm";
import { Usuario } from "../modelo/usuario/Usuario";

@JsonController()
export class UsuarioControlador {

    private usuarioRepositorio = getRepository(Usuario);

    @Get("/usuario")
    getAll() {
        return this.usuarioRepositorio.find();
    }

    @Get("/usuario/:id")
    getOne(@Param("id") id: number) {
        return this.usuarioRepositorio.findOne(id);
    }

    @Post("/usuario")
    post(@Body() usuario: any) {
        return this.usuarioRepositorio.save(usuario);
    }

    @Put("/usuario/:id")
    put(@Param("id") id: number, @Body() usuario: any) {
        return /* this.usuarioRepositorio.updateById(id, usuario)*/;
    }

    @Delete("/usuario/:id")
    async remove(@Param("id") id: number) {
        let usuario = await this.usuarioRepositorio.findOne(id);
        return this.usuarioRepositorio.remove(usuario);
    }

}