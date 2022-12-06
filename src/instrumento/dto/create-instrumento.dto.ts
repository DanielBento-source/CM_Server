import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreateInstrumentoDto {
  @IsString()
  @ApiProperty({
    description: 'nome do instrumento',
    example: 'Violoncelo',
  })
  nome: string;
}
