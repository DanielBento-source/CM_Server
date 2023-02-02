import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsUrl } from 'class-validator';

export class CreateInstrumentoDto {
  @IsString()
  @ApiProperty({
    description: 'nome do instrumento',
    example: 'Violino',
  })
  name: string;

  @IsUrl()
  @ApiProperty({
    description: 'Url da imagem do instrumento',
    example:
      'https://d3ugyf2ht6aenh.cloudfront.net/stores/001/940/125/products/311-7c1510d9a4979bbba816485828201283-640-0.png',
  })
  image: string;

  @IsString()
  @ApiProperty({
    description: 'nome da primeira voz',
    example: 'soprano',
  })
  primeiraVoz?: string;

  @IsString()
  @ApiProperty({
    description: 'nome da segunda voz',
    example: 'contralto',
  })
  segundaVoz?: string;

  @IsString()
  @ApiProperty({
    description: 'nome da terceira voz',
    example: 'tenor',
  })
  terceiraVoz?: string;

  @IsString()
  @ApiProperty({
    description: 'nome do naipe de qual o instrumento faz parte',
    example: 'cordas',
  })
  naipe?: string;

  @IsString()
  @ApiProperty({
    description:
      'nome dos metodos ultilizados na congregação para aprendizado do instrumento',
    example: 'Suzuki',
  })
  metodos?: string;

  @IsString()
  @ApiProperty({
    description: 'lista dos músicos que tocam esse instrumento',
    example: 'Romildo, Rosalvo...',
  })
  musicos?: string;
}
