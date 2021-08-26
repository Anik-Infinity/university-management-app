import { ApiProperty } from '@nestjs/swagger';

export class CreateStudentDto {
  @ApiProperty({ type: String, description: 'Student Name', default: 'Anik' })
  name: string;

  @ApiProperty({ type: Number, description: 'Student ID', default: '16151005' })
  id: number;
}
