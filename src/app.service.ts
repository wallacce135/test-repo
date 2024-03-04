import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
const md5 = require('md5');


@Injectable()
export class AppService {

  constructor(
    private readonly httpService: HttpService,
    private readonly configService: ConfigService,
    ) { }

  async getHello() {
    const data = await this.httpService.axiosRef.post(`http://api.valantis.store:40000`, {
      "action": "filter",
      "params": {"price": 17500.0}
    }, {
      headers: {
        "x-auth": md5(`${this.configService.get<string>('key')}`)
      }
    })


    console.log(data.data);

    return data.data;

  }
}
