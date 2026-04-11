import { IsArray, IsNumber, IsObject, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { JobDto } from './job.dto';

export class MetaDto {
  @IsNumber()
  readonly total: number;

  @IsNumber()
  readonly page: number;

  @IsNumber()
  readonly limit: number;

  @IsNumber()
  readonly totalPages: number;
}

export class JobResponseDto {
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => JobDto)
  readonly data: JobDto[];

  @IsObject()
  @ValidateNested()
  @Type(() => MetaDto)
  readonly meta: MetaDto;
}
