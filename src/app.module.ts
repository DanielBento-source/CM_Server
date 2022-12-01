import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MusicoModule } from './musico/musico.module';

@Module({
  imports: [MusicoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
