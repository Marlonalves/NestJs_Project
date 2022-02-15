import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Patch, Post, Res } from '@nestjs/common';

@Controller('course')
export class CourseController {
    @Get()
    findAll(@Res() response) {
        return response.status(200).send('Listagem de cursos');
    }

    @Get(':id')
    findOne(@Param('id') id:string ) {
        return `Curso #${id}`;
    }

    @Post()
    @HttpCode(HttpStatus.NO_CONTENT)
    create(@Body() body){
        return body;
    }

    @Patch(':id')
    update(@Param('id') id:string, @Body() body){
         return `Atualização do Curso #${id}`
    }

    @Delete(':id')
    remove(@Param('id') id:string, @Body() body){
         return `Exclusão do Curso #${id}`
    }
}


