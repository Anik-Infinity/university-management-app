import { Body, Controller, Get, HttpStatus, Param, Post } from '@nestjs/common';
import { ApiTags, ApiResponse, ApiBody } from '@nestjs/swagger';
import { PayLoadResponseDTO } from 'src/common/dto/payload.dto';
import { CreateStudentDto } from './dto/create-student.dto';
import { StudentIdParamDto } from './dto/student.id.param.dto';

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
      data: this.student,
    });
  }

  @Get(':id')
  @ApiResponse({ description: 'Student Information', status: HttpStatus.OK })
  getStudent(@Param() param: StudentIdParamDto) {
    return new PayLoadResponseDTO({
      statusCode: HttpStatus.OK,
      message: 'Student Info',
      data: this.student[param.id],
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
      data: this.student[this.student.length-1]
    })
  }
}
