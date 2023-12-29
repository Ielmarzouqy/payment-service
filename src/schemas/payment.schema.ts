import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';

export type PaymentDocument = HydratedDocument<Payment>;

@Schema()
export class Payment {
  @Prop()
  amountPaid: Number;
  //   @Prop()
  //   order: { type: mongoose.Schema.Types.ObjectId, ref: 'order' },
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Order' })
  order: mongoose.Types.ObjectId;
}

export const PaymentSchema = SchemaFactory.createForClass(Payment);
