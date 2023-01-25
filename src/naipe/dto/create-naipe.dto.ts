import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreateNaipeDto {
  @IsString()
  @ApiProperty({
    description: 'nome do naipe',
    example: 'cordas',
  })
  nome: string;
}
