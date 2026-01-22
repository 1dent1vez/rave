# Arquitectura del Proyecto - Rave Invitation

## 📋 Resumen Ejecutivo

Invitación digital para eventos rave con estética inspirada en el álbum "DATA" de Tainy. Aplicación web estática construida con Next.js 14, TypeScript y Tailwind CSS, optimizada para despliegue en Vercel.

**Stack Tecnológico:**
- Next.js 14 (App Router) con export estático
- TypeScript estricto
- Tailwind CSS con design system custom
- React 18 con Client Components
- localStorage para persistencia

---

## 🏗️ Estructura del Proyecto

```
conde/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── globals.css        # Estilos globales + design system
│   │   ├── layout.tsx         # Layout raíz con metadata SEO
│   │   └── page.tsx           # Página principal (Home)
│   │
│   ├── components/            # Componentes React reutilizables
│   │   ├── Hero.tsx          # Sección hero con info del evento
│   │   ├── RSVPModule.tsx    # Formulario RSVP completo
│   │   ├── TechGrid.tsx      # Grid de fondo + efectos visuales
│   │   ├── UserToken.tsx     # Preview de credencial del usuario
│   │   └── DJCard.tsx        # Tarjeta del DJ del evento
│   │
│   ├── config/               # Configuración centralizada
│   │   └── event.ts         # Todas las variables del evento
│   │
│   └── utils/               # Utilidades y helpers
│       ├── storage.ts      # Funciones localStorage
│       └── whatsapp.ts     # Generación URL WhatsApp
│
├── public/                  # Assets estáticos (vacío por ahora)
├── tailwind.config.ts      # Configuración Tailwind + tokens
├── next.config.js          # Config Next.js (static export)
├── vercel.json            # Config opcional Vercel
└── package.json           # Dependencias y scripts
```

---

## 🎨 Design System

### Paleta de Colores (Tailwind)

**Definida en:** `tailwind.config.ts`

```typescript
colors: {
  carbon: {
    950: 'rgb(10, 10, 10)',    // Fondo principal
    900: 'rgb(18, 18, 18)',    // Fondo secundario
    800: 'rgb(26, 26, 26)',    // Paneles
    700: 'rgb(36, 36, 36)',    // Bordes
  },
  steel: {
    600: 'rgb(74, 74, 74)',    // Texto terciario
    500: 'rgb(106, 106, 106)',  // Texto secundario
    400: 'rgb(138, 138, 138)',  // Texto normal
    300: 'rgb(170, 170, 170)',  // Texto destacado
    200: 'rgb(170, 170, 170)',  // Texto brillante
  },
  neon: {
    magenta: 'rgb(255, 0, 255)', // Acento principal
    purple: 'rgb(192, 0, 255)',  // Acento secundario
  },
}
```

> **Nota:** Los colores usan formato `rgb()` para soportar modificadores de opacidad de Tailwind (ej: `bg-neon-magenta/10`)

### Efectos Visuales

**Definidos en:** `src/app/globals.css`

1. **Grain Texture** - Ruido SVG sutil (opacity: 0.03)
2. **Scanlines** - Líneas horizontales animadas en magenta
3. **Tech Grid** - Grid de líneas verticales/horizontales
4. **Neon Glow** - Text-shadow múltiple para efecto neón
5. **Glass Panels** - Backdrop blur + bordes sutiles

### Clases CSS Personalizadas

```css
.glass-panel       /* Panel con efecto glass morphism */
.neon-glow         /* Efecto de glow magenta */
.tech-border       /* Borde con gradiente magenta */
.coord-label       /* Etiquetas técnicas pequeñas */
.btn-primary       /* Botón principal magenta */
.input-field       /* Input con estilos custom */
.status-chip       /* Chip de estado con indicador */
.text-gradient     /* Gradiente de texto magenta */
```

---

## 🧩 Componentes Principales

### 1. Hero (`src/components/Hero.tsx`)

**Propósito:** Sección principal con información del evento

**Estructura:**
- Metadatos técnicos (EVENT_ID, PROTOCOL, fecha)
- Título del evento con gradiente magenta
- Subtítulo con referencias al álbum DATA
- Grid 3 columnas responsive con:
  - Timestamp (fecha + hora)
  - Location (ubicación)
  - Dress Code
- Badge TTP/TTD (Trae Tu Pomo/Droga)

**Referencias DATA:**
- `EVENT_ID: SCI-FI` (canción del álbum)
- `PROTOCOL: PARANORMAL` (canción del álbum)
- Subtítulo: "Una noche de fantasmas y datos"

