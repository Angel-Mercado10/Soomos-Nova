
# 🏛️ SOOMOSNOVA: MANIFIESTO DE ARQUITECTURA Y DESARROLLO

Este documento define los **estándares estrictos** de arquitectura, diseño y código para el proyecto "SoomosNova".
Como asistente de IA, tu objetivo NO es solo "hacer que funcione", sino **construir software empresarial escalable** siguiendo estos principios.

---

## 1. VISIÓN DEL PRODUCTO: "COSMIC LUXURY" 🌌💎

Estamos construyendo una plataforma de arquitectura digital para bodas de ultra-lujo.
* **Estética:** Minimalismo oscuro, sofisticado y futurista.
* **Colores Principales:**
    * 🌑 **Void Black:** `#080808` (Fondo principal).
    * 🏆 **Champagne Gold:** `#D4AF37` (Color primario, acentos, bordes).
    * ✨ **Starlight White:** `#F2F2F2` (Texto principal).
    * 🌑 **Surface:** `#121212` (Tarjetas y modales).
* **Experiencia de Usuario (UX):** Animaciones fluidas (`framer-motion`), efectos de cristal (*Glassmorphism*), y respuestas instantáneas.

---

## 2. ARQUITECTURA DE SOFTWARE: VERTICAL SLICES (ADAPTACIÓN .NET) 🏗️

Abandonamos la estructura tradicional de Next.js (agrupar por "tipos" de archivo).
Adoptamos **Vertical Slices (Features)**, inspirado en *Clean Architecture* de .NET.

### 📐 Regla de Oro: Cohesión Funcional
Cada funcionalidad del negocio (ej: Galería, Chatbot, Invitación) debe vivir en su propia carpeta "Feature". Todo lo necesario para que esa feature funcione (UI, Lógica, Acceso a Datos) debe estar junto.

### 📂 Estructura de Directorios Obligatoria (`src/`)

```text
src/
├── app/                        # CAPA DE PRESENTACIÓN (ROUTING)
│   ├── layout.tsx              # Layout global (Fuentes, Providers)
│   ├── page.tsx                # Página de inicio
│   └── [event-slug]/           # Rutas dinámicas
│       └── page.tsx            # Solo importa y renderiza componentes de 'features'
│
├── features/                   # CAPA DE NEGOCIO (VERTICAL SLICES)
│   ├── wedding-showcase/       # [Feature] Landing Page de la boda
│   ├── guest-experience/       # [Feature] Interacción del invitado (Chat, Fotos)
│   └── auth/                   # [Feature] Autenticación y Seguridad
│       ├── components/         # UI (Vistas React)
│       ├── actions.ts          # CONTROLLERS (Server Actions)
│       ├── service.ts          # DOMAIN SERVICES (Lógica pura)
│       ├── repository.ts       # DATA ACCESS (BD / APIs externas)
│       └── types.ts            # MODELS / DTOs
│
└── shared/                     # SHARED KERNEL (Código transversal)
    ├── ui/                     # UI Kit Base (Botones, Inputs, Modales genéricos)
    ├── lib/                    # Configuración de infraestructura (Firebase, Utils)
    └── types/                  # Tipos globales de la aplicación

```

---

## 3. MAPEO DE RESPONSABILIDADES (.NET ➡️ NEXT.JS) 🔄

Para mantener el orden mental de ingeniería de software, traducimos los conceptos de Backend a este Framework Fullstack:

### 🎮 1. Controller ➡️ `actions.ts` (Server Actions)

* **Responsabilidad:** Es el punto de entrada desde el Cliente.
* **Tareas:**
* Recibir datos del formulario o interacción.
* Validar la sesión del usuario (Auth).
* Parsear y validar el input inicial (usando Zod).
* **Delegar** la ejecución al `service.ts`.
* Manejar errores HTTP/UI y revalidar el caché (`revalidatePath`).


* **Prohibido:** No escribir lógica de negocio compleja aquí.

### 🧠 2. Service Layer ➡️ `service.ts`

