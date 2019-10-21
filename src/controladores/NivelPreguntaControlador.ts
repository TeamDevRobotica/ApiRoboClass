import { JsonController, Param, Body, Get, Post, Put, Delete } from "routing-controllers";
import { getRepository } from "typeorm";
import { NivelPregunta } from "../modelo/pregunta/NivelPregunta";

@JsonController()
export class NivelPreguntaControlador {

    private nivelPreguntaRepositorio = getRepository(NivelPregunta);

    @Get("/nivelPregunta")
    getAll() {
        return this.nivelPreguntaRepositorio.find();
    }

    @Get("/nivelPregunta/:id")
    getOne(@Param("id") id: number) {
        return this.nivelPreguntaRepositorio.findOne(id);
    }

    @Post("/nivelPregunta")
    post(@Body() nivelPregunta: any) {
        return this.nivelPreguntaRepositorio.save(nivelPregunta);
    }

    @Put("/nivelPregunta/:id")
    put(@Param("id") id: number, @Body() nivelPregunta: any) {
        return /* this.nivelPreguntaRepositorio.updateById(id, nivelPregunta)*/;
    }

    @Delete("/nivelPregunta/:id")
    async remove(@Param("id") id: number) {
        let nivelPregunta = await this.nivelPreguntaRepositorio.findOne(id);
        return this.nivelPreguntaRepositorio.remove(nivelPregunta);
    }

}