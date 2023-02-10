import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new ValidationPipe());

  const config = new DocumentBuilder()
    .setTitle('Cadastro de Músicos')
    .setDescription('Aplicação para gestão dos Músicos da orquestra CCB')
    .setVersion('1.0.0')
    .addTag('status')
    .addTag('naipe')
    .addTag('instrumento')
    .addTag('user')
    .addTag('profile')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(8181);
}
bootstrap();
