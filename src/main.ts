import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import * as bodyParser from 'body-parser';
import { ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);
  const port = configService.get<number>('PORT', 3000);
  const origin = configService.get<string>(
    'APP_DOMAIN',
    'http://localhost:5173',
  );

  const config = new DocumentBuilder()
    .setTitle('Pomen API')
    .setDescription(
      'Our API provides a seamless way to create and manage memorial profiles. It allows developers to integrate features for storing and sharing memories, uploading photos and videos, and locating memorial sites. With built-in search functionality, users can easily find profiles by name and explore their biographies, family connections, and important life events. The API supports personalization options, including profile updates and interaction with guestbooks. Designed for scalability and ease of use, our API empowers developers to build meaningful experiences around preserving memories and honoring loved ones.',
    )
    .setBasePath('api')
    .setVersion('1.0')
    .addBearerAuth(
      {
        type: 'http',
        scheme: 'bearer',
        bearerFormat: 'JWT', // Use 'JWT' as the format
      },
      'access-token',
    )
    .build();

  app.setGlobalPrefix('api');

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  app.enableCors({
    origin: [origin],
    methods: 'GET,POST,PUT,DELETE,PATCH',
    allowedHeaders: 'Content-Type, Authorization',
    credentials: true,
  });

  app.use(bodyParser.json({ limit: '50mb' }));
  app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));

  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      whitelist: true,
      forbidNonWhitelisted: true,
    }),
  );

  SwaggerModule.setup('swagger', app, document);

  await app.listen(port);
}
bootstrap();
