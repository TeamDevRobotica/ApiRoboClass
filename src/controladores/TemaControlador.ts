import { JsonController, Param, Body, Get, Post, Put, Delete } from "routing-controllers";
import { getRepository } from "typeorm";
import { Tema } from "../modelo/tema/Tema";

@JsonController()
export class TemaControlador {

    private temaRepositorio = getRepository(Tema);

    @Get("/tema")
    getAll() {
        return this.temaRepositorio.find();
    }

    @Get("/tema/:id")
    getOne(@Param("id") id: number) {
        return this.temaRepositorio.findOne(id);
    }

    @Post("/tema")
    post(@Body() tema: any) {
        return this.temaRepositorio.save(tema);
    }

    @Put("/tema/:id")
    put(@Param("id") id: number, @Body() tema: any) {
        return /* this.docenteRepositorio.updateById(id, docente)*/;
    }

    @Delete("/tema/:id")
    async remove(@Param("id") id: number) {
        let tema = await this.temaRepositorio.findOne(id);
        return this.temaRepositorio.remove(tema);
    }
}