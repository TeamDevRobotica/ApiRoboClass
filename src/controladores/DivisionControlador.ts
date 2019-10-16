import { JsonController, Param, Body, Get, Post, Put, Delete } from "routing-controllers";
import { getRepository } from "typeorm";
import { Division } from "../modelo/division/Division";

@JsonController()
export class DivisionControlador {

    private divisionRepositorio = getRepository(Division);

    @Get("/division")
    getAll() {
        return this.divisionRepositorio.find();
    }

    @Get("/division/:id")
    getOne(@Param("id") id: number) {
        return this.divisionRepositorio.findOne(id);
    }

    @Post("/division")
    post(@Body() division: any) {
        return this.divisionRepositorio.save(division);
    }

    @Put("/division/:id")
    put(@Param("id") id: number, @Body() division: any) {
        return /* this.docenteRepositorio.updateById(id, docente)*/;
    }

    @Delete("/division/:id")
    async remove(@Param("id") id: number) {
        let division = await this.divisionRepositorio.findOne(id);
        return this.divisionRepositorio.remove(division);
    }
}