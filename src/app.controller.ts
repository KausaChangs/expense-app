import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
  @Get('')
  getAllIncomeReports() {
    return [];
  }

  @Get('hello')
  getAllIncomeReports2() {
    return {};
  }
}
