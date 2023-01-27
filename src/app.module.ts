import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NaipeModule } from './naipe/naipe.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [NaipeModule, PrismaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
