import { ConfigService } from '@nestjs/config';
import { DataSource } from 'typeorm';
import { Employer } from '../employer/entities/employer.entity';
import { Job } from '../jobs/entities/job.entity';
import { faker } from '@faker-js/faker';

export const DATASOURCE_TOKEN = 'DATASOURCE';

export const DATABASE_PROVIDERS = [
  {
    provide: DATASOURCE_TOKEN,
    inject: [ConfigService],
    useFactory: async (configService: ConfigService) => {
      const isProd = configService.get('NODE_ENV') === 'production';

      if (isProd) {
        const DATASOURCE = new DataSource({
          type: 'mysql',
          host: configService.get<string>('DB_HOST'),
          port: configService.get<number>('DB_PORT'),
          username: configService.get<string>('DB_USERNAME'),
          password: configService.get<string>('DB_PASSWORD'),
          database: configService.get<string>('DB_NAME'),
          entities: [__dirname + '/../**/*.entity{.ts,.js}'],
          synchronize: false,
        });
        return DATASOURCE.initialize();
      } else {
        const DATASOURCE = new DataSource({
          type: 'sqlite',
          database: ':memory:',
          entities: [__dirname + '/../**/*.entity{.ts,.js}'],
          synchronize: true,
        });

        await DATASOURCE.initialize();

        const EMPLOYER_REPO = DATASOURCE.getRepository(Employer);
        const JOB_REPO = DATASOURCE.getRepository(Job);

        const EMPLOYERS = Array.from({ length: 30 }).map(() =>
          EMPLOYER_REPO.create({
            name: faker.company.name(),
          }),
        );

        const SAVED_EMPLOYERS = await EMPLOYER_REPO.save(EMPLOYERS);

        const ALL_JOBS = [];

        for (const EMPLOYER of SAVED_EMPLOYERS) {
          const JOBS = Array.from({ length: 10 }).map(() => {
            const MIN_RATE = faker.number.int({ min: 15, max: 40 });
            const MAX_RATE = faker.number.int({ min: 41, max: 100 });
            const SALARY_RANGE = `$${MIN_RATE} - $${MAX_RATE} / hr`;

            return JOB_REPO.create({
              title: faker.person.jobTitle(),
              salary: SALARY_RANGE,
              location: faker.helpers.arrayElement([
                'Remote',
                'On-site',
                'Hybrid',
              ]),
              category: faker.helpers.arrayElement([
                'Engineering',
                'Marketing',
                'Design',
                'Sales',
                'IT',
              ]),
              type: faker.helpers.arrayElement([
                'Full-time',
                'Part-time',
                'Contract',
                'Freelance',
              ]),
              description: faker.lorem.paragraph(2),
              updateTimestamp: faker.date.recent({ days: 30 }),
              employer: EMPLOYER,
            });
          });

          ALL_JOBS.push(...JOBS);
        }

        await JOB_REPO.save(ALL_JOBS);

        return DATASOURCE;
      }
    },
  },
];
