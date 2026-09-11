# SPEC-03 — Página Inicio (`/`)


| Campo          | Valor                                                                                                                                                                                                          |
| -------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **ID**         | SPEC-03                                                                                                                                                                                                        |
| **Título**     | Página Inicio (`/`)                                                                                                                                                                                            |
| **Fecha**      | 2026-09-10                                                                                                                                                                                                     |
| **Estado**     | 🟡 **En revisión** — pendiente de aprobación explícita                                                                                                                                                         |
| **Depende de** | SPEC-01 (alcance y estructura, DONE ✅) · SPEC-02 (fundaciones de diseño, DONE ✅) · SPEC-00 (base técnica, DONE ✅ — documento reconstruido el 2026-09-10 a partir del índice) · Bloques 1 y 2 de implementación |
| **Produce**    | Documentación. **Ningún código, componente, estilo, asset ni fuente.**                                                                                                                                         |
| **Desbloquea** | Bloques 3+ de implementación de la Home                                                                                                                                                                        |
| **Tipo**       | Especificación de página (contenido, estructura, polaridad, responsive y criterios)                                                                                                                            |


> ⛔ **SPEC-03 no está aprobada.** Permanece en **🟡 En revisión** hasta que el
> responsable la apruebe explícitamente. Solo entonces sus decisiones (**H-xx**)
> pasan a ser vinculantes.

**Marcado usado en este documento:** ✅ aprobado · 🟡 pendiente de aprobación ·
⛔ prohibido / fuera de alcance.

**Identificadores:**


| Prefijo        | Significado                                                                  | Estado      |
| -------------- | ---------------------------------------------------------------------------- | ----------- |
| `H-xx`         | Decisión **cerrada** por SPEC-03 (a ratificar con el documento)              | §22         |
| `P-xx`         | Decisión **pendiente** (continúa la numeración global; SPEC-02 llegó a P-17) | §23         |
| `C-xx`         | **Contradicción o tensión** detectada (continúa desde C-03)                  | §24         |
| `R-xx`, `S-xx` | Heredados de SPEC-01                                                         | SPEC-01 §11 |


---



## 0. Cómo se relaciona con las SPEC anteriores


| SPEC    | Qué aporta                                                                                                     | Qué **no** repite SPEC-03                                                            |
| ------- | -------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------ |
| SPEC-00 | Stack y base técnica ejecutable                                                                                | Nada de stack ni de estructura de proyecto                                           |
| SPEC-01 | Alcance, páginas, secciones de Inicio, navegación, CTAs, responsive, accesibilidad, SEO                        | No redefine el alcance ni las 5 páginas; solo concreta **Inicio**                    |
| SPEC-02 | Tokens, tipografía, breakpoints, layout, componentes, botones, cards, imágenes, estética, accesibilidad visual | No redefine tokens ni componentes: los **usa** y decide **qué se aplica en la Home** |


SPEC-03 **no cambia** SPEC-01 ni SPEC-02. Si algo debiera cambiarse, está
reportado en **§24 Contradicciones detectadas** y **nunca** resuelto en silencio.

---



## 1. Objetivo de la página Inicio



### 1.1 Qué función cumple

Es la **página principal de conversión** de una web corporativa de gimnasio
(SPEC-01 §1.1 y §3.2). Recibe a visitantes que llegan desde buscadores, redes o
enlaces directos y debe:

1. **explicar qué es el gimnasio** en los primeros segundos;
2. **resumir la oferta completa** para que no haga falta navegar para entenderla;
3. **generar confianza** (instalaciones, equipo, ubicación);
4. **llevar a la acción** mediante el CTA aprobado **"Únete ahora" →** `/contacto`.



### 1.2 Qué debe entender el visitante en los primeros segundos

Sin hacer scroll, el visitante debe poder responder:


| Pregunta         | Dónde se responde                              |
| ---------------- | ---------------------------------------------- |
| ¿Qué es esto?    | Hero (`h1`)                                    |
| ¿Para quién es?  | Hero (texto de apoyo) + Beneficios             |
| ¿Qué me ofrece?  | Servicios destacados                           |
| ¿Es de fiar?     | Entrenadores + Galería (cuando existan assets) |
| ¿Cuánto cuesta?  | Tarifas destacadas                             |
| ¿Dónde está?     | Ubicación                                      |
| ¿Qué hago ahora? | CTA "Únete ahora" (Hero, tarifas y CTA final)  |




### 1.3 Objetivo de conversión


| Prioridad | Acción                                | Destino                                      |
| --------- | ------------------------------------- | -------------------------------------------- |
| **1.º**   | Contactar para informarse o apuntarse | `/contacto` (único destino aprobado)         |
| 2.º       | Profundizar en la oferta              | `/servicios`, `/tarifas` (**ratificadas** ✅) |


Métricas de éxito futuras (no se instrumentan en este bloque): no pertenecen a
SPEC-03 porque la analítica no está aprobada.

### 1.4 Información que debe proporcionar

Qué es el gimnasio · propuesta de valor · servicios y clases destacadas · equipo
humano · prueba visual de las instalaciones · tarifas resumidas · ubicación y
contacto · una llamada a la acción final.

### 1.5 Qué NO es y qué NO debe intentar hacer ⛔

La Home **no** es ni debe convertirse en: aplicación de gestión de gimnasio ·
SaaS · área privada · sistema de reservas · sistema de pagos · sistema de
membresías · plataforma para socios · panel administrativo · backend ·
aplicación de clases.

En concreto, la Home **no** debe:

- permitir reservar clase, plaza ni cita;
- mostrar disponibilidad, aforo ni horarios en tiempo real;
- gestionar usuarios, cuentas, socios ni roles;
- cobrar, suscribir ni tramitar altas;
- mostrar datos personales de terceros;
- requerir autenticación para nada;
- inventar información del negocio (dirección, teléfono, precios, personas).

La analítica, el SEO técnico, las fuentes y los assets reales quedan fuera de
este documento (ver §23).

---



## 2. Estructura completa de la página



### 2.1 Orden aprobado de los bloques

El orden es el de SPEC-01 §4.1 y **no se modifica**. El Header, el SkipLink y el
Footer son **globales** (SPEC-01 §4.6 aprobado con R-01): no son secciones de
Inicio, aunque se muestren en ella.


| #   | Bloque                          | Polaridad              | Heading            | CTA propio                             | Media                      | Estado                                       |
| --- | ------------------------------- | ---------------------- | ------------------ | -------------------------------------- | -------------------------- | -------------------------------------------- |
| —   | Header (global)                 | dark                   | — (marca en texto) | "Únete ahora"                          | —                          | ✅ implementado (Bloque 1 + menú móvil del 2) |
| 1   | Hero                            | **dark** `--gf-bg`     | `h1`               | Principal + secundaria                 | Imagen: pendiente **P-07** | ✅ implementado (Bloque 2), sin imagen        |
| 2   | Beneficios / propuesta de valor | **light**              | `h2`               | —                                      | —                          | 🟡 siguiente bloque                          |
| 3   | Servicios y clases destacadas   | **dark** `--gf-bg`     | `h2`               | "Ver todos los servicios"              | —                          | 🟡 pendiente                                 |
| 4   | Entrenadores                    | **dark** `--gf-bg-alt` | `h2`               | —                                      | Fotos: pendiente **P-07**  | 🟡 pendiente                                 |
| 5   | Galería                         | **light**              | `h2`               | —                                      | **6 imágenes: P-07**       | 🔴 **bloqueado** por P-07                    |
| 6   | Tarifas destacadas              | **dark** `--gf-bg`     | `h2`               | "Ver todas las tarifas" + CTA por plan | —                          | 🟡 pendiente (precio provisional)            |
| 7   | Ubicación                       | **dark** `--gf-bg-alt` | `h2`               | "Cómo llegar"                          | Mapa: **P-05**             | 🔴 **bloqueado** por P-06 (+ P-05)           |
| 8   | CTA final                       | **dark** `--gf-bg`     | `h2`               | "Únete ahora"                          | —                          | 🟡 pendiente                                 |
| —   | Footer (global)                 | dark `--gf-bg-alt`     | —                  | —                                      | —                          | ✅ implementado (Bloque 1)                    |




### 2.2 Reglas de composición

1. **Un solo** `main`, ya lo aporta `App.tsx` con `id="contenido-principal"`; la
  Home solo aporta secciones.
2. **Cada bloque es un** `<section class="gf-section">` con su `.gf-container`.
  El ritmo vertical es el de sección (`--gf-section-padding-y`) y es **igual**
   para todos los bloques (SPEC-02 §4.4.1): ningún bloque añade padding propio.
3. **El contenedor es siempre el mismo** (1200 px con padding fluido). Los
  bloques de texto usan `--gf-measure` o `.gf-container--narrow` **dentro** del
   contenedor, nunca anchos propios.
4. **Ningún bloque duplica elementos globales**: no hay cabeceras ni pies
  repetidos dentro de las secciones.
5. **El cambio de fondo es el separador**: sin bordes, sin sombras y sin
  degradados entre bandas (SPEC-02 §4.4.4).
6. **No se crean estructuras vacías** para los bloques aún no implementados: la
  Home se compone solo con los bloques que existen.



### 2.3 Jerarquía de headings


| Nivel | Cantidad                           | Dónde                                        |
| ----- | ---------------------------------- | -------------------------------------------- |
| `h1`  | **exactamente 1**                  | Hero                                         |
| `h2`  | **1 por bloque de contenido**      | Bloques 2 a 8 (7 en total)                   |
| `h3`  | 1 por elemento dentro de un bloque | Beneficios, Servicios, Entrenadores, Tarifas |
| `h4`+ | ⛔ no se usan en la Home            | —                                            |


Regla: los niveles se eligen **por estructura**, nunca por tamaño visual
(SPEC-01 §8.5.3). El `h1` es el mensaje principal del Hero; los `h2` son los
títulos de bloque.

> **Precisión sobre SPEC-02 §8.5.4** (ver **C-09**): "las 8 secciones de
> contenido" se interpreta aquí como Hero (`h1`) + bloques 2–8 (`h2`), porque el
> Footer pasó a ser global con R-01.



### 2.4 Anclas de la página

SPEC-01 §3.1 define tres anclas que otros puntos de la web enlazan. Son
**obligatorias** y deben existir en cuanto se implemente el bloque:


