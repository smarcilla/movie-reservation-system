## ADDED Requirements

### Requirement: Sistema JWT configurado

El proyecto debe tener JWT configurado para autenticación básica.

#### Scenario: JWT secret configurable

- **WHEN** se configura `JWT_SECRET` en variables de entorno
- **THEN** el sistema usa ese valor para firmar tokens

#### Scenario: Token firmado

- **WHEN** se genera un token JWT
- **THEN** el token está firmado con el secret configurado