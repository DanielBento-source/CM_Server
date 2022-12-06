import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';

export class CreateMusicoDto {
  @IsString()
  @ApiProperty({
    description: 'Nome do musíco',
    example: 'Daniel dos Santos Bento',
  })
  nome: string;

  @IsString()
  @ApiProperty({
    description: 'url da foto do musíco',
    example: 'ausfdbweufbwuebfwiebfw',
  })
  foto: string;

  @IsString()
  @ApiProperty({
    description: 'data de nascimento do musíco',
    example: '26/01/1997',
  })
  dataDeNascimento: string;

  @IsString()
  @ApiProperty({
    description: 'numero do telefone ou celular do musíco com ddd',
    example: '(019) 99161-9186',
  })
  fone: string;

  @IsString()
  @ApiProperty({
    description: 'email do musíco',
    example: 'dsbld2@gmail.com',
  })
  email: string;
}