| Ancla           | Bloque           | Quién la usa                                                     |
| --------------- | ---------------- | ---------------------------------------------------------------- |
| `#entrenadores` | 4 — Entrenadores | "El equipo" de Nosotros enlaza a `/#entrenadores` (SPEC-01 §4.2) |
| `#galeria`      | 5 — Galería      | Enlaces internos a la galería (SPEC-01 §3.1)                     |
| `#ubicacion`    | 7 — Ubicación    | Bloque de ubicación reutilizado en Contacto (SPEC-01 §4.5)       |


Regla de implementación: el `id` va en el `<section>`, y cada `<section>` se
asocia a su `h2` con `aria-labelledby` (ver §16).

### 2.5 Estado de implementación actual


| Bloque        | Estado real                                                                                                              |
| ------------- | ------------------------------------------------------------------------------------------------------------------------ |
| Header global | Implementado: marca + navegación + CTA + **menú móvil** (SPEC-02 §3.4)                                                   |
| 1. Hero       | Implementado **sin imagen**; copy provisional; CTA secundaria deshabilitada porque su destino sigue pendiente (**P-11**) |
| 2–8           | No implementados                                                                                                         |
| Footer global | Implementado: marca + navegación secundaria + ©; contacto, redes y enlaces legales pendientes (**P-06**, **P-04**)       |


---



## 3. Bloque 1 — Hero ✅ implementado

> SPEC-03 **documenta** este bloque y **no obliga a rehacerlo**: lo implementado
> cumple lo especificado aquí.


| Campo                         | Definición                                                                                                       |
| ----------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| **Objetivo**                  | Comunicar de inmediato qué es el gimnasio y provocar la primera conversión                                       |
| **Posición**                  | 1.º, justo debajo del Header                                                                                     |
| **Polaridad**                 | ✅ **dark** `--gf-bg` (`#050505`) — obligatorio (SPEC-02 §2.1.3 regla 1)                                          |
| **Heading**                   | `h1` **único** de la página                                                                                      |
| **Contenido**                 | Titular (`h1`) + texto de apoyo + CTA principal + CTA secundaria + aviso de contenido provisional                |
| **Imagen**                    | **Ninguna.** Debe funcionar sin imagen (SPEC-02 §4.5.2 y §8.5)                                                   |
| **Iconos**                    | No                                                                                                               |
| **Componentes**               | `Button` (primaria `lg` y secundaria `lg`), `.gf-container`, `.gf-cluster`                                       |
| **Datos**                     | `HERO_CONTENT` en `src/data/home.ts` — **COPY PROVISIONAL DE DESARROLLO**                                        |
| **Pendiente de datos reales** | Titular y texto definitivos (**P-06**) · imagen del Hero (**P-07**) · destino de "Conoce el gimnasio" (**P-11**) |


**Requisitos que no deben romperse al tocar el Hero:**

1. Existe **un único** `h1` en toda la página.
2. El CTA principal es **"Únete ahora"** con destino `/contacto` y variante
  **primaria** (amarillo `#F5C400` con texto negro; hover `#FFD633`; active
   `#D8AC00`).
3. El texto de apoyo usa la familia de cuerpo (Inter) y el titular la de
  titulares a peso **800** (SPEC-02 §2.2.5).
4. ⛔ Sin degradados, sin colores nuevos y sin fondos decorativos inventados.
5. ⛔ Sin imágenes de stock ni placeholders que simulen contenido real.
6. El CTA principal debe quedar **visible sin hacer scroll en un móvil de
  360 × 640** (SPEC-02 §4.5.1). Se mantiene el contenido compacto para ello.

**Incorporación futura de la imagen (sin rehacer nada):** se añade un elemento
de media como **segundo hijo** de `.gf-hero__inner`; el contenedor pasa a dos
columnas desde `--bp-lg` (1024 px) y la media usa las proporciones de SPEC-02
§8.2 (Hero móvil 4:5; escritorio 16:9) con `--gf-scrim` si hay texto encima.

**CTA secundaria:** texto aprobado **"Conoce el gimnasio"**; su destino **sigue
pendiente** (**P-11**; la propuesta de SPEC-02 §6.2 → `/nosotros` no está
aprobada). Regla ya aplicada en el Bloque 2: **no se convierte en una navegación
inventada** (se renderiza deshabilitada). Se retirará el estado deshabilitado en
cuanto haya destino aprobado.

**Responsive del Hero**


| Móvil (<768)                                                | Tablet (≥768)     | Desktop (≥1024)                                                  |
| ----------------------------------------------------------- | ----------------- | ---------------------------------------------------------------- |
| 1 columna: titular, texto, CTAs apilados si no caben, aviso | Igual (1 columna) | Igual, y **2 columnas cuando exista media** (contenido + imagen) |


---



## 4. Bloque 2 — Beneficios / propuesta de valor 🟡 siguiente bloque


| Campo                         | Definición                                                                                         |
| ----------------------------- | -------------------------------------------------------------------------------------------------- |
| **Objetivo**                  | Responder "¿por qué este gimnasio?" con cuatro argumentos cortos que refuercen la promesa del Hero |
| **Posición**                  | 2.º, inmediatamente después del Hero                                                               |
| **Polaridad**                 | ✅ **light** (`--gf-bg-light`, blanco) — ver **H-04**                                               |
| **Heading**                   | `h2` (título del bloque) + un `h3` por beneficio                                                   |
| **Contenido**                 | **4 beneficios**, cada uno con título (`h3`) y descripción de **1–2 frases**                       |
| **CTA**                       | **Ninguno** (ver justificación abajo)                                                              |
| **Imágenes**                  | No                                                                                                 |
| **Iconos**                    | **No** (ver justificación abajo)                                                                   |
| **Componentes**               | `SectionHeading` (a implementar aquí) · `.gf-grid` · bloques CSS (⛔ sin `Card`)                    |
| **Datos**                     | `BENEFITS`: `{ title, description }[]` — **COPY PROVISIONAL DE DESARROLLO**                        |
| **Pendiente de datos reales** | Los cuatro beneficios definitivos (**P-06**)                                                       |


**Decisiones de este bloque (detalle en §22):**

1. **Cuatro beneficios** (H-06): llenan una fila de 4 columnas en escritorio y
  una rejilla 2 × 2 en tablet; es la cifra propuesta y no deja huecos.
2. **Sin** `Icon` **(H-06).** SPEC-02 §5.5 prohíbe *inventar un icono por servicio*;
  un icono por beneficio es la misma clase de contenido no aprobado, y además
   SPEC-02 §9.4.2 señala como anti-patrón los bloques de "icono + título +
   párrafo repetidos con idéntico peso visual". Ver **C-07** y **C-08**.
3. **Sin** `Card` **(H-06).** El beneficio es texto, no una tarjeta de contenido. Se
  usan bloques abiertos separados por una **regla superior decorativa**
   (`--gf-border`) y por el espaciado; así se evita el aspecto de plantilla de
   cajas repetidas y no se introduce ningún token nuevo.
4. **Sin CTA (H-06).** SPEC-01 §6.4.1 pide **un solo CTA primario por sección** y
  evitar que dos acciones amarillas compitan. Este bloque no convierte: prepara.

**Responsive**


| Móvil (<768)  | Tablet (≥768)          | Desktop (≥1024) |
| ------------- | ---------------------- | --------------- |
| **1 columna** | **2 columnas** (2 × 2) | **4 columnas**  |


Se usan columnas explícitas en los breakpoints (no `auto-fit`) porque con 4
elementos el grid intrínseco produce **3 + 1** en anchos intermedios, que es un
reparto desequilibrado.

---



## 5. Bloque 3 — Servicios y clases destacadas 🟡 pendiente


| Campo                         | Definición                                                                                                                                                                                                                                         |
| ----------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Objetivo**                  | Mostrar una **selección** de la oferta para que el visitante entienda qué puede hacer en el gimnasio, y llevarle al catálogo completo                                                                                                              |
| **Posición**                  | 3.º                                                                                                                                                                                                                                                |
| **Polaridad**                 | ✅ **dark** `--gf-bg`                                                                                                                                                                                                                               |
| **Heading**                   | `h2` + un `h3` por elemento                                                                                                                                                                                                                        |
| **Contenido**                 | **3 elementos**. Cada uno: título (`h3`) + descripción de 2 líneas como máximo. **Informativo**: sin horarios, sin plazas, sin disponibilidad, sin reserva                                                                                         |
| **CTA**                       | **"Ver todos los servicios"** — variante **secundaria**, al final del bloque, alineado a la izquierda. Destino `/servicios` ✅ **ratificado** (SPEC-01 §9.4; P-18 cerrada)                                                                          |
| **Imágenes**                  | No (ver más abajo)                                                                                                                                                                                                                                 |
| **Iconos**                    | **No.** ⛔ No se inventan iconos por servicio: `Card` se usa **sin icono** (C-07). Los iconos solo se añadirán si existe una función semántica o de interfaz justificada, y siempre con el componente `Icon` de **P-17** (⛔ sin librería de iconos) |
| **Componentes**               | `SectionHeading` · `Card` (**base, sin media**) · `Button` (secundaria) · `.gf-grid`                                                                                                                                                               |
| **Datos**                     | `FEATURED_SERVICES`: `{ title, description }[]` — **COPY PROVISIONAL DE DESARROLLO**                                                                                                                                                               |
| **Pendiente de datos reales** | Los servicios reales del gimnasio (**P-06**)                                                                                                                                                                                                       |


**Reglas del bloque:**

1. `Card` **en su forma base** (superficie `--gf-surface` + borde decorativo +
  radio `lg`, sin sombra), sin media y **sin icono**. Es la fila "bloque de
   texto simple" de SPEC-02 §7.4.
2. **Fotografías diferidas:** cuando existan assets (**P-07**) la tarjeta pasa a
  la variante `--media` (proporción 4:3, `object-fit: cover`). La estructura no
   cambia: solo aparece la media.
3. **⛔ Prohibido convertir esto en gestión:** nada de reservar, apuntarse,
  plazas, aforo, horarios en tiempo real ni estados de inscripción
   (SPEC-01 §2.2, nota sobre "clases").
4. **Diferencia con** `/servicios`**:** la Home muestra **3 destacados resumidos** y
  enlaza; la página `/servicios` contiene el catálogo completo y el detalle. La
   Home **no duplica** el contenido completo (SPEC-01 §3.4.2 y **R-03**).

**Responsive**


| Móvil (<768)  | Tablet (≥768)                  | Desktop (≥1024)           |
| ------------- | ------------------------------ | ------------------------- |
| **1 columna** | 2 (o 3 si el ancho lo permite) | **3 columnas** = una fila |


Se usa el grid intrínseco aprobado (`repeat(auto-fit, minmax(16rem, 1fr))`,
SPEC-02 §4.3.2): con 3 elementos, en tablet puede quedar 2 + 1, lo cual es
aceptable; nunca hay menos de 16 rem por tarjeta.

