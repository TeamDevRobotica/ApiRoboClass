import { JsonController, Param, Body, Get, Post, Put, Delete } from "routing-controllers";
import { getRepository } from "typeorm";
import { CursoCreado } from "../modelo/cursadoCreado/CursoCreado";

@JsonController()
export class CursoCreadoControlador {

    private cursoCreadoRepositorio = getRepository(CursoCreado);

    @Get("/cursoCreado")
    getAll() {
        return this.cursoCreadoRepositorio.find();
    }

    @Get("/cursoCreado/:id")
    getOne(@Param("id") id: number) {
        return this.cursoCreadoRepositorio.findOne(id);
    }

    @Post("/cursoCreado")
    post(@Body() cursoCreado: any) {
        return this.cursoCreadoRepositorio.save(cursoCreado);
    }

    @Put("/cursoCreado/:id")
    put(@Param("id") id: number, @Body() cursoCreado: any) {
        return /* this.cursoCreadoRepositorio.updateById(id, cursoCreado)*/;
    }

    @Delete("/cursoCreado/:id")
    async remove(@Param("id") id: number) {
        let cursoCreado = await this.cursoCreadoRepositorio.findOne(id);
        return this.cursoCreadoRepositorio.remove(cursoCreado);
    }

}