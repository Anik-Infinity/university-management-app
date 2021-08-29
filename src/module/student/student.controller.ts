import {
  Body,
  Controller,
  Get,
  HttpStatus,
  Param,
  Post,
  UseInterceptors,
} from '@nestjs/common';
import { ApiTags, ApiResponse, ApiBody } from '@nestjs/swagger';
import * as faker from 'faker';
import { PayLoadResponseDTO } from 'src/common/dto/payload.dto';
import { LoggerInterceptor } from 'src/common/interceptor/logger.interceptor';
import { CreateStudentDto } from './dto/create-student.dto';
import { StudentIdParamDto } from './dto/student.id.param.dto';

@UseInterceptors(LoggerInterceptor)
@Controller('student')
@ApiTags('Student')
export class StudentController {
  student = [
    {
      name: 'Anik',
      id: 16151005,
    },
    {
      name: 'Kafi',
      id: 16151005,
    },
    {
      name: 'Ayan',
      id: 16151005,
    },
  ];

  @Get()
  @ApiResponse({ description: "All Student's List", status: HttpStatus.OK })
  getStudentList(): any {
    return new PayLoadResponseDTO({
      statusCode: HttpStatus.OK,
      message: 'All Student List',
      data: [
        {
          student_list: this.student,
          total: this.student.length,
        },
      ],
    });
  }

  @Get(':id')
  @ApiResponse({ description: 'Student Information', status: HttpStatus.OK })
  getStudent(@Param() param: StudentIdParamDto) {
    return new PayLoadResponseDTO({
      statusCode: HttpStatus.OK,
      message: 'Student Info',
      data: {
        name: faker.name.firstName(),
        id: faker.datatype.number(),
      },
    });
  }

  @Post()
  @ApiBody({ type: CreateStudentDto })
  @ApiResponse({ description: 'Create Student', status: HttpStatus.OK })
  createStudent(@Body() body: CreateStudentDto): any {
    this.student.push(body);
    return new PayLoadResponseDTO({
      statusCode: HttpStatus.CREATED,
      message: 'Student Added',
      data: this.student[this.student.length - 1],
    });
  }
}