---



## 6. Bloque 4 — Entrenadores 🟡 pendiente


| Campo                         | Definición                                                                                                             |
| ----------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| **Objetivo**                  | Generar confianza mostrando al equipo humano (SPEC-01 §3.2 y §4.1)                                                     |
| **Posición**                  | 4.º                                                                                                                    |
| **Polaridad**                 | ✅ **dark** `--gf-bg-alt` (`#111111`)                                                                                   |
| **Ancla**                     | `id="entrenadores"` (obligatoria, §2.4)                                                                                |
| **Heading**                   | `h2` + un `h3` por perfil                                                                                              |
| **Contenido**                 | **3 perfiles**. Campos: **especialidad/rol** (título), **descripción** corta (1–2 frases) y **nombre** *cuando exista* |
| **CTA**                       | **Ninguno** (ver justificación)                                                                                        |
| **Fotografía**                | **No** hasta que existan assets (**P-07**). Después: `Card --media` con proporción **3:4** (SPEC-02 §8.2)              |
| **Iconos**                    | No                                                                                                                     |
| **Componentes**               | `SectionHeading` · `Card` · `.gf-grid`                                                                                 |
| **Datos**                     | `TRAINERS`: `{ name: string | null, specialty, description }[]` — **COPY PROVISIONAL DE DESARROLLO**                   |
| **Pendiente de datos reales** | Nombres y datos reales del equipo (**P-06**) · fotografías con consentimiento (**P-07**)                               |


**Regla de nombres (H-08):** ⛔ **no se inventan nombres de personas.** Mientras
`name` sea `null`, el **título de la tarjeta es la especialidad** y el campo
nombre no se renderiza. Cuando lleguen los datos reales, el nombre pasa a ser el
título y la especialidad se muestra como etiqueta secundaria. Así la rejilla se
puede implementar y validar **sin inventar personas**.

**Sin CTA (H-08):** el bloque es informativo y su contenido es el propio equipo.
La relación con `/nosotros` es **inversa**: Nosotros enlaza a `/#entrenadores`
(SPEC-01 §4.2); añadir aquí un CTA hacia Nosotros sería circular.

**Responsive**


| Móvil (<768)  | Tablet (≥768)                  | Desktop (≥1024)           |
| ------------- | ------------------------------ | ------------------------- |
| **1 columna** | 2 (o 3 si el ancho lo permite) | **3 columnas** = una fila |


Mismo grid intrínseco que Servicios. Cuando existan fotos, la proporción 3:4 se
mantiene en los tres tamaños (SPEC-02 §8.1.1).

---



## 7. Bloque 5 — Galería 🔴 bloqueado por P-07


| Campo            | Definición                                                                                             |
| ---------------- | ------------------------------------------------------------------------------------------------------ |
| **Objetivo**     | Prueba visual de las instalaciones y del ambiente (SPEC-01 §4.1)                                       |
| **Posición**     | 5.º                                                                                                    |
| **Polaridad**    | ✅ **light** — ver **H-04**                                                                             |
| **Ancla**        | `id="galeria"` (obligatoria, §2.4)                                                                     |
| **Heading**      | `h2`                                                                                                   |
| **Contenido**    | **6 imágenes** en rejilla uniforme. Sin pies de foto inventados                                        |
| **Interacción**  | **Ninguna.** ⛔ **Sin visor ampliado (lightbox)** — ver más abajo                                       |
| **CTA**          | **Ninguno**                                                                                            |
| **Proporciones** | Celda **4:3 en móvil** y **3:2 desde 768 px**, con `object-fit: cover` (SPEC-02 §8.4)                  |
| **Iconos**       | No                                                                                                     |
| **Componentes**  | `SectionHeading` · `.gf-grid` · marcado `figure` + `img` (⛔ **sin** `GalleryItem`, ver **C-08** y §14) |
| **Datos**        | `GALLERY`: `{ src, alt }[]` (6 elementos) — **vacío hasta P-07**                                       |
| **Pendiente**    | **Assets reales (P-07)** y sus textos alternativos                                                     |


**🔴 Estado: bloqueado.** SPEC-02 §8.5.3 prohíbe generar imágenes o descargar
placeholders "para rellenar", y SPEC-02 §8.1 prohíbe inventar assets. Sin
imágenes reales, una galería no tiene contenido: **el bloque no se implementa**
hasta que existan los assets. ⛔ No se crea una estructura vacía con huecos.
Cuando lleguen, ocupa su posición (5.º) sin tocar los demás bloques.

**Sin visor ampliado (H-09).** SPEC-02 §8.4 lo contempla de forma **condicional**
("si se abre un visor…"), no obligatoria. La decisión es **no implementarlo**:
prioriza simplicidad, evita gestionar foco/trampa de teclado y `Escape` de un
diálogo, y no hay necesidad de producto. Consecuencia: las imágenes **no son
clicables** y **no hay interacción**.

**Reglas de accesibilidad de las imágenes** (cuando existan): texto alternativo
descriptivo en español; imágenes decorativas con `alt=""`; ⛔ nunca `alt` con
"imagen de" ni el nombre del archivo; ⛔ el color no comunica nada aquí.

**Responsive**


| Móvil (<768)                | Tablet (≥768)               | Desktop (≥1024)             |
| --------------------------- | --------------------------- | --------------------------- |
| **2 columnas** (celdas 4:3) | **3 columnas** (celdas 3:2) | **3 columnas** (celdas 3:2) |


3 columnas con 6 imágenes = 2 filas exactas. El contenedor impone la proporción y
`object-fit: cover` recorta cualquier foto, venga con la proporción que venga
(SPEC-02 §8.4).

---



## 8. Bloque 6 — Tarifas destacadas 🟡 pendiente


| Campo                         | Definición                                                                                                                    |
| ----------------------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| **Objetivo**                  | Resolver la duda económica con transparencia y llevar a `/tarifas` o a `/contacto`                                            |
| **Posición**                  | 6.º                                                                                                                           |
| **Polaridad**                 | ✅ **dark** `--gf-bg`; las tarjetas usan `--gf-surface` (`#111111`)                                                            |
| **Heading**                   | `h2` + un `h3` por plan (nombre del plan)                                                                                     |
| **Contenido**                 | **3 planes**. Cada uno: nombre (`h3`), **precio**, **3–4 características**, CTA                                               |
| **Precio**                    | **Placeholder de texto claramente identificado** ⛔ **nunca una cifra inventada** (H-10)                                       |
| **CTA de sección**            | "Ver todas las tarifas" — variante **secundaria**, al final. Destino `/tarifas` ✅ **ratificado** (SPEC-01 §9.4; P-18 cerrada) |
| **CTA por plan**              | **"Únete ahora"** → `/contacto` ✅. Solo el plan **recomendado** usa variante **primaria**; los otros dos, **secundaria**      |
| **Imágenes / Iconos**         | No                                                                                                                            |
| **Componentes**               | `SectionHeading` · `Card --pricing` · `Badge` · `Button` · `.gf-grid`                                                         |
| **Datos**                     | `FEATURED_PLANS`: `{ name, price: null, features[], recommended }[]` — **COPY PROVISIONAL**                                   |
| **Pendiente de datos reales** | Precios reales (**P-06**) y **criterio de IVA** (dentro de P-06)                                                              |


**Reglas del bloque:**

1. **Tres planes** (H-10): SPEC-02 §4.3.3 permite 2–3; tres permiten una
  comparación "básico / recomendado / completo" donde el recomendado tiene
   sentido. La comparativa completa vive en `/tarifas`.
2. **Un solo CTA primario en el bloque (H-10):** lo lleva el **plan
  recomendado**. SPEC-01 §6.4.1 prohíbe que dos acciones amarillas compitan en
   el mismo viewport; con tres botones amarillos se rompería esa regla.
3. **El plan recomendado se distingue por más de un indicador** (H-10), como
  exige SPEC-02 §10.3 ("ningún estado se comunica solo con color"):
   `Badge` textual **"Recomendado"** + borde `--gf-border-strong` + **posición
   central** desde 768 px. ⛔ No se distingue solo con amarillo.
4. **Sin compra ni pagos** (⛔): no hay pasarela, ni carrito, ni alta, ni
  suscripción. Los CTA llevan a `/contacto` (informarse) o a `/tarifas` (leer
   más).
5. **Diferencia con** `/tarifas`**:** la Home muestra **3 planes resumidos**; la
  página `/tarifas` tiene la comparativa completa, las condiciones (matrícula,
   permanencia) y el FAQ de SPEC-01 §4.4.

**Responsive**


| Móvil (<768)             | Tablet (≥768)                  | Desktop (≥1024)           |
| ------------------------ | ------------------------------ | ------------------------- |
| **1 columna** (apiladas) | 2 (o 3 si el ancho lo permite) | **3 columnas** = una fila |


Grid intrínseco aprobado. El plan recomendado va **en medio** en el orden del
DOM (no se reordena visualmente con `order`, para no alterar el orden de lectura).

---



## 9. Bloque 7 — Ubicación 🔴 bloqueado por P-06


| Campo                  | Definición                                                                                                                        |
| ---------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| **Objetivo**           | Que el visitante sepa **dónde está** el gimnasio y **cómo llegar**                                                                |
| **Posición**           | 7.º                                                                                                                               |
| **Polaridad**          | ✅ **dark** `--gf-bg-alt`                                                                                                          |
| **Ancla**              | `id="ubicacion"` (obligatoria, §2.4)                                                                                              |
| **Heading**            | `h2`                                                                                                                              |
| **Contenido previsto** | Dirección · referencia de zona · **horario de atención** · CTA "Cómo llegar"                                                      |
| **CTA**                | "Cómo llegar" — **destino pendiente (P-05)**: enlace a una app de mapas o mapa incrustado                                         |
| **Mapa**               | ⛔ **No se integra ningún mapa** hasta que P-05 decida el formato                                                                  |
| **Iconos**             | Posible uso de **iconos genéricos de interfaz** (ubicación, reloj, teléfono), que SPEC-02 §5.5 **sí** permite. No se añaden ahora |
| **Componentes**        | `SectionHeading` · `Button` · `.gf-container--narrow` o `--gf-measure`                                                            |
| **Datos**              | `LOCATION` — **vacío hasta P-06**                                                                                                 |
| **Pendiente**          | **Dirección y datos reales (P-06)** · **formato del mapa (P-05)** · horarios (P-09)                                               |


