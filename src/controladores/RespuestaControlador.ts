import { JsonController, Param, Body, Get, Post, Put, Delete } from "routing-controllers";
import { getRepository } from "typeorm";
import { Respuesta } from "../modelo/respuesta/Respuesta";

@JsonController()
export class RespuestaControlador {

    private respuestaRepositorio = getRepository(Respuesta);

    @Get("/respuesta")
    getAll() {
        return this.respuestaRepositorio.find();
    }

    @Get("/respuesta/:id")
    getOne(@Param("id") id: number) {
        return this.respuestaRepositorio.findOne(id);
    }

    @Post("/respuesta")
    post(@Body() respuesta: any) {
        return this.respuestaRepositorio.save(respuesta);
    }

    @Put("/respuesta/:id")
    put(@Param("id") id: number, @Body() respuesta: any) {
        return /* this.docenteRepositorio.updateById(id, docente)*/;
    }

    @Delete("/respuesta/:id")
    async remove(@Param("id") id: number) {
        let respuesta = await this.respuestaRepositorio.findOne(id);
        return this.respuestaRepositorio.remove(respuesta);
    }
}