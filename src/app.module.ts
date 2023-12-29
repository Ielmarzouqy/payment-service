import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { OrdersModule } from './orders/orders.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    OrdersModule,
    MongooseModule.forRoot('mongodb+srv://admin:12344321@cluster0.bjcpg0b.mongodb.net/nest?retryWrites=true&w=majority'),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
