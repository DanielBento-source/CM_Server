import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreateMusicoDto {
  @IsString()
  @ApiProperty({
    description: 'Nome do musíco',
    example: 'Daniel dos Santos Bento',
  })
  nome: string;
}
