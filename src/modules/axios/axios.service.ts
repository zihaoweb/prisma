import { Injectable } from '@nestjs/common';
import configuration from '@/config/index';
import { HttpService } from '@nestjs/axios';
import { lastValueFrom } from 'rxjs';
@Injectable()
export class AxiosService {
  private readonly config: Record<string, any>
  constructor(
    private readonly httpService: HttpService
  ) {
    this.config = configuration()
  }

  async getUserInfoByCode(code: string): Promise<any> {
    let URL = 'https://api.weixin.qq.com/sns/jscode2session';
    URL += `?appid=${this.config.h301b.patient.appId}`;
    URL += `&secret=${this.config.h301b.patient.secret}`;
    URL += `&js_code=${code}`;
    URL += `&grant_type=authorization_code`;
    const res = await lastValueFrom(this.httpService.get(URL))
    return {
      openid: res.data.openid,
      unionid: res.data.unionid
    }
  }

  async getUserPhone(code: string): Promise<any> {
    let URL = 'https://api.weixin.qq.com/wxa/business/getuserphonenumber';
    URL += `?access_token=${await this.getAccessToken()}`;
    const res = await lastValueFrom(this.httpService.post(URL, { code }));
    return res
  }

  async getAccessToken() {
    let URL = 'https://api.weixin.qq.com/cgi-bin/token';
    URL += `?grant_type=client_credential`;
    URL += `&appid=${this.config.h301b.patient.appId}`;
    URL += `&secret=${this.config.h301b.patient.secret}`;
    const { data } = await lastValueFrom(this.httpService.get(URL));
    return data.access_token
  }
}
