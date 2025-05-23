import { Controller, Get, Query } from '@nestjs/common';
import { AppService } from './app.service';
import { MdvDto } from './app.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  async getHello(@Query() query: MdvDto) {
    return await this.appService.getHello(query);
  }
}
