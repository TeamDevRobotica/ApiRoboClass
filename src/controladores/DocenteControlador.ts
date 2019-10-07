import { JsonController, Param, Body, Get, Post, Put, Delete } from "routing-controllers";
import { getRepository } from "typeorm";
import { Docente } from "../entity/docente/Docente";

@JsonController()
export class DocenteControlador {

    private docenteRepositorio = getRepository(Docente);

    @Get("/docente")
    getAll() {
        return this.docenteRepositorio.find();
    }

    @Get("/docente/:id")
    getOne(@Param("id") id: number) {
        return this.docenteRepositorio.findOne(id);
    }

    @Post("/docente")
    post(@Body() docente: Docente) {
        return this.docenteRepositorio.save(docente);
    }

    @Put("/docente/:id")
    put(@Param("id") id: number, @Body() docente: Docente) {
        return /* this.docenteRepositorio.updateById(id, docente) */;
    }

    @Delete("/docente/:id")
    async remove(@Param("id") id: number) {
        let docente = await this.docenteRepositorio.findOne(id);
        return this.docenteRepositorio.remove(docente);
    }

}