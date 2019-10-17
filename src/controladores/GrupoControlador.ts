import { JsonController, Param, Body, Get, Post, Put, Delete } from "routing-controllers";
import { getRepository } from "typeorm";
import { Grupo } from "../modelo/grupo/Grupo";

@JsonController()
export class GrupoControlador {

    private grupoRepositorio = getRepository(Grupo);

    @Get("/grupo")
    getAll() {
        return this.grupoRepositorio.find();
    }

    @Get("/grupo/:id")
    getOne(@Param("id") id: number) {
        return this.grupoRepositorio.findOne(id);
    }

    @Post("/grupo")
    post(@Body() grupo: any) {
        return this.grupoRepositorio.save(grupo);
    }

    @Put("/grupo/:id")
    put(@Param("id") id: number, @Body() grupo: any) {
        return /* this.estudianteRepositorio.updateById(id, estudiante) */;
    }

    @Delete("/grupo/:id")
    async remove(@Param("id") id: number) {
        let grupo = await this.grupoRepositorio.findOne(id);
        return this.grupoRepositorio.remove(grupo);
    }

}