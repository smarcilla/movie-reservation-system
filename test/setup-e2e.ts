import { beforeAll, afterAll } from 'vitest';
import { NestFactory } from '@nestjs/core';
import { AppModule } from '../src/app.module';

let app: Awaited<ReturnType<typeof NestFactory.create>>;

beforeAll(async () => {
  app = await NestFactory.create(AppModule);
  await app.init();
});

afterAll(async () => {
  await app?.close();
});
