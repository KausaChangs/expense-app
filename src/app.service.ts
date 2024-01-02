import { ReportType, data } from 'src/data';

class AppService {
  getAllReports(type: ReportType) {
    return data.report.filter((report) => report.type === type);
  }
}
