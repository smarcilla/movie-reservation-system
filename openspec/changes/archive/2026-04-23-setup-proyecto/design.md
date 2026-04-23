# Design: setup-proyecto

## Context

Movie Reservation System es una API REST Backend para gestión de reservas de cine. El proyecto necesita configuración inicial técnica antes de implementar features de negocio.

**Stack tecnológico definido:**
- TypeScript + Node.js 25 + NestJS
- PostgreSQL (Docker) + Drizzle ORM + Drizzle Kit
- JWT (manual) + Swagger + Zod + Pino
- Vitest + Supertest + Stryker
- Docker + docker-compose + Redis

## Goals / Non-Goals

**Goals:**
- Establecer estructura de proyecto escalable por dominio
- Configurar servicios Docker para desarrollo local
- Configurar Drizzle con schema inicial
- Habilitar testing con coverage y mutation testing
- Pipeline de calidad (lint, format, test)

**Non-Goals:**
- Implementar lógica de negocio completa
- Configuración de producción (CI/CD)
- Autenticación completa (viene en fase posterior)
- Tests de integración con base de datos

## Decisions

| Decisión | Detalle | Rationale |
|----------|--------|----------|
| **Estructura por dominio** | `src/users/`, `src/movies/`, `src/reservations/` | Escalabilidad, DDD-friendly |
| **Drizzle schema por archivo** | `schema/users.ts`, `movies.ts`, etc. | Organización, mantenibilidad |
| **Docker services** | app + postgres + redis | Desarrollo local reproducible |
| **Test co-localizados** | `*.service.test.ts` junto al source | Estándar NestJS actual |
| **Mutation testing** | Stryker integrado | Calidad de tests |

### Alternativas evaluadas

- **Estructura por capas** → Descartado por acoplar lógica de dominio
- **pgAdmin** → No necesario para fase inicial
- **Jest** → Vitest más rápido y moderno

## Risks / Trade-offs

| Risk | Impacto | Mitigación |
|------|--------|------------|
| Drizzle learning curve | Medio | Documentación oficial + ejemplos |
| Mutation testing tiempo | CI más lento | Ejecución solo en archivos modificados |
| Redis sin uso inicial | Resource overhead | Remover si no se usa |

## Migration Plan

1. Inicializar NestJS con `nest new`
2. Configurar estructura por dominio
3. Añadir dependencias del stack
4. Configurar Docker compose
5. Configurar Drizzle schema
6. Configurar tooling (eslint, prettier, vitest, stryker)
7. Verify build local

**Rollback:** Eliminar estructura y recrear si hay problemas críticos.