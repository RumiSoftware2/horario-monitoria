# Monitoria - Sistema de Gestión de Estudiantes y Tutorías

Una aplicación web full-stack para gestionar estudiantes y sus horarios de tutoría.

## 🚀 Tecnologías

### Backend
- Node.js
- Express.js
- MongoDB + Mongoose
- CORS

### Frontend
- React
- Vite
- JavaScript

## 📁 Estructura del Proyecto

```
monitoria/
├── backend/                 # API REST
│   ├── index.js            # Servidor principal
│   ├── routes/             # Rutas de la API
│   ├── models/             # Modelos de datos
│   ├── .env.example        # Variables de entorno (template)
│   └── package.json        # Dependencias
└── frontend/               # Aplicación React
    ├── src/
    │   ├── components/     # Componentes React
    │   ├── pages/          # Páginas principales
    │   └── services/       # Llamadas API
    ├── .env.example        # Variables de entorno (template)
    └── package.json        # Dependencias
```

## 🛠️ Instalación y Configuración

### Backend
1. Copia `.env.example` a `.env` y configura tus variables
2. Instala dependencias: `npm install`
3. Inicia el servidor: `npm start`

### Frontend
1. Copia `.env.example` a `.env` y configura la URL del API
2. Instala dependencias: `npm install`
3. Inicia el desarrollo: `npm run dev`

## 📦 Deploy

### Backend en Render
1. Conecta este repositorio a Render
2. Configura las variables de entorno en el dashboard de Render
3. Deploy automático en cada push

### MongoDB Atlas
1. Crea un cluster en MongoDB Atlas
2. Configura la connection string en las variables de entorno
3. Agrega la IP de Render al Network Access

## 📝 API Endpoints

- `GET /students` - Obtener todos los estudiantes
- `POST /students` - Crear nuevo estudiante

## 🤝 Contribución

1. Fork este repositorio
2. Crea una rama para tu feature
3. Commit tus cambios
4. Push a la rama
5. Abre un Pull Request

## ⚠️ Importante

- Nunca subas archivos `.env` con credenciales reales
- Usa `.env.example` como plantilla
- Configura las variables de entorno en producción
