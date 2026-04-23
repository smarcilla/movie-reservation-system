# Stack Tecnológico

> Documento de referencia que define las tecnologías, dependencias y herramientas utilizadas en el proyecto.

La solución es un API REST Backend.

Lenguaje: Typescript

Runtime: Nodejs@25

Framework: NestJs

Autenticación: JWT (manual)

Documentación: Swagger (@nestjs/swagger)

Configuración: @nestjs/config

Validación: Zod (custom ZodValidationPipe para NestJS)

Seguridad: Helmet + CORS + Rate limiting

Logging: Pino (nestjs-pino)

BD: PostgreSQL docker

Driver: postgres (npm)

ORM: Drizzle ORM

Migraciones: Drizzle Kit

Testing: Vitest + Supertest + Stryker (mutation testing)

Infrastructure: Docker y docker-compose

Calidad: eslint + prettier
