import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MusicoModule } from './musico/musico.module';
import { PrismaModule } from './prisma/prisma.module';
import { InstrumentoModule } from './instrumento/instrumento.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [MusicoModule, PrismaModule, InstrumentoModule, UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
