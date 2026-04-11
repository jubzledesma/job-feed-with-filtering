import { Module, Global } from '@nestjs/common';
import { DATABASE_PROVIDERS, DATASOURCE_TOKEN } from './database.providers';

@Global()
@Module({
  providers: [...DATABASE_PROVIDERS],
  exports: [...DATABASE_PROVIDERS, DATASOURCE_TOKEN],
})
export class DatabaseModule {}
