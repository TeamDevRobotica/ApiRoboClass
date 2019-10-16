import { JsonController, Param, Body, Get, Post, Put, Delete } from "routing-controllers";
import { getRepository } from "typeorm";
import { Pregunta } from "../modelo/pregunta/Pregunta";

@JsonController()
export class PreguntaControlador {

    private preguntaRepositorio = getRepository(Pregunta);

    @Get("/pregunta")
    getAll() {
        return this.preguntaRepositorio.find();
    }

    @Get("/pregunta/:id")
    getOne(@Param("id") id: number) {
        return this.preguntaRepositorio.findOne(id);
    }

    @Post("/pregunta")
    post(@Body() pregunta: any) {
        return this.preguntaRepositorio.save(pregunta);
    }

    @Put("/pregunta/:id")
    put(@Param("id") id: number, @Body() pregunta: any) {
        return /* this.docenteRepositorio.updateById(id, docente)*/;
    }

    @Delete("/pregunta/:id")
    async remove(@Param("id") id: number) {
        let pregunta = await this.preguntaRepositorio.findOne(id);
        return this.preguntaRepositorio.remove(pregunta);
    }
}