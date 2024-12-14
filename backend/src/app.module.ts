import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { AppController } from './app.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { MascotasModule } from './modules/mascotas/mascotas.module';
import { UsersModule } from './modules/users/users.module';

@Module({
  imports: [
    ConfigModule.forRoot(), // Cargar variables desde .env
    MongooseModule.forRoot(process.env.MONGO_URI), // Usa la variable del archivo .env
    MascotasModule,
    UsersModule
  ],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule {}
