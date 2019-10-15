import { JsonController, Param, Body, Get, Post, Put, Delete } from "routing-controllers";
import { getRepository } from "typeorm";
import { Cursado } from "../modelo/cursado/Cursado";

@JsonController()
export class CursadoControlador {

    private cursadoRepositorio = getRepository(Cursado);

    @Get("/cursado")
    getAll() {
        return this.cursadoRepositorio.find();
    }

    @Get("/cursado/:id")
    getOne(@Param("id") id: number) {
        return this.cursadoRepositorio.findOne(id);
    }

    @Post("/cursado")
    post(@Body() cursado: any) {
        return this.cursadoRepositorio.save(cursado);
    }

    @Put("/cursado/:id")
    put(@Param("id") id: number, @Body() cursado: any) {
        return /* this.docenteRepositorio.updateById(id, docente)*/;
    }

    @Delete("/cursado/:id")
    async remove(@Param("id") id: number) {
        let cursado = await this.cursadoRepositorio.findOne(id);
        return this.cursadoRepositorio.remove(cursado);
    }
}