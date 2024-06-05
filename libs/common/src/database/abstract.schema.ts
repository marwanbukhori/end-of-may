import { Prop, Schema } from '@nestjs/mongoose';
import { SchemaType, Types } from 'mongoose';

@Schema()
export class AbstractDocument {
  @Prop({ type: SchemaType, Object })
  _id: Types.ObjectId;
}
