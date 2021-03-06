import { JsonController, Param, Body, Get, Post, Put, Delete } from "routing-controllers";
import { getRepository } from "typeorm";
import { PosibleRespuesta } from "../modelo/pregunta/PosibleRespuesta";

@JsonController()
export class PosibleRespuestaControlador {

    private posibleRespuestaRepositorio = getRepository(PosibleRespuesta);

    @Get("/posibleRespuesta")
    getAll() {
        return this.posibleRespuestaRepositorio.find();
    }

    @Get("/posibleRespuesta/:id")
    getOne(@Param("id") id: number) {
        return this.posibleRespuestaRepositorio.findOne(id);
    }

    @Post("/posibleRespuesta")
    post(@Body() posibleRespuesta: any) {
        return this.posibleRespuestaRepositorio.save(posibleRespuesta);
    }

    @Put("/posibleRespuesta/:id")
    put(@Param("id") id: number, @Body() posibleRespuesta: any) {
        return /* this.posibleRespuestaRepositorio.updateById(id, posibleRespuesta)*/;
    }

    @Delete("/posibleRespuesta/:id")
    async remove(@Param("id") id: number) {
        let posibleRespuesta = await this.posibleRespuestaRepositorio.findOne(id);
        return this.posibleRespuestaRepositorio.remove(posibleRespuesta);
    }

}