**🔴 Estado: bloqueado.** Su contenido **es** la dirección y los datos de
contacto: sin ellos no hay nada que mostrar, y **no se inventa una dirección**
(H-11). A diferencia de Tarifas —donde la estructura y las características se
pueden redactar de forma genérica provisional—, aquí **todo** el contenido es
dato específico del negocio. Por eso se bloquea en lugar de rellenarse.

**Relación con Contacto:** SPEC-01 §4.5 indica que Contacto reutiliza el bloque
de ubicación y un enlace para obtener indicaciones. Cuando este bloque se
implemente, su contenido debe poder **reutilizarse** allí (misma fuente de datos
en `src/data/`), sin duplicar el dato a mano (SPEC-01 **R-03** y **R-07**).

**Responsive previsto**


| Móvil (<768) | Tablet (≥768)                             | Desktop (≥1024) |
| ------------ | ----------------------------------------- | --------------- |
| 1 columna    | 2 columnas (datos | mapa) **si** hay mapa | Igual           |


Sin mapa (caso de P-05 = enlace externo), el bloque es de **una columna** con el
texto limitado por `--gf-measure`.

---



## 10. Bloque 8 — CTA final 🟡 pendiente


| Campo                         | Definición                                                                              |
| ----------------------------- | --------------------------------------------------------------------------------------- |
| **Objetivo**                  | Última conversión antes del Footer, después de que el visitante ha visto toda la oferta |
| **Posición**                  | 8.º, inmediatamente antes del Footer                                                    |
| **Polaridad**                 | ✅ **dark** `--gf-bg` (`#050505`) — obligatorio (SPEC-02 §15.1 decisión 5)               |
| **Heading**                   | `h2`                                                                                    |
| **Contenido**                 | Título (`h2`) + texto corto (1–2 frases) + **CTA principal**                            |
| **CTA**                       | **"Únete ahora"** → `/contacto` ✅. Variante **primaria**, tamaño `lg`                   |
| **CTA secundario**            | **Ninguno** (no compite con el principal)                                               |
| **Imágenes / Iconos**         | No                                                                                      |
| **Componentes**               | `SectionHeading` · `Button` (primaria `lg`)                                             |
| **Datos**                     | `FINAL_CTA`: `{ title, text }` — **COPY PROVISIONAL DE DESARROLLO**                     |
| **Pendiente de datos reales** | Copy definitivo (**P-06**)                                                              |


**Reglas del bloque:**

1. **Coherencia total con el CTA aprobado**: mismo texto (**"Únete ahora"**) y
  mismo destino (`/contacto`) que el Hero y las tarifas (SPEC-01 §11.1,
   P-02 y §6.4.5).
2. **Una sola acción**: ⛔ no se añade CTA secundario, para no diluir la
  conversión final.
3. **Sin cuenta atrás, sin formulario, sin captación de datos**: ⛔ nada de eso
  está aprobado (SPEC-01 P-03: no hay formulario).

**Responsive**


| Móvil (<768)                  | Tablet (≥768) | Desktop (≥1024)                           |
| ----------------------------- | ------------- | ----------------------------------------- |
| 1 columna, texto y CTA debajo | Igual         | Igual (texto limitado por `--gf-measure`) |


Se mantiene **una columna en todos los tamaños**: es el patrón más simple y
evita introducir un layout especial que no está pedido.

---



## 11. Elementos globales presentes en la Home

No se rediseñan aquí: pertenecen a SPEC-01 §4.6 y a SPEC-02 §5.3, y ya están
implementados.


| Elemento     | Función en la Home                                            | Estado         | Pendiente                                                                   |
| ------------ | ------------------------------------------------------------- | -------------- | --------------------------------------------------------------------------- |
| **SkipLink** | Primer elemento enfocable; salta a `#contenido-principal`     | ✅ implementado | —                                                                           |
| **Header**   | Marca + navegación principal + CTA "Únete ahora" + menú móvil | ✅ implementado | —                                                                           |
| **Footer**   | Cierre: marca, navegación secundaria y ©                      | ✅ implementado | Datos de contacto, ubicación, redes (**P-06**) y enlaces legales (**P-04**) |


Regla: la Home **no** define cabecera ni pie propios, y **no** duplica en una
sección lo que ya es global (por ejemplo, el CTA "Únete ahora" de la cabecera).

---



## 12. Polaridad visual de la Home ✅ (cierra una decisión de SPEC-02)

SPEC-02 §15.1 (decisión 6) dejó **la asignación concreta de secciones claras**
para decidirla al especificar cada página. **SPEC-03 la decide aquí** para la
Home, dentro de las reglas aprobadas (§2.1.3 y §9.3 de SPEC-02):


| #   | Bloque       | Polaridad | Fondo                       |
| --- | ------------ | --------- | --------------------------- |
| —   | Header       | dark      | `--gf-bg`                   |
| 1   | Hero         | dark      | `--gf-bg` (`#050505`)       |
| 2   | Beneficios   | **LIGHT** | `--gf-bg-light` (`#FFFFFF`) |
| 3   | Servicios    | dark      | `--gf-bg` (`#050505`)       |
| 4   | Entrenadores | dark      | `--gf-bg-alt` (`#111111`)   |
| 5   | Galería      | **LIGHT** | `--gf-bg-light` (`#FFFFFF`) |
| 6   | Tarifas      | dark      | `--gf-bg` (`#050505`)       |
| 7   | Ubicación    | dark      | `--gf-bg-alt` (`#111111`)   |
| 8   | CTA final    | dark      | `--gf-bg` (`#050505`)       |
| —   | Footer       | dark      | `--gf-bg-alt` (`#111111`)   |


**Secuencia resultante:** `D · L · D · D · L · D · D · D` (+ Footer `#111111`).
Dark a los lados, sin dos bandas claras seguidas.

**Comprobación de las reglas de SPEC-02 §2.1.3 y §9.3:**


| Regla                                                  | Comprobación                                      |
| ------------------------------------------------------ | ------------------------------------------------- |
| Cabecera, Hero, CTA final y Footer **siempre oscuros** | ✅ Los cuatro lo son                               |
| Máximo **1–2 secciones claras** por página             | ✅ **2** (Beneficios y Galería)                    |
| **Nunca consecutivas**                                 | ✅ Entre ellas quedan tres bloques oscuros         |
| ≤ ~35 % de las secciones claras                        | ✅ 2 de 8 = **25 %**                               |
| Negro ≥ 65–70 % de la superficie                       | ✅ 6 de 8 bloques oscuros = **75 %**               |
| ⛔ Ningún degradado entre bandas                        | ✅ El cambio de fondo es el separador              |
| ⛔ Ningún color nuevo                                   | ✅ Solo `--gf-bg`, `--gf-bg-alt` y `--gf-bg-light` |


**Por qué Beneficios y Galería, y no otras (H-04):**


| Candidata      | Decisión    | Motivo                                                                                                                                                                                                                                |
| -------------- | ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Beneficios** | ✅ **light** | Bloque de texto puro: sobre blanco la tipografía gana contraste y da una pausa visual inmediata después del Hero oscuro. **No contiene tarjetas**, así que no hay que resolver la separación de una tarjeta blanca sobre fondo blanco |
| **Galería**    | ✅ **light** | Una galería sobre blanco es limpia y hace destacar las fotos. **No tiene CTA**, así que no aparece el problema del botón amarillo sobre fondo claro (SPEC-02 §6.6)                                                                    |
| Tarifas        | ⛔ **dark**  | Necesita el **CTA primario amarillo** para convertir, y SPEC-02 §6.6 lo desaconseja sobre fondos claros. En oscuro, el botón funciona sin matices                                                                                     |
| Servicios      | ⛔ dark      | Queda entre dos bandas oscuras y ya tiene contraste propio                                                                                                                                                                            |
| Entrenadores   | ⛔ dark      | Con fotos (P-07) el fondo oscuro es más favorecedor                                                                                                                                                                                   |
| Ubicación      | ⛔ dark      | Es información funcional; el contraste oscuro es el de la identidad                                                                                                                                                                   |


**Reglas derivadas (obligatorias):**

1. **⛔ No hay tarjetas dentro de secciones claras en la Home.** Beneficios no
  usa `Card` y Galería usa imágenes, no tarjetas. Consecuencia: **la elección
   entre la opción A (tarjeta blanca) y la opción B (tarjeta oscura) de SPEC-02
   §7.3 no se ejerce en la Home** y **no hace falta** un ámbito de tokens
   invertido (superficie oscura dentro de sección clara). Queda registrado en
   §14 como necesidad futura si otra página lo requiere.
2. **⛔ Ningún CTA primario amarillo sobre sección clara** en la Home
  (SPEC-02 §6.6). En las secciones claras solo hay texto e imágenes.
3. **Los componentes no conocen su polaridad**: todo se resuelve con los tokens
  semánticos, que ya cambian dentro de `.gf-section--light` (implementado en
   `theme.css`).
4. La alternancia `#050505` / `#111111` **no es un degradado ni un borde**: es
  cambio de banda y por eso no lleva separadores añadidos (SPEC-02 §4.4.4).

---



## 13. Responsive

**Reglas generales (de SPEC-02 §3 y §4, no se inventan breakpoints):**

- **Mobile-first**: los estilos base son de móvil y las media queries solo usan
`min-width`.
- **Solo dos breakpoints**: `768px` (`--bp-md`) y `1024px` (`--bp-lg`).
⛔ Prohibido 640, 900, 1200, etc.
- Los valores de breakpoint **no pueden ser tokens en** `@media` (SPEC-02 §3.2):
se escriben literales con el comentario de referencia.
- Tipografía y espaciado son **fluidos** (`clamp()`); los breakpoints se usan
**solo cuando cambia realmente la disposición**.
- Grids intrínsecos (`auto-fit` + `minmax`) por defecto; columnas explícitas
cuando el reparto automático quede desequilibrado (caso de Beneficios con 4).

**Resumen por bloque:**


| #   | Bloque       | Móvil (<768)             | Tablet (≥768)                  | Desktop (≥1024)           |
| --- | ------------ | ------------------------ | ------------------------------ | ------------------------- |
| 1   | Hero         | 1 col                    | 1 col                          | 1 col (2 con media, P-07) |
| 2   | Beneficios   | 1 col                    | 2 col                          | 4 col                     |
| 3   | Servicios    | 1 col                    | 2–3 col                        | 3 col                     |
| 4   | Entrenadores | 1 col                    | 2–3 col                        | 3 col                     |
| 5   | Galería      | 2 col (4:3)              | 3 col (3:2)                    | 3 col (3:2)               |
| 6   | Tarifas      | 1 col                    | 2–3 col                        | 3 col                     |
| 7   | Ubicación    | 1 col                    | 1–2 col (según P-05)           | 1–2 col                   |
| 8   | CTA final    | 1 col                    | 1 col                          | 1 col                     |
| —   | Header       | 2 filas + panel vertical | 1 fila (menú colapsado oculto) | 1 fila                    |
| —   | Footer       | 1 col                    | 2 zonas                        | 3 zonas                   |


