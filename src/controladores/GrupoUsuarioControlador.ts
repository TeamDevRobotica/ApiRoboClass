import { JsonController, Param, Body, Get, Post, Put, Delete } from "routing-controllers";
import { getRepository } from "typeorm";
import { GrupoUsuario } from "../modelo/usuario/GrupoUsuario";

@JsonController()
export class GrupoUsuarioControlador {

    private grupoUsuarioRepositorio = getRepository(GrupoUsuario);

    @Get("/grupo")
    getAll() {
        return this.grupoUsuarioRepositorio.find();
    }

    @Get("/grupo/:id")
    getOne(@Param("id") id: number) {
        return this.grupoUsuarioRepositorio.findOne(id);
    }

    @Post("/grupo")
    post(@Body() grupoUsuario: any) {
        return this.grupoUsuarioRepositorio.save(grupoUsuario);
    }

    @Put("/grupo/:id")
    put(@Param("id") id: number, @Body() grupoUsuario: any) {
        return /* this.grupoUsuarioRepositorio.updateById(id, grupoUsuario)*/;
    }

    @Delete("/grupo/:id")
    async remove(@Param("id") id: number) {
        let grupoUsuario = await this.grupoUsuarioRepositorio.findOne(id);
        return this.grupoUsuarioRepositorio.remove(grupoUsuario);
    }

}