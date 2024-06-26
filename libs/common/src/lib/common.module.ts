import { Module } from '@nestjs/common';

import { ConfigModule } from '../config/config.module';
import { DatabaseModule } from '../database/database.module';

@Module({
  imports: [DatabaseModule, ConfigModule],
  exports: [DatabaseModule, ConfigModule],
  providers: [],
})
export class CommonModule {}
