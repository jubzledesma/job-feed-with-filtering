import { Module } from '@nestjs/common';
import { JobsController } from './jobs.controller';
import { JobService } from './job.service';
import { JobQueryService } from './job_query.service';

@Module({
  imports: [],
  controllers: [JobsController],
  providers: [JobService, JobQueryService],
})
export class JobsModule {}
