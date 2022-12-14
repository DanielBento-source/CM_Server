import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new ValidationPipe());

  const config = new DocumentBuilder()
    .setTitle('PizzaFresh')
    .setDescription('Aplicação para gestão dos muscicos da ccb')
    .setVersion('1.0.0')
    .addTag('status')
    .addTag('user')
    .addTag('musico')
    .addTag('instrumento')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(6543);
}
bootstrap();
