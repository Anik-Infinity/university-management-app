import { ApiProperty } from '@nestjs/swagger';

export class StudentIdParamDto {
  @ApiProperty({ type: Number, description: 'Student Id' })
  id: number;
}
