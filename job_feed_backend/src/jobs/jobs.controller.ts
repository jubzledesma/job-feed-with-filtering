import { Controller, Get, Query } from '@nestjs/common';
import { JobService } from './job.service';
import { JobQueryDto } from './dto/job_query.dto';

@Controller('jobs')
export class JobsController {
  constructor(private readonly jobService: JobService) {}

  @Get()
  getJobs(@Query() query: JobQueryDto) {
    return this.jobService.getJobs(query);
  }
}
