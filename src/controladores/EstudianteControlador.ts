import { JsonController, Param, Body, Get, Post, Put, Delete } from "routing-controllers";
import { getRepository } from "typeorm";
import { Estudiante } from "../modelo/estudiante/Estudiante";

@JsonController()
export class EstudianteControlador {

    private estudianteRepositorio = getRepository(Estudiante);

    @Get("/estudiante")
    getAll() {
        return this.estudianteRepositorio.find();
    }

    @Get("/estudiante/:id")
    getOne(@Param("id") id: number) {
        return this.estudianteRepositorio.findOne(id);
    }

    @Post("/estudiante")
    post(@Body() estudiante: any) {
        return this.estudianteRepositorio.save(estudiante);
    }

    @Put("/estudiante/:id")
    put(@Param("id") id: number, @Body() estudiante: any) {
        return /* this.estudianteRepositorio.updateById(id, estudiante) */;
    }

    @Delete("/estudiante/:id")
    async remove(@Param("id") id: number) {
        let estudiante = await this.estudianteRepositorio.findOne(id);
        return this.estudianteRepositorio.remove(estudiante);
    }

}