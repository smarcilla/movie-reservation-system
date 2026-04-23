## ADDED Requirements

### Requirement: Setup base del proyecto

El proyecto debe tener una estructura NestJS funcional con TypeScript, configuración base y estructura por dominio.

#### Scenario: Proyecto inicial compila

- **WHEN** se ejecuta `npm run build`
- **THEN** el proyecto compila sin errores y genera archivos en `dist/`

#### Scenario: Proyecto inicia correctamente

- **WHEN** se ejecuta `npm run start:dev`
- **THEN** la aplicación inicia y escucha en el puerto configurado

#### Scenario: Estructura por dominio

- **WHEN** se examina la estructura de `src/`
- **THEN** existen directorios: `users/`, `movies/`, `reservations/`, `showtimes/`, `shared/`