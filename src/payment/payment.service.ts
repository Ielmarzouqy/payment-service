import { Injectable } from '@nestjs/common';
import { CreatePaymentDto } from './dto/create-payment.dto';
import { UpdatePaymentDto } from './dto/update-payment.dto';
import { Model } from 'mongoose';
import { Payment } from 'src/schemas/payment.schema';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class PaymentService {
  constructor(
    @InjectModel(Payment.name) private paymentModel: Model<Payment>,
  ) {}

  async create(createPaymentDto: CreatePaymentDto) {
    // return 'This action adds a new payment';
    const createdPayment = new this.paymentModel(createPaymentDto);
    return createdPayment.save();
  }

  async findAll() {
    // return `This action returns all payment`;
    return this.paymentModel.find();
  }

  // findOne(id: String) {
  //   return this.paymentModel.findOne(id);
  // }

  async findOne(id: string): Promise<Payment | null> {
    console.log(id);
    return this.paymentModel.findOne({_id:id});
  }

  update(id: number, updatePaymentDto: UpdatePaymentDto) {
    return `This action updates a #${id} payment`;
  }

  remove(id: number) {
    return `This action removes a #${id} payment`;
  }
}
