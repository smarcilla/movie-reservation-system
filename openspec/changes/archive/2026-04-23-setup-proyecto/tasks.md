## 1. Proyecto Base

- [x] 1.1 Crear scaffold NestJS (temporal) y mover a raíz:
  - `nest new temp-project --skip-install`
  - Mover archivos: `mv temp-project/* .` y `mv temp-project/.* . 2>/dev/null || true`
  - Eliminar carpeta temporal: `rm -rf temp-project`
- [x] 1.2 Configurar tsconfig.json con configuración estricta
- [x] 1.3 Configurar package.json con scripts del stack
- [x] 1.4 Crear estructura de directorios por dominio (users, movies, reservations, showtimes, shared)
- [x] 1.5 Verificar que el proyecto compila con `npm run build`

## 2. Configuración de Desarrollo

- [x] 2.1 Configurar .env.example con variables necesarias
- [x] 2.2 Configurar @nestjs/config con load dotenv
- [x] 2.3 Configurar main.ts con puerto desde config
- [x] 2.4 Verificar inicio con `npm run start:dev`

## 3. Docker Compose

- [x] 3.1 Crear Dockerfile para la aplicación
- [x] 3.2 Crear docker-compose.yml con servicios (app, postgres, redis)
- [x] 3.3 Verificar que servicios inician con `docker-compose up -d`
- [x] 3.4 Verificar conectividad de la app a PostgreSQL

## 4. Drizzle ORM

- [x] 4.1 Instalar drizzle-orm, drizzle-kit, pg
- [x] 4.2 Crear drizzle.config.ts
- [x] 4.3 Crear src/drizzle/schema/ con archivos por dominio
- [x] 4.4 Crear database module con conexión
- [x] 4.5 Verificar conexión a PostgreSQL
- [x] 4.6 Ejecutar db:generate y db:push

## 5. Seguridad y Logging

- [x] 5.1 Instalar Helmet, cors, rate-limit
- [x] 5.2 Configurar middlewares de seguridad en main.ts
- [x] 5.3 Instalar nestjs-pino/pino
- [x] 5.4 Configurar logging con pino en main.ts
- [x] 5.5 Verificar logs JSON en desarrollo

## 6. Validación y Documentación

- [x] 6.1 Instalar zod y @nestjs/swagger
- [x] 6.2 Crear ZodValidationPipe
- [x] 6.3 Configurar Swagger en main.ts
- [x] 6.4 Verificar /api/docs endpoint

## 7. Testing

- [x] 7.1 Configurar vitest.config.ts
- [x] 7.2 Ejecutar test suite básica
- [x] 7.3 Configurar coverage con vitest
- [x] 7.4 Configurar stryker.conf.json
- [x] 7.5 Verificar test:mutation ejecuta

## 8. Calidad

- [x] 8.1 Configurar eslint.config.js
- [x] 8.2 Configurar prettier.config.js
- [x] 8.3 Verificar con npm run lint
- [x] 8.4 Verificar con npm run format