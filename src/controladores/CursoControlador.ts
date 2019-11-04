import { JsonController, Param, Body, Get, Post, Put, Delete } from "routing-controllers";
import { getRepository } from "typeorm";
import { Curso } from "../modelo/cursadoCreado/Curso";

@JsonController()
export class CursoControlador {

    private cursoRepositorio = getRepository(Curso);

    @Get("/curso")
    getAll() {
        //return this.cursoRepositorio.find({ relations: ['division']});
        return this.cursoRepositorio.query(`SELECT DISTINCT *,c.descripcion FROM roboClass.curso c;`);
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
        return this.cursoRepositorio.update(id, curso);
    }

    @Delete("/curso/:id")
    async remove(@Param("id") id: number) {
        let curso = await this.cursoRepositorio.findOne(id);
        return this.cursoRepositorio.remove(curso);
    }

}