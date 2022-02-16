import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Patch, Post, Res } from '@nestjs/common';
import { CourseService } from './course.service';

@Controller('course')
export class CourseController {

    constructor(private readonly courseService:CourseService){}
    
    @Get()
    findAll() {
        return this.courseService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id:string ) {
        return this.courseService.findOne(id);
    }

    @Post()
    create(@Body() body){
        this.courseService.create(body);
    }

    @Patch(':id')
    update(@Param('id') id:string, @Body() body){
        this.courseService.update(id, body);
    }

    @Delete(':id')
    remove(@Param('id') id:string, @Body() body){
        this.courseService.remove(id);
    }
}



