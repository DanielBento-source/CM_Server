import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NaipeModule } from './naipe/naipe.module';
import { PrismaModule } from './prisma/prisma.module';
import { InstrumentoModule } from './instrumento/instrumento.module';
import { UserModule } from './user/user.module';
import { ProfileModule } from './profile/profile.module';

@Module({
  imports: [NaipeModule, PrismaModule, InstrumentoModule, UserModule, ProfileModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
