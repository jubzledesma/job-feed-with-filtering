import { IsString, IsNumber } from 'class-validator';
import { Transform } from 'class-transformer';

export class JobDto {

  @IsNumber()
  readonly id: number;

  @IsString()
  readonly title: string;

  @IsString()
  readonly salary: string;

  @IsString()
  readonly location: string;

  @IsString()
  readonly category: string;

  @IsString()
  readonly type: string;

  @IsString()
  readonly description: string;

  @Transform(({ value }): string =>
    value instanceof Date ? value.toISOString().split('T')[0] : value,
  )
  @IsString()
  readonly updateTimestamp: string | Date;

  @IsNumber()
  readonly employerId: number;

  @IsString()
  readonly employerName: string;
}
