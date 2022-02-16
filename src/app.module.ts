import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CourseModule } from './course/course.module';

@Module({
  imports: [CourseModule]
})
export class AppModule {}
