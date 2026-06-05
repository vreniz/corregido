# performancetest

SPA en JavaScript vanilla con enrutamiento por History API, autenticación con
localStorage, y backend simulado con json-server.

## Requisitos
- Node.js 18+

## Instalación
```bash
npm install
```

## Desarrollo
Levanta Vite y json-server a la vez:
```bash
npm run dev
```
- App: http://localhost:5173
- API (json-server): http://localhost:3001

## Usuarios de prueba
| Email           | Password | Rol   |
|-----------------|----------|-------|
| admin@test.com  | A123456  | admin |
| user@test.com   | A123456  | user  |
| user2@test.com  | A123456  | user  |

## Notas
- Rutas: `/` (login), `/home` (protegida). Cualquier otra ruta muestra 404.
- El logout limpia la sesión de localStorage.
- Los enlaces internos usan `data-link` para navegar sin recargar.
