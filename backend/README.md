# Backend de Monitoría

Este proyecto contiene un servidor Node.js con Express que se conecta a MongoDB para almacenar información de estudiantes y sus horarios de tutoría.

## Requisitos

- Node.js instalado (v18+ recomendado)
- MongoDB local o un URI de MongoDB Atlas

## Estructura

```
backend/
├── index.js            # punto de entrada
├── package.json
├── models/
│   └── Student.js      # esquema mongoose
└── routes/
    └── students.js     # rutas HTTP
```

## Configuración

1. En la raíz de `backend` crear un archivo `.env` con:

```
MONGO_URI=mongodb://localhost:27017/monitoria
PORT=3000
```

(sustituir URI si usa Atlas).

2. Instalar dependencias:

```bash
cd backend
npm install
```

3. Arrancar el servidor en modo desarrollo:

```bash
npm run dev
```

El servidor escuchará en `http://localhost:3000`.

## Uso

- **POST /students**
  - Body JSON:
    ```json
    {
      "name": "Juan Perez",
      "email": "juan.perez@instituto.edu",
      "group": 1,
      "schedules": ["lunes-4-6", "miercoles-4-6"]
    }
    ```
  - `email` puede ser cualquier dirección válida y no debe repetirse (también se aplica al nombre).
  - El sistema rechazará un nombre o correo duplicado con error 400.
  - `group` puede valer `1` (William) o `2` (Haydee).
  - `schedules` es un arreglo con hasta dos opciones: `lunes-4-6`, `miercoles-4-6`, `viernes-11-1` o `ninguno`.

- **GET /students** devuelve todos los registros.

## Notas

- Los datos se almacenan en MongoDB usando Mongoose.
- Validaciones básicas se realizan en el modelo y la ruta de creación.
