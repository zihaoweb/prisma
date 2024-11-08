import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { AxiosService } from '../axios/axios.service';

@Injectable()
export class UserService {
  private readonly config: Record<string, any>;
  constructor(
    private readonly prismaService: PrismaService,
    private readonly axiosService: AxiosService
  ) { }

  async create(createUserDto: any) {
    return '123'
  }

  async login(code: string) {
    const res = await this.axiosService.getUserInfoByCode(code)
    console.log('login', res)
    return res
  }

  async getPhone(code: string) {
    const res = await this.axiosService.getUserPhone(code)
    console.log('getPhone', res)
    return res
  }


}
