import { JsonController, Param, Body, Get, Post, Put, Delete } from "routing-controllers";
import { getRepository } from "typeorm";
import { RespuestaAlumno } from "../modelo/respuestaAlumno/RespuestaAlumno";

@JsonController()
export class RespuestaAlumnoControlador {

    private respuestaAlumnoRepositorio = getRepository(RespuestaAlumno);

    @Get("/respuestaAlumno")
    getAll() {
        return this.respuestaAlumnoRepositorio.find();
    }

    @Get("/respuestaAlumno/:id")
    getOne(@Param("id") id: number) {
        return this.respuestaAlumnoRepositorio.findOne(id);
    }

    @Post("/respuestaAlumno")
    post(@Body() respuestaAlumno: any) {
        return this.respuestaAlumnoRepositorio.save(respuestaAlumno);
    }

    @Put("/respuestaAlumno/:id")
    put(@Param("id") id: number, @Body() respuestaAlumno: any) {
        return /* this.docenteRepositorio.updateById(id, docente)*/;
    }

    @Delete("/respuestaAlumno/:id")
    async remove(@Param("id") id: number) {
        let respuestaAlumno = await this.respuestaAlumnoRepositorio.findOne(id);
        return this.respuestaAlumnoRepositorio.remove(respuestaAlumno);
    }
}