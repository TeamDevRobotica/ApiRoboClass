import { JsonController, Param, Body, Get, Post, Put, Delete } from "routing-controllers";
import { getRepository } from "typeorm";
import { Usuario } from "../modelo/comun/Usuario";

@JsonController()
export class EstudianteControlador {

    private usuarioRepositorio = getRepository(Usuario);

    @Get("/estudiante")
    getAll() {
        return this.usuarioRepositorio.find();
    }

    @Get("/estudiante/:id")
    getOne(@Param("id") id: number) {
        return this.usuarioRepositorio.findOne(id);
    }

    @Post("/estudiante")
    post(@Body() usuario: any) {
        return this.usuarioRepositorio.save(usuario);
    }

    @Put("/estudiante/:id")
    put(@Param("id") id: number, @Body() usuario: any) {
        return /* this.usuarioRepositorio.updateById(id, usuario) */;
    }

    @Delete("/estudiante/:id")
    async remove(@Param("id") id: number) {
        let usuario = await this.usuarioRepositorio.findOne(id);
        return this.usuarioRepositorio.remove(usuario);
    }

}