* **Responsabilidad:** El cerebro de la aplicación.
* **Tareas:**
* Contiene las reglas de negocio (ej: "No permitir subir fotos si faltan 2 horas para la boda").
* Orquesta llamadas a múltiples repositorios si es necesario.
* Devuelve resultados limpios al Controller.


* **Prohibido:** No acceder directamente a la base de datos ni a APIs externas.

### 💾 3. Repository Pattern ➡️ `repository.ts`

* **Responsabilidad:** El único que toca los datos.
* **Tareas:**
* Queries a Base de Datos (SQL/NoSQL).
* Llamadas a APIs de terceros (Gemini AI, Google Cloud Storage).
* Mapeo de datos crudos a entidades de dominio.


* **Prohibido:** No contener lógica de negocio (solo lógica de acceso a datos).

### 📦 4. DTOs & Models ➡️ `types.ts`

* **Responsabilidad:** Definir la forma de los datos.
* **Tareas:**
* Interfaces de TypeScript.
* Tipos de retorno de las APIs.
* *Nota:* Usar `PascalCase` para interfaces (ej: `WeddingEvent`) y `I` prefijo opcional según preferencia, pero mantener consistencia.



---

## 4. REGLAS DE CODIFICACIÓN (CODING STANDARDS) 💻

### ⚛️ Componentes React

* **Server Components por Defecto:** Todo componente es Server Component a menos que necesite interactividad (`useState`, `useEffect`, `onClick`).
* **`"use client"`:** Colócalo solo en las "hojas" del árbol de componentes (botones, formularios interactivos, animaciones).
* **Estilos:** Usa **Tailwind CSS** para todo. No crees archivos `.css` o `.scss` separados (excepto `globals.css`).
* **Animaciones:** Usa `framer-motion` para transiciones de entrada y salida (`AnimatePresence`).

### 🛡️ TypeScript & Seguridad

* **Strict Mode:** No usar `any`. Si no sabes el tipo, usa `unknown` y valídalo.
* **Alias de Importación:** Usa siempre `@/features/...` o `@/shared/...`. Evita `../../`.
* **Validación:** Usa **Zod** para validar cualquier dato que venga del usuario antes de procesarlo.

### ⚡ Rendimiento (Performance)

* **Cargas Paralelas:** Si tienes que llamar a 2 servicios independientes, usa `Promise.all` (equivalente a `Task.WhenAll` en .NET).
* **Imágenes:** Usa siempre el componente `<Image />` de Next.js con `priority` si está en el Hero (portada).
* **Fuentes:** Usa las variables CSS configuradas (`font-display`, `font-body`).

---

## 5. DESIGN SYSTEM & UI KIT 🎨

Cuando crees interfaz gráfica, sigue estas guías visuales:

* **Botones Primarios:** Fondo Dorado (`bg-primary`), Texto Negro (`text-background`), uppercase, tracking-wide.
* **Botones Secundarios:** Borde Dorado (`border border-primary`), Texto Dorado, fondo transparente.
* **Tarjetas (Cards):** Fondo semitransparente con desenfoque (`backdrop-blur-md bg-white/5 border border-white/10`).
* **Tipografía:**
* Títulos H1-H3: `font-display` (Playfair Display). Elegantes.
* Cuerpo/UI: `font-body` (Montserrat). Legibles.



---

## 6. EJEMPLO DE FLUJO DE TRABAJO 📝

Si te pido: *"Crea la funcionalidad de subir fotos"*, tu proceso mental debe ser:

1. Crear carpeta `src/features/gallery/`.
2. Definir `types.ts` (Interfaz `Photo`).
3. Crear `repository.ts` (Función `uploadToStorage`).
4. Crear `service.ts` (Función `processGuestUpload` que verifica límites).
5. Crear `actions.ts` (Server Action `uploadPhotoAction` que recibe el FormData).
6. Crear `components/UploadButton.tsx` (Cliente) y `components/PhotoGrid.tsx` (Servidor).

```

***

