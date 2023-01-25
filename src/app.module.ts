import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NaipeModule } from './naipe/naipe.module';

@Module({
  imports: [NaipeModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
