import { JsonController, Param, Body, Get, Post, Put, Delete } from "routing-controllers";
import { getRepository } from "typeorm";
import { Institucion } from "../modelo/comun/Institucion";

@JsonController()
export class InstitucionControlador {

    private institucionRepositorio = getRepository(Institucion);

    @Get("/institucion")
    getAll() {
        return this.institucionRepositorio.find();
    }

    @Get("/institucion/:id")
    getOne(@Param("id") id: number) {
        return this.institucionRepositorio.findOne(id);
    }

    @Post("/institucion")
    post(@Body() institucion: any) {
        return this.institucionRepositorio.save(institucion);
    }

    @Put("/institucion/:id")
    put(@Param("id") id: number, @Body() institucion: any) {
        return /* this.institucionRepositorio.updateById(id, institucion)*/;
    }

    @Delete("/institucion/:id")
    async remove(@Param("id") id: number) {
        let institucion = await this.institucionRepositorio.findOne(id);
        return this.institucionRepositorio.remove(institucion);
    }

}