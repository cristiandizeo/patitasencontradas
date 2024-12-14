import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Mascota extends Document {
  @Prop({ required: true })
  nombre: string;

  @Prop({ required: true })
  tipo: string;

  @Prop()
  fotoUrl: string;

  @Prop({ default: Date.now })
  fechaCreacion: Date;
}

export const MascotaSchema = SchemaFactory.createForClass(Mascota);