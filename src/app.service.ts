import { Injectable } from '@nestjs/common';
import { MdvDto } from './app.dto';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class AppService {
  constructor(private readonly httpService: HttpService) {}

  async getHello(query: MdvDto) {
    const url =
      'https://apis.data.go.kr/1471000/MdvUdiInfoService/getMdvUdiInfo';

    const queryString = Object.entries(query)
      .map(([key, value]) => {
        if (value) {
          return `${key}=${value}`;
        }
        return null;
      })
      .filter((b) => !!b);

    try {
      const response = await firstValueFrom(
        this.httpService.get(url + '?' + queryString.join('&')),
      );

      return response.data;
    } catch (error) {
      console.error('API 요청 에러:', error.message);
      throw error;
    }
  }
}
