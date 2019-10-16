import { JsonController, Param, Body, Get, Post, Put, Delete } from "routing-controllers";
import { getRepository } from "typeorm";
import { Nivel } from "../modelo/nivel/Nivel";

@JsonController()
export class NivelControlador {

    private nivelRepositorio = getRepository(Nivel);

    @Get("/nivel")
    getAll() {
        return this.nivelRepositorio.find();
    }

    @Get("/nivel/:id")
    getOne(@Param("id") id: number) {
        return this.nivelRepositorio.findOne(id);
    }

    @Post("/nivel")
    post(@Body() nivel: any) {
        return this.nivelRepositorio.save(nivel);
    }

    @Put("/nivel/:id")
    put(@Param("id") id: number, @Body() nivel: any) {
        return /* this.docenteRepositorio.updateById(id, docente)*/;
    }

    @Delete("/nivel/:id")
    async remove(@Param("id") id: number) {
        let nivel = await this.nivelRepositorio.findOne(id);
        return this.nivelRepositorio.remove(nivel);
    }
}