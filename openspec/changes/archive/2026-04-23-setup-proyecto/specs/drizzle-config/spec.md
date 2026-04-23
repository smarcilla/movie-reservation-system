## ADDED Requirements

### Requirement: Drizzle ORM configurado

El proyecto debe tener Drizzle ORM configurado con schema por dominio y capacidad de migraciones.

#### Scenario: Schema definido por dominio

- **WHEN** se examina `src/drizzle/schema/`
- **THEN** existen archivos: `users.ts`, `movies.ts`, `reservations.ts`, `showtimes.ts`, `seats.ts`

#### Scenario: Conexión a base de datos

- **WHEN** la aplicación inicia
- **THEN** la conexión a PostgreSQL mediante Drizzle está establecida

#### Scenario: Migraciones disponibles

- **WHEN** se ejecuta `npm run db:generate`
- **THEN** se genera archivos de migración en `src/drizzle/migrations/`

#### Scenario: Push schema a DB

- **WHEN** se ejecuta `npm run db:push`
- **THEN** el schema se aplica a la base de datos PostgreSQL