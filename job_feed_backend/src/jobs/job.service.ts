import { Injectable } from '@nestjs/common';
import { Job } from './entities/job.entity';
import { JobDto } from './dto/job.dto';
import { JobQueryDto } from './dto/job_query.dto';
import { JobResponseDto } from './dto/job_response.dto';
import { JobQueryService } from './job_query.service';

@Injectable()
export class JobService {
  constructor(private readonly jobQueryService: JobQueryService) {}

  async getJobs(query: JobQueryDto): Promise<JobResponseDto> {
    const { DATA, TOTAL } = await this.jobQueryService.getJobs(query);

    return {
      data: DATA.map((job) => this.mapToDto(job)),
      meta: {
        total: TOTAL,
        page: query.page,
        limit: query.limit,
        totalPages: Math.ceil(TOTAL / query.limit),
      },
    };
  }

  private mapToDto(job: Job): JobDto {
    return {
      id: job.id,
      title: job.title,
      salary: job.salary,
      location: job.location,
      category: job.category,
      type: job.type,
      description: job.description,
      updateTimestamp: job.updateTimestamp,
      employerId: job.employer?.id,
      employerName: job.employer?.name,
    };
  }
}