---



## 14. Componentes

**Prioridad: reutilizar lo implementado.** Solo se crea lo que tenga una razón
real (SPEC-02 §5.1).

### 14.1 Ya implementados (se reutilizan sin cambios)


| Componente | Uso en la Home                                                            |
| ---------- | ------------------------------------------------------------------------- |
| `Header`   | Global (con menú móvil)                                                   |
| `Footer`   | Global                                                                    |
| `Nav`      | Global (cabecera y pie)                                                   |
| `SkipLink` | Global                                                                    |
| `Button`   | Todas las CTA: `primary` / `secondary`; tamaños `md` y `lg`               |
| `Icon`     | Solo el botón de menú (`menu`, `close`). **No se amplía** en este alcance |




### 14.2 Aprobados en SPEC-02 y **todavía no implementados** (ver **C-05**)


| Componente       | Se implementa en                                          | Requisitos que debe cumplir                                                                                                                                                               |
| ---------------- | --------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `SectionHeading` | **Bloque 2 (Beneficios)** — es el primero que lo necesita | Renderiza un `h2` con `id` (para `aria-labelledby` de la sección) y, opcionalmente, texto de apoyo. SPEC-02 §5.3 también le permite *eyebrow* y enlace; **la Home no los usa** (ver H-19) |
| `Card`           | **Bloque 3 (Servicios)**                                  | Forma base (superficie + borde decorativo + radio `lg` + padding `lg`, **sin sombra**), y variantes `--pricing` (bloque 6) y `--media` (diferida a **P-07**). Anatomía de SPEC-02 §7.2    |
| `Badge`          | **Bloque 6 (Tarifas)**                                    | Etiqueta textual "Recomendado". Radio `pill`, `--gf-text-xs`, fondo y texto según tokens de la polaridad                                                                                  |




### 14.3 ⛔ No se crean


| Componente                                                                       | Motivo                                                                                                                                                                         |
| -------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `ServiceCard`, `TrainerCard`, `PricingCard`                                      | SPEC-02 §5.4 los deja **diferidos**: se resuelven como `Card` + variantes/modificadores. Solo se separarían si una variante necesitara **lógica propia** (H-15)                |
| `GalleryItem`                                                                    | SPEC-02 §5.3 lo justifica como "imagen clicable que abre el visor". **Sin visor (H-09), no se necesita**: la galería se compone con `.gf-grid` + `figure`/`img` (ver **C-08**) |
| `Hero` como componente reutilizable                                              | Ya existe como bloque de página en `src/pages/Home/`. No se mueve a `components/` (H-01)                                                                                       |
| `Container`, `Grid`, `Stack`, `Box`, `Divider`, `Modal`, `Carousel`, `Accordion` | Prohibidos por SPEC-02 §5.2 y §5.5 (el layout son clases CSS)                                                                                                                  |
| Cualquier componente de formulario, reserva, pago, socio o cuenta                | Fuera de alcance (SPEC-01 §2.2)                                                                                                                                                |




### 14.4 Necesidad detectada para el futuro (no se implementa ahora)

Si alguna página futura coloca **tarjetas sobre una sección clara**, aparecerá
una necesidad real: un **ámbito de tokens de polaridad oscura reutilizable** que
pueda aplicarse a una superficie (tarjeta oscura dentro de sección clara) sin
duplicar los valores de `:root`. Hoy `theme.css` solo redefine tokens **hacia
claro** (`.gf-section--light`). **En la Home no hace falta** (H-05), pero se deja
registrado para no descubrirlo a mitad de otra implementación.

---



## 15. Datos

**Regla (H-17):** el contenido de la Home vive en **un solo archivo por página**
(`src/data/home.ts`) y **no** en una carpeta con un archivo por sección. Lo global
(navegación) sigue en `src/data/navigation.ts`. Nada de jerarquías de datos
complejas (SPEC-02 §5.6.6, SPEC-01 **R-07**).

### 15.1 Estructura propuesta para `src/data/home.ts`


| Export              | Tipo                                                                             | Se usa en | Estado del contenido               |
| ------------------- | -------------------------------------------------------------------------------- | --------- | ---------------------------------- |
| `HERO_CONTENT`      | `{ title, lead, devNote }`                                                       | Bloque 1  | ✅ ya existe · **provisional**      |
| `BENEFITS`          | `{ title, description }[]` (4)                                                   | Bloque 2  | 🟡 **provisional**                 |
| `FEATURED_SERVICES` | `{ title, description }[]` (3)                                                   | Bloque 3  | 🟡 **provisional**                 |
| `TRAINERS`          | `{ name: string | null, specialty, description }[]` (3)                          | Bloque 4  | 🟡 **provisional** (`name: null`)  |
| `GALLERY`           | `{ src, alt }[]` (6)                                                             | Bloque 5  | 🔴 **vacío** hasta P-07            |
| `FEATURED_PLANS`    | `{ name, price: string | null, features: string[], recommended: boolean }[]` (3) | Bloque 6  | 🟡 **provisional** (`price: null`) |
| `LOCATION`          | `{ address, zone, hours, directionsUrl }` (todo `null`)                          | Bloque 7  | 🔴 **vacío** hasta P-06/P-05       |
| `FINAL_CTA`         | `{ title, text }`                                                                | Bloque 8  | 🟡 **provisional**                 |




### 15.2 Marcado del contenido provisional (H-18)

Todo dato no real debe quedar **claramente marcado** como **PROVISIONAL DE
DESARROLLO**, en dos niveles:

1. **En el código**: JSDoc `/** COPY PROVISIONAL DE DESARROLLO */` sobre cada
  export provisional, indicando qué SPEC/`P-xx` lo resolverá.
2. **En el marcado**: los bloques cuyo contenido sea provisional llevan
  `data-provisional="true"` en su `<section>`. Es invisible al usuario, se puede
   auditar en una prueba automática y se retira al llegar el contenido real.
3. **Aviso visible**: se mantiene **solo uno**, el del Hero (`devNote`). ⛔ No se
  repite en cada bloque: ocho avisos convertirían la página en un borrador.

⛔ Prohibido inventar datos que se presenten como reales: precios con cifras,
direcciones, teléfonos, correos, nombres de personas, cifras de socios o de años
de experiencia.

---



## 16. Accesibilidad de la Home

Además de lo ya aprobado en SPEC-01 §8 y SPEC-02 §10, la Home cumple:


| #   | Criterio                                                                                                                                                                                    |
| --- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1   | **Un único** `h1` (Hero) y jerarquía correcta: `h2` por bloque, `h3` por elemento; sin saltar niveles                                                                                       |
| 2   | Cada `<section>` lleva `aria-labelledby` apuntando al `id` de su `h2` (lo aporta `SectionHeading`)                                                                                          |
| 3   | Las anclas `#entrenadores`, `#galeria` y `#ubicacion` existen y son alcanzables (§2.4)                                                                                                      |
| 4   | **Botones vs enlaces**: una CTA que **navega** es un `<a>`; una que **actúa** es un `<button>`. El componente `Button` ya lo resuelve por presencia de `href`                               |
| 5   | **⛔ Ninguna CTA rota**: ningún enlace apunta a `"#"` ni a una URL no ratificada. Las CTA con destino pendiente se renderizan **deshabilitadas** o **no se renderizan** (H-19)               |
| 6   | **Foco visible** en todo elemento interactivo (anillo de 2 px con 2 px de separación, token por polaridad)                                                                                  |
| 7   | **Navegación por teclado** completa; el menú móvil se abre y cierra con teclado y con `Escape`, devolviendo el foco (SPEC-02 §3.4)                                                          |
| 8   | **Contraste** siempre salido de tokens: nunca amarillo como texto sobre fondo claro, nunca texto blanco sobre claro, nunca `#A3A3A3` sobre claro                                            |
| 9   | `prefers-reduced-motion`: la Home **no añade animaciones**; las únicas transiciones son las de los componentes ya definidos (que ya lo respetan)                                            |
| 10  | **Ningún estado se comunica solo por color**: el plan recomendado lleva `Badge` textual + posición, no solo acento                                                                          |
| 11  | **Imágenes**: `alt` descriptivo (informativas) o `alt=""` (decorativas); ⛔ nunca `alt` vacío en una imagen informativa; reserva de espacio con `aspect-ratio` para no provocar saltos (CLS) |
| 12  | **Semántica HTML**: `section` + `h2`, `ul`/`li` donde haya listas (beneficios, características de un plan) y `figure`/`figcaption` si la galería necesita pies                              |
| 13  | **Tamaño mínimo de interacción** 44 × 44 px en todos los controles                                                                                                                          |
| 14  | **Zoom al 200 %** sin pérdida de contenido; sin alturas fijas en contenedores de texto                                                                                                      |


---



## 17. SEO de contenido (⛔ sin SEO técnico)

El SEO técnico sigue pendiente (**P-10**): ⛔ no se implementan `title` por
página, metadatos, Open Graph, canónicas, sitemap ni datos estructurados en este
alcance. Lo que **sí** se define aquí es el contenido:


| Aspecto                      | Definición                                                                                                                                    |
| ---------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| **Intención del** `h1`       | Explicar en una frase qué ofrece el gimnasio. ⛔ No es el nombre de marca ni un lema vacío                                                     |
| **Estructura de headings**   | Un `h2` por bloque, con nombres claros de la sección (Beneficios, Servicios, Entrenadores, Galería, Tarifas, Ubicación)                       |
| **Contenido descriptivo**    | Cada bloque debe poder entenderse **sin ver las imágenes** (SPEC-02 §8.1.9)                                                                   |
| **Relación entre secciones** | Orden narrativo: qué es → por qué → qué ofrece → quién → prueba visual → cuánto → dónde → actuar                                              |
| **Enlazado interno**         | Las CTA de sección enlazan a las páginas internas mediante las **URLs ratificadas** (§23.1). Es lo que distribuye relevancia (SPEC-01 §9.5.6) |
| ⛔ **No**                     | No hay texto oculto, ni `h1` repetidos, ni bloques de palabras clave, ni contenido duplicado con `/servicios` o `/tarifas` (**R-03**)         |


---



## 18. Estados y ausencia de datos

