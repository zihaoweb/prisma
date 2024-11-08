import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { GlobalFilter } from './filter/global.filter';
import { GlobalInterceptor } from './interceptor/global.interceptor';
import { setupSwagger } from './swagger';
import { ConfigService } from '@nestjs/config'

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalInterceptors(new GlobalInterceptor());
  app.useGlobalFilters(new GlobalFilter());
  setupSwagger(app)
  const config = app.get(ConfigService)
  const port = config.get('app.port') || 3000
  await app.listen(port);
}
bootstrap();