**Props:** Ninguna (usa `eventConfig`)

---

### 2. RSVPModule (`src/components/RSVPModule.tsx`)

**Propósito:** Formulario completo de confirmación de asistencia

**Estado Local:**
```typescript
const [nombre, setNombre] = useState<string>('');
const [estado, setEstado] = useState<string | null>(null);
const [error, setError] = useState<string>('');
const [isFocused, setIsFocused] = useState<boolean>(false);
```

**Validaciones:**
- Nombre: 2-24 caracteres
- Filtrado de espacios dobles
- Estado requerido (VOY / TAL VEZ / NO PUEDO)

**Persistencia:**
- Guarda en localStorage al cambiar
- Restaura al montar componente

**Layout:**
- Grid 2 columnas en desktop (formulario + preview)
- Apilado vertical en mobile

**Integración WhatsApp:**
- Genera URL con template personalizado
- Reemplaza placeholders `{name}` y `{status}`
- Abre en nueva ventana

---

### 3. UserToken (`src/components/UserToken.tsx`)

**Propósito:** Preview de credencial digital del usuario

**Props:**
```typescript
interface UserTokenProps {
  nombre: string;
  estado: string | null;
  isActive: boolean;
}
```

**Características:**
- Muestra nombre en mayúsculas
- Status chip con color según estado:
  - Verde: "VOY"
  - Amarillo: "TAL VEZ"
  - Rojo: "NO PUEDO"
- Código de barras decorativo aleatorio
- Borde magenta con glow cuando activo

---

### 4. DJCard (`src/components/DJCard.tsx`)

**Propósito:** Tarjeta del DJ que estará en el evento

**Características:**
- Header "EN VIVO ESTA NOCHE"
- Badge LIVE con indicador pulsante
- Icono circular con gradiente magenta-púrpura
- Nombre del DJ con efecto neon glow
- Descripción: "Set en vivo · No vamos a volver" (referencia a canción "Volver")
- Visualizador de audio animado (32 barras)

**Responsive:**
- Icono más grande en mobile (20x20 vs 16x16)
- Layout centrado en mobile, horizontal en desktop

---

### 5. TechGrid (`src/components/TechGrid.tsx`)

**Propósito:** Grid de fondo + efectos visuales + coordenadas

**Efectos Incluidos:**
- Grid vertical y horizontal en magenta
- Líneas de acento horizontales
- Coordenadas decorativas en las 4 esquinas

**Referencias DATA:**
- `LAT: 19.MOJABI` (Mojabi Ghost)
- `LONG: 99.GHOST` (Mojabi Ghost)
- `SYS: DATA.ONLINE` (álbum DATA)
- `v2023.DATA` (año del álbum)

---

## ⚙️ Configuración del Evento

**Archivo:** `src/config/event.ts`

```typescript
export const eventConfig = {
  // Información básica
  FESTEJADO_NOMBRE: "Jair Conde",
  FESTEJADO_EDAD: 26,
  EVENTO_TITULO: "RAVE ROOM SESSION",
  
  // Fecha y hora
  FECHA: "2026.01-23",
  HORA: "19:00",
  
  // Ubicación
  UBICACION_TITULO: "Mi cuarto",
  UBICACION_DETALLE: "Coordenadas disponibles al confirmar",
  
  // Dress code
  DRESS_CODE: "Neon / Tech Wear / Dark Mode",
  NOTAS: "Lo siento BB, pero esta noche es para bailar",
  TTP_TTD: "TTP / TTD",
  
  // WhatsApp
  WHATSAPP_NUMERO: "527294509882",
  WHATSAPP_TEMPLATE: "¡Hola! Soy {name} y confirmo mi asistencia: {status}",
  CTA_LABEL: "Confirmar por WhatsApp",
  
  // Estados
  ESTADOS: {
    CONFIRMADO: "VOY",
    TALVEZ: "TAL VEZ",
    NO_PUEDE: "NO PUEDO",
  },
};
```

**Para personalizar:** Editar este archivo antes de desplegar

---

## 🔧 Utilidades

### storage.ts

```typescript
// Guardar datos
export const saveRSVPData = (nombre: string, estado: string): void

// Cargar datos
export const loadRSVPData = (): { nombre: string; estado: string | null }

// Limpiar datos
export const clearRSVPData = (): void
```

### whatsapp.ts

```typescript
// Generar URL de WhatsApp
export const generateWhatsAppURL = (
  phoneNumber: string,
  template: string,
  nombre: string,
  estado: string
): string
```

