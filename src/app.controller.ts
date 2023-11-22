import { Controller, Get } from '@nestjs/common';

@Controller('report/:type')
export class AppController {
  @Get()
  getAllIncomeReports() {
    return [];
  }

  @Get(':id')
  getIncomeReportById() {
    return {};
  }
}