Regla general: **la Home debe poder desarrollarse sin datos reales sin quedar
rota, y sin inventar información del negocio.**


| Si falta…                                                      | Qué ocurre                                                                                                                                                                                                                                  | Se resuelve con                    |
| -------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------- |
| **Imágenes** (galería, fotos de entrenadores, imagen del Hero) | La **Galería no se implementa**. El Hero y los Entrenadores funcionan **sin media**. ⛔ No se usan placeholders ni imágenes de stock (SPEC-02 §8.5.3)                                                                                        | **P-07**                           |
| **Nombres y datos de entrenadores**                            | Se muestra la **especialidad como título** y no se renderiza ningún nombre. ⛔ No se inventan personas                                                                                                                                       | **P-06**                           |
| **Precios**                                                    | El precio se renderiza como **texto de placeholder identificable**, nunca como cifra. Las características y el CTA funcionan                                                                                                                | **P-06**                           |
| **Dirección y contacto**                                       | El bloque **Ubicación no se implementa** (todo su contenido es dato del negocio)                                                                                                                                                            | **P-06** (+ **P-05** para el mapa) |
| **Clases y servicios definitivos**                             | Servicios y Tarifas se implementan con **copy provisional marcado** (`data-provisional`), suficiente para validar estructura                                                                                                                | **P-06**                           |
| **Copy definitivo**                                            | Todo el texto provisional va marcado como **PROVISIONAL DE DESARROLLO** (§15.2)                                                                                                                                                             | **P-06**                           |
| **Fuentes WOFF2**                                              | Se usan los **fallbacks aprobados**; no se declara `@font-face` sin archivos                                                                                                                                                                | **P-13**                           |
| **Destino de una CTA**                                         | La CTA **no se convierte en una navegación inventada**: se renderiza deshabilitada o no se renderiza (H-19). Las **URLs internas ya están ratificadas** (§23.1), así que el único destino que sigue pendiente es el de "Conoce el gimnasio" | **P-11**                           |


---



## 19. CTAs de la Home


| Sección                       | Texto                                              | Tipo            | Destino                                                 | Estado                                                           |
| ----------------------------- | -------------------------------------------------- | --------------- | ------------------------------------------------------- | ---------------------------------------------------------------- |
| Header (global)               | Únete ahora                                        | primaria        | `/contacto`                                             | ✅ **aprobado** (P-02) · implementado                             |
| 1. Hero                       | Únete ahora                                        | primaria `lg`   | `/contacto`                                             | ✅ **aprobado** · implementado                                    |
| 1. Hero                       | Conoce el gimnasio                                 | secundaria `lg` | —                                                       | 🟡 **destino pendiente** (P-11) · implementado **deshabilitado** |
| 3. Servicios                  | Ver todos los servicios                            | secundaria      | `/servicios`                                            | ✅ **ratificado** (SPEC-01 §9.4; P-18 cerrada)                    |
| 6. Tarifas (plan recomendado) | Únete ahora                                        | primaria        | `/contacto`                                             | ✅ **aprobado**                                                   |
| 6. Tarifas (otros planes)     | Únete ahora                                        | secundaria      | `/contacto`                                             | ✅ **aprobado**                                                   |
| 6. Tarifas (bloque)           | Ver todas las tarifas                              | secundaria      | `/tarifas`                                              | ✅ **ratificado** (SPEC-01 §9.4; P-18 cerrada)                    |
| 7. Ubicación                  | Cómo llegar                                        | secundaria      | app de mapas / mapa                                     | 🟡 **pendiente** (P-05)                                          |
| 8. CTA final                  | Únete ahora                                        | primaria `lg`   | `/contacto`                                             | ✅ **aprobado**                                                   |
| Nav (global)                  | Inicio · Nosotros · Servicios · Tarifas · Contacto | enlaces         | `/`, `/nosotros`, `/servicios`, `/tarifas`, `/contacto` | ✅ **URLs ratificadas** (P-18 cerrada) · ya implementado          |


**Reglas de CTAs (H-19):**

1. ⛔ **No se inventa ninguna ruta.** Las únicas rutas del proyecto son las
  **ratificadas** en §23.1: `/`, `/nosotros`, `/servicios`, `/tarifas` y
   `/contacto`.
2. Una CTA cuyo destino **no esté ratificado** se renderiza **deshabilitada** (o
  no se renderiza) y **nunca** apunta a una URL inventada ni a `"#"`. Hoy el
   único caso que queda es el CTA secundario del Hero (**P-11**).
3. **Un solo CTA primario por sección** (SPEC-01 §6.4.1).
4. El texto y el destino del CTA principal **"Únete ahora" →** `/contacto` son
  **coherentes en toda la web** (SPEC-01 §6.4.5).

> **Nota de coherencia (C-06, resuelta):** el nav global ya enlazaba a
> `/nosotros`, `/servicios` y `/tarifas` desde el Bloque 1. Con la ratificación
> de **P-18** (§23.1), el nav y los CTAs de sección usan **las mismas URLs
> oficiales** y la incoherencia desaparece.

---



## 20. Reparto propuesto en bloques de implementación

El **orden de la página** es fijo (§2.1). El **orden de implementación** puede
diferir cuando un bloque está bloqueado por datos externos.


| Bloque       | Contenido            | Requisitos previos                                    | Estado                            |
| ------------ | -------------------- | ----------------------------------------------------- | --------------------------------- |
| **Bloque 3** | Beneficios           | Implementar `SectionHeading`                          | 🟢 listo para implementar         |
| **Bloque 4** | Servicios destacados | Implementar `Card`                                    | 🟢 listo para implementar         |
| **Bloque 5** | Entrenadores         | `Card`; ancla `#entrenadores`                         | 🟢 listo (sin fotos, sin nombres) |
| **Bloque 6** | Tarifas destacadas   | Implementar `Badge` y `Card --pricing`                | 🟢 listo (precio placeholder)     |
| **Bloque 7** | CTA final            | `SectionHeading`                                      | 🟢 listo                          |
| **Bloque 8** | Galería              | **Assets reales (P-07)**                              | 🔴 **bloqueado**                  |
| **Bloque 9** | Ubicación            | **Datos reales (P-06)** y **formato del mapa (P-05)** | 🔴 **bloqueado**                  |


⛔ Cada bloque implementa **solo** su sección: no adelanta contenido de las
siguientes ni de otras páginas.

---



## 21. Criterios de aceptación

Se verifican **al cerrar la implementación completa de la Home**, no bloque por
bloque (salvo los marcados como verificables por bloque).

### 21.1 Estructura y orden

- [ ] La Home renderiza los 8 bloques **en el orden aprobado** (§2.1).
- [ ] Existe **un único** `h1` en la página, en el Hero.
- [ ] Cada bloque de contenido (2–8) tiene **un** `h2`; ningún nivel se salta.
- [ ] Existen las anclas `#entrenadores`, `#galeria` y `#ubicacion`.
- [ ] Las URLs internas usadas son **exactamente** las ratificadas en §23.1 (`/`, `/nosotros`, `/servicios`, `/tarifas`, `/contacto`).
- [ ] No se han añadido bloques no especificados.



### 21.2 Polaridad y estética

- [ ] Cada bloque usa la **polaridad definida** en §12.
- [ ] **Ninguna sección clara es consecutiva** y hay **como máximo 2**.
- [ ] Cabecera, Hero, CTA final y Footer son **oscuros**.
- [ ] ⛔ **No hay degradados** entre bandas ni colores fuera de los tokens.
- [ ] ⛔ **No hay tarjetas dentro de secciones claras** y ninguna CTA primaria
  ```
  amarilla sobre fondo claro.
  ```
