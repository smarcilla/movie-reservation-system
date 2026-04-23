## ADDED Requirements

### Requirement: Docker compose funcional

El sistema debe tener servicios Docker configurados para desarrollo local (PostgreSQL + Redis).

#### Scenario: PostgreSQL disponible

- **WHEN** se ejecuta `docker-compose up -d`
- **THEN** el servicio postgres está disponible en puerto 5432

#### Scenario: Redis disponible

- **WHEN** se ejecuta `docker-compose up -d`
- **THEN** el servicio redis está disponible en puerto 6379

#### Scenario: App conecta a servicios

- **WHEN** la aplicación NestJS inicia
- **THEN** conecta a PostgreSQL y Redis usando variables de entorno