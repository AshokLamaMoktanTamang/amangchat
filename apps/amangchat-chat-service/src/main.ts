import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';

import { AppModule } from './app/app.module';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = app.get(ConfigService);
  
  const port = config.get<number>('port.chat') || 3003;
    
  const globalPrefix = 'api';
  app.setGlobalPrefix(globalPrefix);
  await app.listen(port);
  Logger.log(
    `🚀 Chat Service running http://localhost:${port}/${globalPrefix}`
  );
}

bootstrap();
