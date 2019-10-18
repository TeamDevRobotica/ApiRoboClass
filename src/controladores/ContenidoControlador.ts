import { JsonController, Param, Body, Get, Post, Put, Delete } from "routing-controllers";
import { getRepository } from "typeorm";
import { Institucion } from "../modelo/comun/Institucion";
import { Contenido } from "../modelo/contenido/Contenido";

@JsonController()
export class ContenidoControlador {

    private contenidoRepositorio = getRepository(Contenido);

    @Get("/contenido")
    getAll() {
        return this.contenidoRepositorio.find();
    }

    @Get("/contenido/:id")
    getOne(@Param("id") id: number) {
        return this.contenidoRepositorio.findOne(id);
    }

    @Post("/contenido")
    post(@Body() contenido: any) {
        return this.contenidoRepositorio.save(contenido);
    }

    @Put("/contenido/:id")
    put(@Param("id") id: number, @Body() contenido: any) {
        return /* this.contenidoRepositorio.updateById(id, contenido)*/;
    }

    @Delete("/contenido/:id")
    async remove(@Param("id") id: number) {
        let contenido = await this.contenidoRepositorio.findOne(id);
        return this.contenidoRepositorio.remove(contenido);
    }

}