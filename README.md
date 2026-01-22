- **TypeScript** para type safety
- **Tailwind CSS** con sistema de diseño custom
- **Sin backend** - 100% estático, desplegable en Vercel

## 📦 Instalación

```bash
# Instalar dependencias
npm install

# Modo desarrollo
npm run dev

# Build para producción
npm run build
```

El servidor de desarrollo estará disponible en `http://localhost:3000`

## 🎨 Características

### Diseño
- ✨ Estética futurista inspirada en "DATA" (Tainy)
- 🎯 Paleta negro-carbón + cian neón
- 🌐 Grid técnico y efectos visuales (grain, scanlines)
- 📱 Responsive mobile-first
- ♿ Accesibilidad básica implementada

### Funcionalidad
- 📝 Input de nombre con validación
- ✅ Selector de estado de asistencia (Voy / Tal vez / No puedo)
- 👤 Preview en vivo tipo "user token"
- 💾 Persistencia en localStorage
- 📲 Confirmación directa por WhatsApp
- 🔗 Generación automática de URL con mensaje prellenado

## ⚙️ Personalización Rápida

Edita el archivo `src/config/event.ts` para personalizar todos los datos del evento:

```typescript
export const eventConfig = {
  FESTEJADO_NOMBRE: "Tu Nombre",
  FESTEJADO_EDAD: 25,
  EVENTO_TITULO: "RAVE ROOM SESSION",
  FECHA: "2026.02.15",
  HORA: "22:00",
  UBICACION_TITULO: "Mi cuarto",
  UBICACION_DETALLE: "Coordenadas disponibles al confirmar",
  DRESS_CODE: "Neon / Tech Wear / Dark Mode",
  NOTAS: "Trae tu mejor energía",
  WHATSAPP_NUMERO: "5212345678900", // Sin + ni espacios
  WHATSAPP_TEMPLATE: "Hola! Soy {name}. Confirmación: {status}",
  CTA_LABEL: "Confirmar por WhatsApp",
};
```

**Importante**: El número de WhatsApp debe estar en formato internacional sin el símbolo `+` ni espacios (ej: `5212345678900`).

## 🚢 Despliegue en Vercel

### Opción 1: Desde GitHub

1. Sube el proyecto a un repositorio de GitHub
2. Conecta tu repositorio en [vercel.com](https://vercel.com)
3. Vercel detectará automáticamente Next.js
4. Click en "Deploy"

### Opción 2: Vercel CLI

```bash
# Instalar Vercel CLI
npm i -g vercel

# Deploy
vercel

# Deploy a producción
vercel --prod
```

### Configuración

El proyecto ya está configurado para export estático (`output: 'export'` en `next.config.js`), compatible con Vercel sin configuración adicional.

## 📁 Estructura del Proyecto

```
conde/
├── src/
│   ├── app/
│   │   ├── globals.css          # Estilos globales + efectos visuales
│   │   ├── layout.tsx           # Layout raíz con metadata SEO
│   │   └── page.tsx             # Página principal
│   ├── components/
│   │   ├── Hero.tsx             # Sección hero tipo panel de sistema
│   │   ├── RSVPModule.tsx       # Módulo RSVP completo
│   │   ├── TechGrid.tsx         # Grid técnico de fondo
│   │   └── UserToken.tsx        # Credencial visual del usuario
│   ├── config/
│   │   └── event.ts             # ⚙️ Configuración del evento
│   └── utils/
│       ├── storage.ts           # Helpers de localStorage
│       └── whatsapp.ts          # Generación de URL de WhatsApp
├── next.config.js               # Config Next.js (static export)
├── tailwind.config.ts           # Sistema de diseño custom
└── package.json
```

## ✅ Checklist de Verificación

Antes de desplegar, verifica:

- [ ] Personalizar datos en `src/config/event.ts`
- [ ] Verificar número de WhatsApp (formato internacional)
- [ ] Probar flujo RSVP completo en local
- [ ] Verificar que el mensaje de WhatsApp se genera correctamente
- [ ] Probar en mobile (responsive)
- [ ] Build exitoso: `npm run build`
- [ ] Verificar accesibilidad básica (navegación por teclado)

## 🎯 Flujo de Usuario

1. Usuario ingresa su nombre
2. El "User Token" se actualiza en tiempo real
3. Usuario selecciona estado de asistencia
4. Datos se guardan en localStorage
5. Click en "Confirmar por WhatsApp"
6. Se abre WhatsApp con mensaje prellenado
7. Usuario envía confirmación

## 🛠️ Comandos Útiles

```bash
# Desarrollo
npm run dev

# Build
npm run build

# Lint
npm run lint

# Type check
npx tsc --noEmit
```

## 📝 Notas Técnicas

- **Sin JavaScript deshabilitado**: La app requiere JS para funcionalidad RSVP
- **localStorage**: Los datos se guardan localmente en el navegador
- **WhatsApp Web**: En desktop abre WhatsApp Web, en mobile abre la app
- **Performance**: Optimizado para carga rápida, sin assets pesados
- **Accesibilidad**: Labels, focus visible, prefers-reduced-motion

## 🎨 Paleta de Colores

- **Carbon**: `#0a0a0a`, `#121212`, `#1a1a1a`, `#242424`
- **Steel**: `#4a4a4a`, `#6a6a6a`, `#8a8a8a`, `#aaaaaa`
- **Neon Cyan**: `#00f0ff`
- **Neon Blue**: `#0080ff`

## 📄 Licencia

Proyecto personal. Libre de usar y modificar.

---

**Hecho con ⚡ para celebrar en grande**