**Formato del número:** Internacional sin `+` ni espacios (ej: `527294509882`)

---

## 🚀 Scripts Disponibles

```bash
# Desarrollo
npm run dev          # Inicia dev server en http://localhost:3000

# Producción
npm run build        # Genera build estático en /out
npm run start        # Sirve build de producción (no necesario para Vercel)

# Linting
npm run lint         # Ejecuta ESLint
```

---

## 📦 Despliegue en Vercel

### Configuración Automática

El proyecto está configurado para export estático:

**next.config.js:**
```javascript
const nextConfig = {
  output: 'export',  // Genera HTML estático
  images: {
    unoptimized: true,  // Desactiva optimización de imágenes
  },
};
```

### Pasos para Desplegar

1. **Push a GitHub:**
```bash
git add .
git commit -m "Ready for deployment"
git push origin main
```

2. **Conectar en Vercel:**
   - Importar repositorio
   - Vercel detecta Next.js automáticamente
   - Click "Deploy"

3. **Variables de entorno:** No necesarias (todo está en `event.ts`)

---

## 🎯 Puntos de Extensión

### 1. Agregar Nuevos Campos al RSVP

**Modificar:**
1. `src/config/event.ts` - Agregar campo
2. `src/components/RSVPModule.tsx` - Agregar input
3. `src/utils/storage.ts` - Actualizar persistencia
4. `src/utils/whatsapp.ts` - Actualizar template

### 2. Cambiar Tema de Color

**Modificar:**
1. `tailwind.config.ts` - Actualizar paleta `neon`
2. `src/app/globals.css` - Actualizar variables CSS
3. Buscar/reemplazar `neon-magenta` → `neon-{nuevo-color}`

### 3. Agregar Nuevas Secciones

**Crear:**
1. Nuevo componente en `src/components/`
2. Importar en `src/app/page.tsx`
3. Agregar entre `<Hero />` y `<RSVPModule />`

### 4. Integrar Backend

**Opciones:**
1. **Vercel Serverless Functions** - Crear `/api` routes
2. **Firebase** - Agregar SDK y config
3. **Supabase** - Reemplazar localStorage

**Modificar:**
- `src/utils/storage.ts` - Cambiar a API calls
- `src/components/RSVPModule.tsx` - Agregar loading states

### 5. Agregar Autenticación

**Sugerencias:**
1. NextAuth.js para auth social
2. Proteger ruta `/admin` para ver RSVPs
3. Crear dashboard de administración

---

## 🐛 Debugging

### Dev Server No Inicia

```bash
# Limpiar cache
rm -rf .next
npm install
npm run dev
```

### Build Falla

```bash
# Verificar TypeScript
npx tsc --noEmit

# Verificar ESLint
npm run lint
```

### Estilos No Aplican

1. Verificar que colores usen formato `rgb()` en `tailwind.config.ts`
2. Reiniciar dev server después de cambios en Tailwind
3. Verificar que clases existan en `globals.css`

---

## 📚 Recursos Adicionales

- **Next.js Docs:** https://nextjs.org/docs
- **Tailwind CSS:** https://tailwindcss.com/docs
- **TypeScript:** https://www.typescriptlang.org/docs
- **Vercel Deploy:** https://vercel.com/docs

---

## 🎵 Referencias al Álbum DATA

El proyecto incluye referencias sutiles al álbum "DATA" de Tainy (2023):

| Ubicación | Referencia | Canción |
|-----------|-----------|---------|
| EVENT_ID | SCI-FI | Track 17: "Sci-Fi" |
| PROTOCOL | PARANORMAL | Track 19: "Paranormal" |
| Subtítulo | "fantasmas y datos" | Track 4: "Fantasma \| AVC" |
| Coordenadas | MOJABI / GHOST | Track 5: "Mojabi Ghost" |
| Sistema | DATA.ONLINE | Álbum "DATA" |
| DJ Card | "No vamos a volver" | Track 13: "Volver" |
| Dress Code | "Lo siento BB..." | Track 15: "Lo Siento BB:/" |

---

## 👥 Contribuir

Para contribuir al proyecto:

1. Fork el repositorio
2. Crear branch: `git checkout -b feature/nueva-funcionalidad`
3. Commit cambios: `git commit -m 'Add: nueva funcionalidad'`
4. Push: `git push origin feature/nueva-funcionalidad`
5. Abrir Pull Request

---

## 📄 Licencia

Proyecto personal - Uso libre para eventos privados

---

**Última actualización:** 2026-01-21  
**Versión:** v2023.DATA  
**Autor:** GHAELIKERR
