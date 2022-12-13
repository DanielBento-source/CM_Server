import { ApiProperty } from '@nestjs/swagger';
import { IsString, Matches, MinLength } from 'class-validator';

export class CreateUserDto {
  @IsString()
  @ApiProperty({
    description: 'Nome do usuário - Apenas para exibição',
    example: 'Daniel',
  })
  nome: string;

  @IsString()
  @ApiProperty({
    description: 'Sobrenome do usuário - Apenas para exibição',
    example: 'Bento',
  })
  sobrenome: string;

  @IsString()
  @ApiProperty({
    description: 'nickname do usuário, deve ser único -  Utilizado no login',
    example: 'AdminSaoBentoCampinas',
  })
  nickname: string;

  @IsString()
  @MinLength(6)
  @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
    message: 'Senha muito fraca',
  })
  @ApiProperty({
    description: 'Senha do usuário para login',
    example: 'Abcd@1234',
  })
  password: string;

  @ApiProperty({
    description: 'A confirmação deve ser igual a senha',
    example: 'Abcd@1234',
  })
  confirmPassword: string;

  @IsString()
  @ApiProperty({
    description: 'Numero de telefone do usuário com ddd',
    example: '19991619186',
  })
  fone: string;

  @IsString()
  @ApiProperty({
    description: 'Email do usuário',
    example: 'dsbld2@gmail.com',
  })
  email: string;
}
