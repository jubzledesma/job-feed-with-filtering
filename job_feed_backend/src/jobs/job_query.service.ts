import { Injectable, Inject } from '@nestjs/common';
import { DataSource, Repository, FindOptionsWhere } from 'typeorm';
import { Job } from './entities/job.entity';
import { JobQueryDto } from './dto/job_query.dto';
import { DATASOURCE_TOKEN } from '../database/database.providers';

@Injectable()
export class JobQueryService {
  private jobRepository: Repository<Job>;

  constructor(@Inject(DATASOURCE_TOKEN) private dataSource: DataSource) {
    this.jobRepository = this.dataSource.getRepository(Job);
  }

  async getJobs(query: JobQueryDto) {
    const where: FindOptionsWhere<Job> = {};

    if (query.category) {
      where.category = query.category;
    }

    if (query.type) {
      where.type = query.type;
    }

    const [DATA, TOTAL] = await this.jobRepository.findAndCount({
      where,
      take: query.limit,
      skip: (query.page - 1) * query.limit,
      relations: ['employer'],
    });

    return { DATA, TOTAL };
  }
}