- [ ] Las tarjetas usan **superficie + borde**, sin sombras (salvo el caso
  ```
  flotante permitido).
  ```



### 21.3 Responsive

- [ ] La implementación es **mobile-first**.
- [ ] Solo se usan los breakpoints **768 px** y **1024 px**.
- [ ] Los repartos de columnas coinciden con la tabla de §13.
- [ ] No hay **desplazamiento horizontal** a 320 px de ancho.
- [ ] El **CTA principal del Hero** es visible sin scroll en 360 × 640.



### 21.4 CTAs

- [ ] El CTA principal dice **"Únete ahora"** y apunta a `/contacto` en Hero,
  ```
  Tarifas y CTA final.
  ```
- [ ] ⛔ **Ninguna CTA apunta a** `"#"` ni a una URL inventada.
- [ ] Las CTA con destino pendiente están **deshabilitadas o no renderizadas**.
- [ ] Hay **un solo CTA primario por sección**.



### 21.5 Accesibilidad

- [ ] Cada `<section>` está asociada a su `h2` con `aria-labelledby`.
- [ ] Todos los controles son alcanzables y operables **por teclado**.
- [ ] El **foco es visible** en todos los elementos interactivos.
- [ ] Los contrastes se cumplen en ambas polaridades (según tokens).
- [ ] Las imágenes llevan `alt` correcto (o `alt=""` si son decorativas).
- [ ] ⛔ No hay ningún estado comunicado **solo por color**.
- [ ] ⛔ Ninguna información depende de una animación.



### 21.6 Datos y contenido

- [ ] Los datos de la Home viven en `src/data/home.ts` (§15).
- [ ] Todo contenido no real está marcado como **PROVISIONAL DE DESARROLLO**
  ```
  (JSDoc + `data-provisional`).
  ```
- [ ] ⛔ **No hay precios, direcciones, teléfonos, correos ni nombres de personas
  ```
  inventados.**
  ```
- [ ] La Home funciona **sin assets reales**.
- [ ] ⛔ No se ha añadido ningún dato de negocio que no esté en las SPEC.



### 21.7 Prohibiciones de alcance

- [ ] ⛔ No hay reservas, plazas, aforo ni disponibilidad.
- [ ] ⛔ No hay pagos, compra, suscripción ni alta de socio.
- [ ] ⛔ No hay usuarios, cuentas, login ni roles.
- [ ] ⛔ No hay backend, API ni base de datos.
- [ ] ⛔ No hay panel de administración.
- [ ] ⛔ No se ha instalado React Router ni ningún router propio.
- [ ] ⛔ No se han añadido dependencias, fuentes ni imágenes externas.

---



## 22. Decisiones cerradas por SPEC-03

> Estas decisiones se **ratifican al aprobar SPEC-03**. Cierran puntos que
> estaban abiertos en SPEC-01/SPEC-02 o que la implementación necesitaría tomar
> por su cuenta.
>
> La **pasada de cierre documental** del 2026-09-10 ha cerrado además **P-18**
> (ratificación de las URLs internas — **§23.1**) y ha resuelto o aclarado las
> seis contradicciones **C-04 … C-09** (**§24**). Los `H-01`**…**`H-19` **no han
> cambiado**.


| ID       | Decisión                                                                                                                                                                                                                             | Motivo / referencia                                                                                                                             |
| -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| **H-01** | **Orden y composición**: los 8 bloques en el orden aprobado, cada uno como `<section class="gf-section">` con el contenedor común y el ritmo vertical estándar. El Hero permanece en `src/pages/Home/` (no pasa a `components/`)     | SPEC-01 §4.1 · SPEC-02 §4.4.1                                                                                                                   |
| **H-02** | **Headings**: 1 `h1` (Hero) + 1 `h2` por bloque 2–8 + `h3` por elemento. Sin `h4`+                                                                                                                                                   | SPEC-01 §8.5 · aclara **C-09**                                                                                                                  |
| **H-03** | **Anclas obligatorias** en la Home: `#entrenadores`, `#galeria`, `#ubicacion`, con el `id` en el `<section>`                                                                                                                         | SPEC-01 §3.1 y §4.2                                                                                                                             |
| **H-04** | **Polaridad**: solo **Beneficios** y **Galería** son claras; el resto oscuras, alternando `#050505`/`#111111`; la secuencia no deja dos claras juntas                                                                                | SPEC-02 §2.1.3 y §15.1 (decisión 6) · cierra para la Home una decisión que estaba delegada                                                      |
| **H-05** | **Sin tarjetas dentro de secciones claras** en la Home ⇒ la elección A/B de SPEC-02 §7.3 **no se ejerce** y no se necesita ámbito de tokens invertido                                                                                | SPEC-02 §7.3 · cierra ese pendiente para la Home                                                                                                |
| **H-06** | **Beneficios**: 4 elementos, **sin iconos**, **sin** `Card`, con regla superior decorativa; **sin CTA**                                                                                                                              | SPEC-02 §5.5, §9.4.2 y §6.4.1 · ver **C-07** y **C-08**                                                                                         |
| **H-07** | **Servicios**: 3 destacados con `Card` **base sin media**; CTA de sección "Ver todos los servicios" en variante **secundaria**                                                                                                       | SPEC-02 §7.2 y §7.4 · SPEC-01 §3.4.2                                                                                                            |
| **H-08** | **Entrenadores**: 3 perfiles, **sin nombres inventados** (rol como título mientras `name` sea `null`), **sin fotos** hasta P-07, **sin CTA**, con ancla                                                                              | §6 · SPEC-02 §8.2                                                                                                                               |
| **H-09** | **Galería sin visor ampliado**: 6 imágenes, rejilla uniforme, sin interacción y sin CTA                                                                                                                                              | SPEC-02 §8.4 (el visor era condicional) · ver **C-08**                                                                                          |
| **H-10** | **Tarifas**: 3 planes; **precio como placeholder** (nunca cifra inventada); recomendado con `Badge` + borde + posición; **un solo CTA primario** (el del recomendado); CTA de sección "Ver todas las tarifas" secundaria             | SPEC-02 §4.3.3, §7.6 y §10.3 · SPEC-01 §6.4.1 · cierra el pendiente de "indicador del plan recomendado"                                         |
| **H-11** | **Ubicación bloqueada** hasta P-06 (y P-05 para el mapa): ⛔ no se inventa dirección ni se integra mapa                                                                                                                               | §9 · §18                                                                                                                                        |
| **H-12** | **CTA final**: `h2` + texto + **un único** CTA primario "Únete ahora" → `/contacto`, oscuro, una columna en todos los tamaños                                                                                                        | SPEC-01 §6.4 · SPEC-02 §15.1 (decisión 5)                                                                                                       |
| **H-13** | **Los CTA no van en mayúsculas.** Se mantiene el uso actual, que ya está implementado                                                                                                                                                | Cierra el pendiente tipográfico de SPEC-02 §2.2.8 y §11.2 · **reversible** con aprobación explícita (es un cambio de una línea en `Button.css`) |
| **H-14** | **Sin CTA fija en móvil**: la sugerencia **S-02** sigue sin aprobar y **no se implementa**                                                                                                                                           | SPEC-01 §11.4                                                                                                                                   |
| **H-15** | ⛔ **No se crean** `ServiceCard`, `TrainerCard` ni `PricingCard`: se usan `Card` + variantes                                                                                                                                          | SPEC-02 §5.4                                                                                                                                    |
| **H-16** | El `Icon` **no se amplía** en este alcance: sigue con `menu` y `close`. Los iconos genéricos de interfaz (ubicación, reloj, teléfono) se añadirán solo si Ubicación los necesita                                                     | SPEC-02 §8.6                                                                                                                                    |
| **H-17** | **Datos**: un único `src/data/home.ts` por página, con tipos declarados; `navigation.ts` sigue siendo global                                                                                                                         | SPEC-02 §5.6.6 · SPEC-01 **R-07**                                                                                                               |
| **H-18** | **Marcado de lo provisional**: JSDoc en los datos + `data-provisional="true"` en la sección; **un solo aviso visible**, el del Hero                                                                                                  | §15.2                                                                                                                                           |
| **H-19** | **CTAs sin destino ratificado** no se implementan como enlaces: se renderizan deshabilitadas o no se renderizan. ⛔ Nunca `"#"` ni URL inventada. `SectionHeading` no usa el slot de enlace: la CTA de sección va al final del bloque | SPEC-01 §6.4 · aplica el criterio ya usado en el Bloque 2                                                                                       |


---



## 23. Decisiones pendientes



### 23.1 Cerrado en esta pasada ✅


| ID       | Decisión                                                                                                                                                                      | Estado                     |
| -------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------- |
| **P-18** | **Estructura de URLs ratificada** como oficial del proyecto: `/` → Inicio · `/nosotros` → Nosotros · `/servicios` → Servicios · `/tarifas` → Tarifas · `/contacto` → Contacto | ✅ **CERRADA** (2026-09-10) |


**Alcance exacto de la ratificación:**


| Ruta         | Página    |
| ------------ | --------- |
| `/`          | Inicio    |
| `/nosotros`  | Nosotros  |
| `/servicios` | Servicios |
| `/tarifas`   | Tarifas   |
| `/contacto`  | Contacto  |


- Las cinco rutas quedan **ratificadas como URLs oficiales del proyecto** y
forman parte de su **arquitectura aprobada**.
- ⛔ Esto **no implementa routing**: **React Router sigue pendiente** de su bloque
correspondiente (**P-01**) y sigue sin instalarse. Tampoco se crea un router
propio ni se simula navegación con `window.location`.
- ⛔ No convierte las rutas en páginas funcionales hoy: cada página se
implementará en su bloque.
- **Efecto inmediato:** desbloquea los CTAs de sección de Servicios y Tarifas y
elimina la incoherencia con el nav global (**C-06**, resuelta).
- **Sincronización documental:** ✅ **hecha** — SPEC-01 §9.4, §3.1, §5.5, §11.2 (**R-06**) y §11.5 se han actualizado para reflejar esta ratificación (**C-10 RESUELTA**). SPEC-01 mantiene **P-01** abierta y acotada al routing.



### 23.2 Pendientes que siguen abiertos

Solo los que **no** se pueden cerrar sin datos, assets o información externa.


| ID       | Afecta a                    | Efecto en la Home                                                                                    |
| -------- | --------------------------- | ---------------------------------------------------------------------------------------------------- |
| **P-04** | Footer                      | Enlaces legales (aviso legal, privacidad, cookies)                                                   |
| **P-05** | Ubicación                   | Formato del "cómo llegar" (enlace externo vs mapa incrustado)                                        |
| **P-06** | **Todos los bloques**       | Copy definitivo, dirección, contacto, precios (y criterio de IVA), datos de entrenadores y servicios |
| **P-07** | Galería, Entrenadores, Hero | Assets reales y sus textos alternativos; consentimiento de personas identificables                   |
| **P-09** | Ubicación                   | Horario de atención y horarios de clases                                                             |
| **P-10** | Página completa             | SEO técnico (title, metadatos, Open Graph, canónicas, sitemap, datos estructurados)                  |
| **P-11** | Hero                        | Destino del CTA secundario "Conoce el gimnasio"                                                      |
| **P-13** | Página completa             | Incorporación física de los WOFF2                                                                    |
| **S-02** | Home                        | CTA fija en móvil: **sin aprobar**, no se implementa (H-14)                                          |


**No se ha abierto ninguna decisión pendiente nueva** en esta pasada: los nueve
puntos anteriores ya existían antes de SPEC-03 y son herencia de SPEC-01/SPEC-02.

---



## 24. Contradicciones

> Las seis contradicciones detectadas en la primera redacción quedan
> **resueltas o aclaradas** en la pasada de cierre documental del 2026-09-10. Se
> conserva el detalle de cada una para trazabilidad y se añade la única
> contradicción nueva detectada al revisar `H-01`…`H-19`.



### 24.1 Contradicciones resueltas ✅



#### C-04 — No existía ningún documento `SPEC-00` ✅ RESUELTA

- **Dónde estaba:** `docs/specs/`. El índice registraba SPEC-00 como "Base
técnica del proyecto (DONE ✅)" pero **no había archivo** `SPEC-00-*.md`: su
contenido vivía resumido dentro de `README.md`.
- **Conflicto:** el índice declaraba terminada una SPEC que no existía
físicamente, y SPEC-03 la necesitaba como dependencia.
- **Resolución (aplicada):** se ha creado
`docs/specs/SPEC-00-base-tecnica.md` como **reconstrucción documental**, a
partir únicamente de información ya aprobada (índice, SPEC-01, SPEC-02 y
verificación del repositorio). **No introduce ninguna decisión nueva** y marca
explícitamente su naturaleza de reconstrucción.
- **Verificación:** el índice ya enlaza un archivo real; el problema desaparece.



### 24.2 Aclaración (no era una contradicción de SPEC-03) ✅



#### C-05 — `SectionHeading`, `Card` y `Badge`: aprobados, implementación pendiente ✅ ACLARADA

- **Dónde:** SPEC-02 §5.3 y §7 los aprueba; `src/components/` contiene solo
`Button`, `Footer`, `Header`, `Icon`, `Nav` y `SkipLink`.
- **Aclaración (queda fijada así):**
  1. `SectionHeading` → **aprobado**, **implementación pendiente**.
  2. `Card` (con sus variantes) → **aprobado**, **implementación pendiente**.
  3. `Badge` → **aprobado**, **implementación pendiente**.
  4. ⛔ **No se implementan** como parte del cierre de SPEC-03.
  5. Se implementarán **cuando un bloque de implementación los necesite**:
    `SectionHeading` en el Bloque 3, `Card` en el Bloque 4 y `Badge` en el
     Bloque 6 (§14.2 y §20).
- **Conclusión:** **no es una contradicción de SPEC-03**, sino una diferencia
entre lo aprobado y lo implementado, ya planificada.



#### C-06 — El nav enlazaba a URLs no ratificadas ✅ RESUELTA

- **Dónde estaba:** `src/data/navigation.ts` (Bloque 1) ya usaba `/nosotros`,
`/servicios` y `/tarifas`, mientras SPEC-01 §9.4 las marcaba como propuestas y
solo `/contacto` estaba fijada (P-02). Si SPEC-03 hubiera bloqueado los CTAs de
sección, el nav navegaría y las secciones no: incoherencia real.
- **Resolución (aplicada):** **P-18 ratificada** (§23.1). Las cinco rutas son
ahora **URLs oficiales**, así que el nav y los CTAs de sección usan las mismas.
- **Verificación:** en §19 todos los destinos internos figuran como ✅
ratificados y el único destino pendiente es el del CTA secundario del Hero
(**P-11**).



#### C-07 — `Card --icon` frente a la prohibición de inventar iconos ✅ CERRADA

- **Dónde:** SPEC-02 §7.4 ("`--icon`: Servicios sin foto → la media se sustituye
por un icono") frente a SPEC-02 §5.5 ("inventar un icono por servicio es
contenido no aprobado").
- **Cierre documental (queda fijado así):**
  1. La variante `Card --icon` **no obliga** a usar iconos.
  2. `Card` **puede utilizarse sin icono** (su forma base), y así se usa en
    Servicios (**H-07**).
  3. ⛔ Los servicios **no reciben iconos inventados** solo para rellenar la
    tarjeta.
  4. Los iconos se utilizarán **únicamente cuando exista una función semántica o
    de interfaz justificada** (por ejemplo, los genéricos de contacto y
     ubicación que SPEC-02 §5.5 sí permite).
  5. `Icon` sigue siendo el componente aprobado en **P-17**.
  6. ⛔ **No se añade ninguna librería de iconos.**
- **Aplicado en:** §5 (fila "Iconos") y §14.
- **Nota:** **no se ha modificado SPEC-02**; la aclaración vive en SPEC-03.



#### C-08 — `GalleryItem` presupone un visor que no se implementa ✅ CERRADA

- **Dónde:** SPEC-02 §5.3 describe `GalleryItem` como "imagen clicable que abre el
visor"; SPEC-02 §8.4 trata el visor como **condicional** ("si se abre un visor
ampliado…").
- **Cierre documental (queda fijado así):** `GalleryItem` **NO es obligatorio**.
Como la galería de la Home **no tiene visor, no tiene interacción y es una
rejilla uniforme de imágenes**, se implementará directamente con `.gf-grid` +
`figure` + `img` (o una composición equivalente sencilla). ⛔ **No se crea un
componente solo para cumplir una abstracción** (criterio de SPEC-02 §5.1).
- **Aplicado en:** §7 y §14.3 (H-09 y H-16).
- **Nota:** el componente sigue **aprobado** en SPEC-02 y disponible si alguna vez
se aprueba un visor; simplemente **no se implementa**.



#### C-09 — Jerarquía de headings: "8 secciones `h2`" frente al `h1` del Hero ✅ CERRADA

- **Dónde:** SPEC-02 §8.5.4 ("las 8 secciones de contenido se estructuran como
`<h2>`…") frente a SPEC-01 §4.1, que listaba **9** bloques porque contaba el
Footer como sección 9 (reclasificado como global por **R-01**).
- **Cierre documental:** la jerarquía de la Home queda fijada en **1** `h1` **+ 7**
`h2`:

  | Nivel | Bloque                        |
  | ----- | ----------------------------- |
  | `h1`  | Hero                          |
  | `h2`  | Beneficios                    |
  | `h2`  | Servicios y clases destacadas |
  | `h2`  | Entrenadores                  |
  | `h2`  | Galería                       |
  | `h2`  | Tarifas destacadas            |
  | `h2`  | Ubicación                     |
  | `h2`  | CTA final                     |

- El **Footer es global** y **no cuenta** como sección de contenido de la Home.
- **Aplicado en:** §2.3 (H-02). ⛔ No cambia el Hero implementado: ya tiene el
único `h1`.



### 24.3 Nuevas contradicciones detectadas al revisar `H-01`…`H-19`



#### C-10 — SPEC-01 §9.4 y R-06 quedaban desactualizados tras ratificar P-18 ✅ RESUELTA

- **Dónde estaba:** `docs/specs/SPEC-01-alcance-estructura.md` §9.4 marcaba las
  URLs como **🟡 propuestas** y §11.2 mantenía **R-06** ("la estructura de URLs
  debe congelarse antes de implementar") como riesgo **abierto**. Tras ratificar
  **P-18** (§23.1), ambas afirmaciones quedaban desactualizadas.
- **Conflicto:** SPEC-01 decía "propuesta" y SPEC-03 "ratificada" sobre las
  mismas rutas.
- **✅ Resolución (aplicada el 2026-09-10):** sincronización documental de
  **SPEC-01**, **sin tocar ninguna otra decisión**:
  1. **§9.4** — las cinco rutas pasan a ser **URLs oficiales y ratificadas** y se
     declaran **congeladas**; se añade el punto explícito de que **ratificar las
     URLs no implementa el routing**.
  2. **§3.1** — el mapa del sitio deja de marcar cada URL como "🟡 propuesta".
  3. **§5.5** — las decisiones de navegación reflejan que las URLs **ya no están
     pendientes**; solo lo está su implementación.
  4. **§11.2 — R-06 cerrado**: queda resuelto mediante P-18.
  5. **§11.3 — P-01 acotada**: sigue **pendiente** y ya **solo** cubre el routing
     (⛔ React Router sin instalar).
  6. **§11.5** — R-06 se traslada a "aprobados y cerrados".
- **Verificación:** no queda ninguna referencia a las URLs como propuestas en
  SPEC-01 y **no hay ninguna contradicción nueva** relacionada con las URLs.



### 24.4 Conclusión


| Estado                                             | Contradicciones                                               |
| -------------------------------------------------- | ------------------------------------------------------------- |
| **Resueltas**                                      | `C-04`, `C-06`, `C-07`, `C-08`, `C-09`, **`C-10`**            |
| **Aclaradas** (no eran contradicciones de SPEC-03) | `C-05`                                                        |
| **Nuevas**                                         | Ninguna                                                       |
| **Pendientes que bloqueen la implementación**      | **Ninguna**                                                   |


**No se ha detectado ninguna otra contradicción** al revisar `H-01`…`H-19`
contra SPEC-00, SPEC-01, SPEC-02 y el código implementado en los Bloques 1 y 2.

---



## 25. Estado del SPEC


| Aspecto                                 | Valor                                                                                                                                                                               |
| --------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Estado**                              | 🟡 **CERRADA — esperando aprobación** (no autodeclarada aprobada)                                                                                                                   |
| **Decisiones cerradas**                 | 19 (`H-01` … `H-19`) **+** `P-18` cerrada en esta pasada (§23.1)                                                                                                                    |
| **Decisiones pendientes**               | 9 heredadas que afectan a la Home; **ninguna nueva** (§23.2)                                                                                                                        |
| **Contradicciones**                     | 6 detectadas: **todas resueltas** (`C-10` incluida, §24.3) o **aclaradas** (`C-05`, §24.2). **Ninguna pendiente**                                                                   |
| **Sincronización documental**           | ✅ **`C-10` resuelta**: SPEC-01 §9.4, §3.1, §5.5, §11.2 y §11.5 sincronizadas y **R-06 cerrado**. SPEC-01 mantiene **P-01** abierta (solo routing)                                  |
| **Código afectado**                     | **Ninguno**: este documento no ha modificado `src/`, ni dependencias, ni assets                                                                                                     |
| **Siguiente paso**                      | Aprobación de SPEC-03; después, Bloque 3 (Beneficios)                                                                                                                               |


> ⛔ SPEC-03 **no se autodeclara aprobada**. Su aprobación corresponde al
> responsable del proyecto.

---



## 26. Historial de cambios


| Fecha      | Cambio                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 2026-09-10 | Creación inicial de SPEC-03 (página Inicio). Define objetivo, estructura de los 8 bloques, polaridad concreta de la Home, responsive, componentes, datos, accesibilidad, estados sin datos, CTAs, reparto en bloques y criterios de aceptación. Cierra 19 decisiones (`H-01`…`H-19`), abre **P-18** (ratificación de URLs) y detecta 6 contradicciones (`C-04`…`C-09`). Estado: 🟡 En revisión.                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| 2026-09-10 | **Pasada de cierre documental.** Se **ratifica P-18**: `/`, `/nosotros`, `/servicios`, `/tarifas` y `/contacto` quedan como **URLs oficiales** (sin implementar routing: P-01 sigue abierta) y se actualizan todas sus referencias. Se crea `SPEC-00-base-tecnica.md` (reconstrucción documental) y se resuelve **C-04**. Se **aclara C-05** (`SectionHeading`/`Card`/`Badge`: aprobados, implementación pendiente, no es contradicción) y se cierran **C-06** (URLs), **C-07** (`Card --icon` no obliga a usar iconos), **C-08** (`GalleryItem` no obligatorio) y **C-09** (**1** `h1` **+ 7** `h2`, Footer global excluido). Se revisan `H-01`…`H-19` **sin cambios** y se abre **C-10** (sincronización documental de SPEC-01 §9.4 y R-06, que **no se modifica** en esta pasada). Estado: 🟡 **CERRADA — esperando aprobación**. |
| 2026-09-10 | **Cierre de `C-10` (sincronización de SPEC-01).** Se actualiza **SPEC-01** para que las URLs dejen de aparecer como propuestas: **§9.4** (URLs **oficiales y ratificadas**, con el punto explícito de que ratificar no implementa el routing), **§3.1** (mapa del sitio), **§5.5** (navegación) y **§11.5** (resumen). **R-06 cerrado** por quedar resuelto con **P-18**. **P-01 sigue pendiente** y **acotada al routing** (§11.3); ⛔ React Router no está instalado. **No se cambia ninguna otra decisión.** `C-10` pasa a **✅ RESUELTA** (§24.3) y el documento queda **sin contradicciones pendientes**. Estado: 🟡 **CERRADA — esperando aprobación**. |


