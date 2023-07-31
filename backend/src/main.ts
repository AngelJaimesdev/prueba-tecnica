import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Configuración del CORS
  app.enableCors();

  await app.listen(3000);
}
bootstrap();
