import { Module } from '@nestjs/common';
import { UserModule } from './modules/user/user.module';
import { PrismaModule } from './prisma/prisma.module';
import { VipModule } from './modules/vip/vip.module';
import { ConfigModule } from '@nestjs/config';
import { AxiosModule } from './modules/axios/axios.module';
import config from '@/config/index';
@Module({
  imports: [
    ConfigModule.forRoot({
      cache: true,
      isGlobal: true,
      load: [config]
    }),
    PrismaModule,
    UserModule,
    VipModule,
    AxiosModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
