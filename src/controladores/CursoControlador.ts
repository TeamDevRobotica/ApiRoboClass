import { JsonController, Param, Body, Get, Post, Put, Delete } from "routing-controllers";
import { getRepository } from "typeorm";
import { Curso } from "../modelo/curso/Curso";

@JsonController()
export class CursoControlador {

    private cursoRepositorio = getRepository(Curso);

    @Get("/curso")
    getAll() {
        return this.cursoRepositorio.find();
    }

    @Get("/curso/:id")
    getOne(@Param("id") id: number) {
        return this.cursoRepositorio.findOne(id);
    }

    @Post("/curso")
    post(@Body() curso: any) {
        return this.cursoRepositorio.save(curso);
    }

    @Put("/curso/:id")
    put(@Param("id") id: number, @Body() curso: any) {
        return /* this.docenteRepositorio.updateById(id, docente)*/;
    }

    @Delete("/curso/:id")
    async remove(@Param("id") id: number) {
        let curso = await this.cursoRepositorio.findOne(id);
        return this.cursoRepositorio.remove(curso);
    }
}