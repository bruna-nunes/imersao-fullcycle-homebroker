import { Module } from '@nestjs/common';
import { WalletsService } from './wallets.service';
import { WalletsController } from './wallets.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Wallet, WalletSchema } from './entities/wallet.entity';

@Module({
  imports: [
      MongooseModule.forFeature([ // especificar colections que serao utilizada
        {
          name: Wallet.name,
          schema: WalletSchema
        },
      ]),
    ],
  controllers: [WalletsController],
  providers: [WalletsService],
})
export class WalletsModule {}
