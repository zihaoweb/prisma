import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

const options = new DocumentBuilder()
  .setTitle('NestJS')
  .setDescription('The NestJS API description')
  .setVersion('1.0')
  .build();

export function setupSwagger(app) {
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api', app, document);
}