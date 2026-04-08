import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Employer } from '../../employer/entities/employer.entity';

@Entity('jobs')
export class Job {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  salary: string;

  @Column()
  location: string;

  @Column()
  category: string;

  @Column()
  type: string;

  @Column({ type: 'text' })
  description: string;

  @UpdateDateColumn({ name: 'update_timestamp' })
  updateTimestamp: Date;

  @ManyToOne(() => Employer, (employer) => employer.jobs)
  @JoinColumn({ name: 'employer_id' })
  employer: Employer;
}
