import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Job } from '../../jobs/entities/job.entity';

@Entity('employer')
export class Employer {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @OneToMany(() => Job, (job) => job.employer)
  jobs: Job[];
}
