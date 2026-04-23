# Proposal: setup-proyecto

## Why

El proyecto Movie Reservation System necesita una base técnica sólida antes de implementar features de negocio. Un setup bien definido asegura consistencia, escalabilidad y DX óptimo para el equipo desde el primer día.

## What Changes

- Estructura de proyecto NestJS por dominio
- Configuración completa de Docker (app + PostgreSQL + Redis)
- Drizzle ORM configurado con schema por dominio
- Testing stack (Vitest + Supertest + Stryker)
- Pipeline CI/CD base
- Archivos de configuración (eslint, prettier, vitest, drizzle-kit, stryker)

## Capabilities

### New Capabilities

- **setup-base**: Configuración inicial del proyecto con TypeScript, NestJS, y estructura por dominio
- **docker-setup**: Servicios Docker (PostgreSQL + Redis) con docker-compose
- **drizzle-config**: Schema Drizzle con migraciones y conexión a BD
- **auth-base**: Sistema de autenticación JWT
- **testing-setup**: Configuración de tests unitarios, integración y mutation testing

### Modified Capabilities

- Ninguna (proyecto nuevo)

## Impact

- Nueva estructura de directorios `src/<dominio>/*`
- Nuevas dependencias en package.json
- Archivos de configuración en raíz
- Servicios Docker para desarrollo local