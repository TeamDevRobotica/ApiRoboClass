import { JsonController, Param, Body, Get, Post, Put, Delete } from "routing-controllers";
import { getRepository } from "typeorm";
import { TemaContenido } from "../modelo/temaContenido/TemaContenido";

@JsonController()
export class TemaContenidoControlador {

    private temaContenidoRepositorio = getRepository(TemaContenido);

    @Get("/temaContenido")
    getAll() {
        return this.temaContenidoRepositorio.find();
    }

    @Get("/temaContenido/:id")
    getOne(@Param("id") id: number) {
        return this.temaContenidoRepositorio.findOne(id);
    }

    @Post("/temaContenido")
    post(@Body() temaContenido: any) {
        return this.temaContenidoRepositorio.save(temaContenido);
    }

    @Put("/temaContenido/:id")
    put(@Param("id") id: number, @Body() temaContenido: any) {
        return /* this.docenteRepositorio.updateById(id, docente)*/;
    }

    @Delete("/temaContenido/:id")
    async remove(@Param("id") id: number) {
        let temaContenido = await this.temaContenidoRepositorio.findOne(id);
        return this.temaContenidoRepositorio.remove(temaContenido);
    }
}