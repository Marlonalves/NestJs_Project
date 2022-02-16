import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Course } from './entities/course.entity';

@Injectable()
export class CourseService {
    private courses: Course[] = [
        {
            id: 1,
            name: 'Fundamentos do framework NestJs',
            description: 'Descrição do primeiro item',
            tags: ['node.js', 'nestJs', 'javascript']
        }
    ];

    findAll() {
        return this.courses;
    }

    findOne(id: string) {
        const course = this.courses.find(course => course.id === Number(id));

        if (!course) {
            throw new HttpException(
                `Course Id ${id} not found`,
                HttpStatus.NOT_FOUND)
            ;
        }

        return course
    }

    create(createCourseDto: any) {
        this.courses.push(createCourseDto);
    }

    update(id: string, updateCourseDto: any) {
        const indexCourse = this.courses.findIndex(course => course.id === Number(id));
        this.courses[indexCourse] = updateCourseDto;
    }

    remove(id: string) {
        const indexCourse = this.courses.findIndex(course => course.id === Number(id));
        if (indexCourse >= 0) {
            this.courses.splice(indexCourse, 1);
        }

    }
}
