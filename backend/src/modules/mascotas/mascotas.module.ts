import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Mascota, MascotaSchema } from './schemas/mascotas.schema';
import { MascotasController } from './mascotas.controller';
import { MascotasService } from './mascotas.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Mascota.name, schema: MascotaSchema }]),
  ],
  controllers: [MascotasController],
  providers: [MascotasService],
})
export class MascotasModule {}