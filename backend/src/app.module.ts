import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { MascotasModule } from './mascotas/mascotas.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://<usuario>:<password>@cluster0.mongodb.net/petgram'),
    MascotasModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule {}
