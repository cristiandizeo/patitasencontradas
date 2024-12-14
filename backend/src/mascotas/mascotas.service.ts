import { Injectable } from '@nestjs/common';
import { CreateMascotaDto } from './dto/create-mascota.dto';
import { UpdateMascotaDto } from './dto/update-mascota.dto';
import { Model } from 'mongoose';
import { Mascota } from './schemas/mascotas.schema';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class MascotasService {
  constructor(
    @InjectModel(Mascota.name) private mascotaModel: Model<Mascota>,
  ) {}

  async create(data: any): Promise<Mascota> {
    const newMascota = new this.mascotaModel(data);
    return newMascota.save();
  }

  async findAll(): Promise<Mascota[]> {
    return this.mascotaModel.find().exec();
  }

  findOne(id: number) {
    return `This action returns a #${id} mascota`;
  }

  update(id: number, updateMascotaDto: UpdateMascotaDto) {
    return `This action updates a #${id} mascota`;
  }

  remove(id: number) {
    return `This action removes a #${id} mascota`;
  }
}

