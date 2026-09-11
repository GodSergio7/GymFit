# SPECs — Web corporativa GymFit

Registro de especificaciones del proyecto, siguiendo una metodología ligera de
Spec-Driven Development (SDD).

## Flujo de trabajo

```
SPEC → Decisiones → Criterios de aceptación → Implementación → Validación → DONE → Siguiente SPEC
```

Regla del proyecto: **no se implementa nada que no esté previamente especificado
y aprobado.** Si durante una SPEC aparece una decisión que afecta a arquitectura,
diseño o funcionalidad, se detiene el trabajo y se eleva antes de continuar.

## Registro de SPECs

| ID       | Título                                  | Estado          | Documento                                                |
| -------- | --------------------------------------- | --------------- | -------------------------------------------------------- |
| SPEC-00  | Base técnica del proyecto               | **DONE** ✅      | [SPEC-00-base-tecnica.md](./SPEC-00-base-tecnica.md)     |
| SPEC-01  | Alcance y estructura de la web          | **DONE** ✅      | [SPEC-01-alcance-estructura.md](./SPEC-01-alcance-estructura.md) |
| SPEC-02  | Fundaciones de diseño (sistema visual)  | **DONE** ✅      | [SPEC-02-fundaciones-diseno.md](./SPEC-02-fundaciones-diseno.md) |
| SPEC-03  | Página Inicio (`/`)                     | **Cerrada — esperando aprobación** 🟡 | [SPEC-03-home.md](./SPEC-03-home.md)                     |
| SPEC-04+ | Por definir (resto de páginas, routing, SEO técnico, implementación) | **No iniciada** | — |

> **La implementación de la web queda explícitamente diferida a una SPEC
> posterior.** SPEC-00 produjo la base técnica ejecutable; SPEC-01, SPEC-02 y
> SPEC-03 producen únicamente documentación (alcance, diseño y página Inicio,
> respectivamente).

---

## SPEC-00 — Base técnica del proyecto (DONE ✅)

**Documento:** [`SPEC-00-base-tecnica.md`](./SPEC-00-base-tecnica.md) —
**reconstrucción documental** creada el 2026-09-10 para cerrar **C-04**: la SPEC
se ejecutó y se validó, pero **nunca se escribió como archivo** y solo existía
este registro. El documento recoge únicamente información ya aprobada y **no
introduce decisiones nuevas**. El resumen de abajo se conserva como referencia
rápida.

**Objetivo:** disponer de la base técnica mínima ejecutable de React + TypeScript
+ Vite, sin implementar ninguna parte de la web.

**Entregado:**

- Proyecto React 19 + TypeScript 7 + Vite 8 inicializado.
- Estructura mínima: `index.html`, `src/main.tsx`, `src/App.tsx`, `src/App.css`,
  `src/styles/theme.css`, `src/styles/global.css`, `src/vite-env.d.ts`.
- Configuración TypeScript estricta en tres archivos (`tsconfig.json` +
  `tsconfig.app.json` + `tsconfig.node.json`).
- Tokens de la identidad visual aprobada centralizados en `src/styles/theme.css`.
- Pantalla temporal de verificación (no es diseño de la web).
- Dependencias directas: `react`, `react-dom` (runtime) + `vite`,
  `@vitejs/plugin-react`, `typescript`, `@types/react`, `@types/react-dom`,
  `@types/node` (desarrollo). Sin router, sin librería de estilos, sin linter,
  sin testing.

**Validación realizada:** `npm run typecheck` sin errores, `npm run build`
correcto (18 módulos), servidor de desarrollo levantando en
`http://localhost:5173/` con respuesta 200 y transformación correcta de los
módulos, 0 vulnerabilidades.

**Decisión registrada:** la librería de estilos, el routing y el sistema de
componentes **no** se decidieron en SPEC-00 y siguen pendientes.

---

## SPEC-01 — Alcance y estructura de la web (DONE ✅)

**Objetivo:** documentar qué web se va a construir antes de diseñar y
programar: páginas, secciones, navegación, CTAs, requisitos responsive, de
accesibilidad y de SEO.

**Entregado:** `docs/specs/SPEC-01-alcance-estructura.md`, con las 10 secciones
requeridas (objetivo, alcance, arquitectura de información, estructura de
páginas, navegación, CTAs, responsive, accesibilidad, SEO y criterios de
aceptación), más el registro de decisiones y los puntos abiertos.

**Decisiones aprobadas (2026-09-10):**

| ID   | Decisión                                                                 |
| ---- | ------------------------------------------------------------------------ |
| R-01 | Header y footer son **elementos globales**, no secciones exclusivas de Inicio |
| R-02 | Restricciones de contraste (WCAG 2.2 AA) y paleta ampliada con el gris alternativo `#525252` para fondos claros |
| R-08 | **Aplazada**: se mantiene React + TypeScript + Vite; sin prerenderizado ni cambios de stack. La decisión pasa a P-10 |
| P-02 | El CTA principal "Únete ahora" lleva a **`/contacto`**, coherente en toda la web |
| P-03 | **Sin formulario propio** ni servicio externo. `/contacto` muestra teléfono, email, WhatsApp (si hay número real), dirección, horario y enlace para indicaciones |

**Estructura aprobada:** 5 páginas (Inicio, Nosotros, Servicios, Tarifas,
Contacto); Entrenadores, Galería y Ubicación como **secciones de Inicio**;
Ubicación compartida con Contacto; paleta de 5 colores + gris alternativo.

**Integridad verificada al cierre:** no se ha creado ningún componente, página ni
ruta; no se ha implementado navegación; no se ha instalado React Router; no se ha
añadido ninguna dependencia; `src/` permanece sin cambios respecto a SPEC-00.

**Puntos que SPEC-01 deja abiertos** (no resueltos por suposición, para SPECs
posteriores): R-03, R-04, R-06, R-07 y R-05 (solo su parte de anclas); P-01 y
P-04 a P-11; y las sugerencias S-02, S-03 y S-04. **S-01 quedó aprobada e
implementada** en el Bloque 1, y el **menú móvil** y la **cabecera estática**
quedaron decididos en la revisión 2 de SPEC-02. El detalle está en la sección 11
de la SPEC.

---

## SPEC-02 — Fundaciones de diseño (DONE ✅, revisión 2)

> ✅ **Aprobada** el 2026-09-10 y **cerrada en la revisión 2** tras el Bloque 1 de
> implementación. Cubre el sistema visual completo: estrategia de estilos, tokens,
> tipografía, breakpoints, layout, sistema de componentes, botones, cards,
> imágenes, SVG, estética y accesibilidad visual.
> **La revisión 2 es exclusivamente documental: no modificó `src/`.**

**Objetivo:** definir el sistema visual (tokens, tipografía, espaciado, layout,
componentes, botones, cards, imágenes, accesibilidad visual) antes de implementar
nada, de modo que los futuros componentes tengan reglas claras.

**Entregado:** `docs/specs/SPEC-02-fundaciones-diseno.md` — 15 secciones (las 13
requeridas + historial + cierre del Bloque 1).

### Cierre del Bloque 1 — 6 decisiones ratificadas (§15)

| # | Decisión | Contenido |
| - | -------- | --------- |
| 1 | **Estructura de archivos** | `src/components/<ComponentName>/` (con `.tsx` + `.css` co-localizados), `src/data/` para datos tipados y `src/styles/` para estilos globales por capas. Sin carpetas ni capas adicionales sin necesidad |
| 2 | **Tipografía de botones** | Botones de acción → **Barlow Condensed 700**; enlaces textuales → **Inter 600**. Resuelve la contradicción de §2.2.5 |
| 3 | **Menú móvil** | **Panel vertical desplegable bajo la cabecera** (no lateral), con `aria-expanded`, `aria-controls`, cierre con `Escape` devolviendo el foco, sin depender de `hover` y respetando `prefers-reduced-motion` (§3.4). **Pendiente de implementar** |
| 4 | **Componente `Icon`** | **Cierra P-17**: componente reutilizable que centraliza los SVG propios (24×24, trazo 2 px, `currentColor`). Se implementará en un bloque posterior |
| 5 | **Cabecera estática** | **ESTÁTICA**: sin `position: fixed` ni `sticky`. Cierra parcialmente R-05; cambiarlo exigirá una decisión explícita |
| 6 | **Secciones claras** | Se mantiene la regla global; **la asignación concreta se decide por página antes de implementarla**. No se fija ahora ninguna distribución |

**Discrepancias del Bloque 1 (§15.2):** las **9 quedan aceptadas o documentadas**
y **ninguna requiere cambiar el sistema aprobado**. Los tokens de enlace y de
realce en polaridad clara más las constantes geométricas se ratifican como
**tokens auxiliares de implementación** (§2.1.9): **no introducen ningún color
nuevo**. La prevalencia del token sobre el literal `0.06` de §6.3 queda
documentada.

**Verificación de contradicciones (§15.4):** revisadas tipografía, componentes,
responsive, polaridad, iconos, estructura de carpetas, cabecera y botones.
**No queda ninguna contradicción crítica.**

### Decisiones APROBADAS ✅

| ID | Decisión |
| -- | -------- |
| **C-01** | **Resuelta.** "bootstrap simple" **no** era el framework Bootstrap. Se retira el término del vocabulario del proyecto y se sustituye por **"capa base"** |
| **P-12** | **Capa base propia**: reset/base styles + variables CSS + tokens + utilidades mínimas. Sin Bootstrap, sin Tailwind, sin CSS-in-JS, sin librerías de componentes |
| **P-14** | **Iconografía con SVG propios.** Sin librería de iconos. Reglas de construcción (rejilla 24×24, trazo 2 px, `currentColor`), 3 tamaños y reglas de accesibilidad completas |
| **P-15** | **Tema oscuro dominante + secciones claras minoritarias.** `#050505` sigue siendo protagonista; cabecera, Hero, CTA final y footer **siempre oscuros**; 1–2 secciones claras por página, **nunca consecutivas**; sin colores nuevos |
| **P-16** | **Barlow Condensed + Inter.** Barlow en headings (600/700/800); Inter en body, navegación, precios y contenido general (400/500/600). Sin Barlow 900 ni Inter <400 |
| **P-13** | **Tipografías autoalojadas en WOFF2**: subconjunto latino, `font-display: swap`, precarga solo de las críticas, fallback adecuado y medidas contra el CLS. **Los archivos se añaden durante la implementación** |
| — | **Derivados del amarillo**: `#FFD633` (hover) y `#D8AC00` (active), solo como estados; nunca decorativos ni para ampliar la paleta |
| — | **CTA primario**: uso preferente sobre fondos oscuros; en secciones claras se prioriza CTA secundario, enlace o card oscura. No se fuerza el amarillo sobre claro |
| — | **Breakpoints**: móvil `<768`, tablet `768–1023`, desktop `≥1024` px. Sin breakpoints adicionales |
| — | **Layout**: container 1200 px, estrecho 720 px, padding y ritmo vertical fluidos, mobile-first, grids intrínsecos |
| — | **Componentes aprobados**: Header, Footer, Nav, SkipLink, Button, Badge, SectionHeading, Card, GalleryItem. El layout (`Container`, `Grid`, `Stack`…) permanece como **CSS** |
| — | **Cards**: `Card` base con variantes; sin componente independiente por tipo salvo lógica realmente distinta |
| — | **Hero**: se diseña primero sin assets; la imagen se incorpora después sin cambiar la arquitectura |
| **P-17** | **Componente `Icon` APROBADO** (cerrada en la revisión 2): centraliza los SVG propios. Se implementará en un bloque posterior |

### Decisiones que siguen PENDIENTES 🟡

| ID | Pendiente | Quién lo resuelve |
| -- | --------- | ----------------- |
| — | Opción de card en sección clara: A (blanca) o B (oscura), sin mezclar ambas en una página | SPEC de diseño de páginas |
| — | CTA del Hero en mayúsculas | SPEC de diseño de páginas |
| **P-01, P-04–P-11, S-02, S-03** | Heredados de SPEC-01: routing y URLs, páginas legales, mapa, marca y datos reales, assets, idioma, horarios, renderizado/SEO y detalles de CTAs, más las sugerencias S-02 y S-03 sin aprobar | SPECs posteriores |

> **Ninguno de los pendientes impide implementar SPEC-02.** Quedan cerrados en
> esta revisión: **P-17** (`Icon`), la asignación de secciones claras (que pasa a
> decidirse por página), el **menú móvil** y la **cabecera estática**.

### Contenido principal

- **Sistema de estilos:** CSS propio en **dos capas** (primitivos de marca →
  tokens semánticos), con la regla de que ningún componente usa valores
  literales.
- **Tokens:** 6 colores primitivos + **solo 2 derivados** del acento + tokens
  semánticos (fondos, superficie, textos, bordes, estados) para **ambas
  polaridades**. Contrastes **calculados**.
- **Modelo de polaridad (P-15):** el negro enmarca la web (cabecera, pie, Hero y
  CTA final siempre oscuros); las secciones claras son minoría (1–2 por página,
  nunca consecutivas); la polaridad **no añade ningún color nuevo**.
- **Tipografía (P-16):** Barlow Condensed + Inter, con motivos, personalidad,
  6 pesos concretos, escala fluida, tracking y reglas de mayúsculas.
- **Layout:** contenedor a 1200 px, padding fluido, grids intrínsecos
  (`auto-fit`/`minmax`) que reducen la necesidad de breakpoints.
- **Componentes:** análisis explícito de **qué NO debe ser componente** (el
  layout son clases CSS, no componentes React).
- **Botones, cards, imágenes:** 3 tipos de botón con 5 estados, card base con
  variantes, y reglas de `aspect-ratio`/`object-fit` que hacen que la galería
  funcione con fotos de cualquier proporción.

### Hallazgos con datos (no opiniones)

- Un borde blanco al **20 %** de opacidad da **1,71:1** y **falla** el mínimo de
  3:1 de los límites de componentes. El borde funcional se fija al **40 %
  (3,71:1)** en oscuro y al **50 % (3,84:1)** en claro.
- Un anillo de foco **amarillo sobre el botón amarillo** da **1:1**: es
  invisible. En secciones oscuras el foco del CTA usa anillo **blanco**
  (20,38:1); en claras, **negro**, que sirve para todo (20,38:1 sobre el fondo y
  12,40:1 sobre el propio botón amarillo).
- El **relleno amarillo sobre blanco da 1,64:1**: por eso el CTA primario se usa
  **preferentemente sobre fondos oscuros**, y en secciones claras se prioriza el
  CTA secundario, un enlace o una card oscura.
- El **amarillo no puede ser indicador de estado sobre fondo claro** (1,64:1):
  allí se usa `#525252` (7,81:1), peso o subrayado.
- Las **variables CSS no funcionan en media queries**, así que los breakpoints se
  documentan como convención y se escriben literales, con comentario de
  referencia.

### Contradicciones

- **C-01 ✅ RESUELTA:** "bootstrap simple" **no** era el framework Bootstrap.
  Decisión: capa base propia. Sin ambigüedad residual (el término queda retirado
  del vocabulario).
- **C-02 ✅ RESUELTA en el Bloque 1:** la deriva entre los tokens de SPEC-00
  (`--color-*`, radio grande de 16 px, `system-ui`) y los de SPEC-02 (`--gf-*`,
  radio de 12 px, dos familias tipográficas) se reconcilió al implementar: el CSS
  compilado no contiene ningún `--color-`, `--radius-` ni `--font-sans`. Único
  resto: la incorporación física de los WOFF2 (**P-13**). *(Actualizado: el
  índice decía "vigente" mientras SPEC-02 §12.4 ya la daba por resuelta.)*
- **C-03 🟡 vigente:** las propuestas 🟡 de SPEC-01 (orden de secciones de
  Inicio, secciones de las páginas internas, modelo de navegación) **siguen sin
  aprobar**. Cerrar SPEC-02 no las aprueba.

### Integridad verificada

No se ha escrito ningún componente React, no se ha modificado `src/`, no se ha
creado ninguna página, no se ha instalado ninguna dependencia (ni React Router,
ni Tailwind, ni Bootstrap, ni librería de iconos), **no se ha descargado ninguna
fuente** y no se ha generado ningún asset.

---

## SPEC-03 — Página Inicio (CERRADA — ESPERANDO APROBACIÓN 🟡)

> 🟡 **Cerrada documentalmente, pendiente de aprobación humana.** Especifica la
> página `/` completa para poder implementarla por bloques. **No ha producido
> código.** No se autodeclara aprobada: eso corresponde al responsable del
> proyecto.

**Objetivo:** definir la Home de forma suficientemente precisa (contenido,
estructura, polaridad, responsive, componentes, datos y criterios de aceptación)
para no tener que tomar decisiones de diseño o arquitectura durante su
implementación.

**Entregado:** `docs/specs/SPEC-03-home.md` — 26 secciones.

**Cierra 19 decisiones (`H-01`…`H-19`), entre ellas:**

| Tema | Decisión |
| ---- | -------- |
| **Estructura** | Los 8 bloques en el orden aprobado; 1 `h1` (Hero) + 7 `h2`; anclas `#entrenadores`, `#galeria`, `#ubicacion` |
| **Polaridad de la Home** | Solo **Beneficios** y **Galería** son claras (2 de 8 = 25 %, nunca consecutivas, negro 75 %); el resto oscuras alternando `#050505`/`#111111`. Cierra para la Home una decisión que SPEC-02 §15.1 había delegado |
| **Sin tarjetas en secciones claras** | La elección A/B de tarjeta en sección clara (pendiente en SPEC-02 §11.2) **no se ejerce** en la Home ⇒ no hace falta ámbito de tokens invertido |
| **Beneficios** | 4 elementos, sin iconos y sin `Card`, con regla superior decorativa; sin CTA |
| **Servicios** | 3 destacados con `Card` base sin media; CTA secundaria al catálogo |
| **Entrenadores** | 3 perfiles **sin nombres inventados** (rol como título) y sin fotos hasta P-07; con ancla |
| **Galería** | 6 imágenes, rejilla uniforme, **sin visor/lightbox** ni interacción |
| **Tarifas** | 3 planes, **precio como placeholder** (nunca cifra inventada), recomendado con `Badge` + borde + posición, un solo CTA primario |
| **CTA final** | `h2` + un único CTA primario "Únete ahora" → `/contacto`, oscuro |
| **CTAs sin mayúsculas** | Cierra el pendiente tipográfico de SPEC-02 §11.2 (reversible) |
| **Sin CTA fija en móvil** | La sugerencia S-02 sigue sin aprobar y no se implementa |
| **Componentes** | ⛔ No se crean `ServiceCard`/`TrainerCard`/`PricingCard`; `Card` + variantes. ⛔ No se implementa `GalleryItem` (sin visor) |
| **Datos** | Un único `src/data/home.ts` por página, con marcado `data-provisional` |

**Cerrado en la pasada documental (2026-09-10):**

| ID | Decisión | Estado |
| -- | -------- | ------ |
| **P-18** | **Estructura de URLs ratificada** como oficial del proyecto: `/` Inicio · `/nosotros` Nosotros · `/servicios` Servicios · `/tarifas` Tarifas · `/contacto` Contacto | ✅ **CERRADA** |

⛔ La ratificación es de **URLs**, no de routing: **P-01 sigue abierta** y React
Router sigue sin instalarse.

**Decisiones pendientes:** solo las **9 heredadas** que afectan a la Home
(`P-04`, `P-05`, `P-06`, `P-07`, `P-09`, `P-10`, `P-11`, `P-13` y la sugerencia
`S-02`). **Ninguna nueva.**

**Bloques bloqueados:** Galería por **P-07** (assets) y Ubicación por **P-06**
(datos reales) + **P-05** (mapa).

**Contradicciones — todas resueltas o aclaradas:**

| ID | Estado |
| -- | ------ |
| `C-04` SPEC-00 sin archivo | ✅ **Resuelta**: creado `SPEC-00-base-tecnica.md` |
| `C-05` `SectionHeading`/`Card` aprobados y no implementados | ✅ **Aclarada** (no era contradicción): implementación pendiente, asignada a los bloques 3, 4 y 6 |
| `C-06` el nav enlazaba a URLs no ratificadas | ✅ **Resuelta** con P-18 |
| `C-07` `Card --icon` frente a no inventar iconos | ✅ **Cerrada**: `Card` puede usarse sin icono; ⛔ sin librería de iconos |
| `C-08` `GalleryItem` presuponía un visor | ✅ **Cerrada**: no obligatorio; galería con `.gf-grid` + `figure` + `img` |
| `C-09` recuento de "8 secciones `h2`" | ✅ **Cerrada**: **1 `h1` + 7 `h2`**; el Footer es global |
| `C-10` SPEC-01 §9.4 y R-06 desactualizados | 🟡 **Nueva**, de **sincronización documental**: requiere una línea en SPEC-01, que **no se ha tocado**. **No bloquea** |

**Contradicciones que bloqueen la implementación: ninguna.**

---

## Convenciones de estas SPECs

- Idioma de la documentación y de la web: **español**.
- Marcado de estado dentro de una SPEC:
  - ✅ **Aprobado** — decisión validada explícitamente por el responsable.
  - 🟡 **Propuesta** — redactada en la SPEC, pendiente de aprobación explícita.
  - 🟡 **Cerrada — esperando aprobación** — documento completo y con sus
    decisiones cerradas, pendiente solo del visto bueno del responsable.
  - ⛔ **Fuera de alcance / prohibido** — excluido conscientemente.
- Identificadores:
  - `R-xx` — riesgo o problema detectado en decisiones aprobadas.
  - `P-xx` — decisión pendiente de tomar en una SPEC posterior.
  - `S-xx` — sugerencia adicional no solicitada.
  - `C-xx` — contradicción o ambigüedad detectada entre documentos o briefs.
  - `H-xx` — decisión cerrada por una SPEC de página (introducido en SPEC-03).
- Una SPEC solo pasa a **DONE** cuando su checklist de criterios de aceptación
  está completa y el responsable **la aprueba explícitamente**.
- **Una SPEC puede cerrarse como DONE dejando puntos abiertos**, siempre que
  queden explícitamente registrados y asignados a una SPEC posterior.
- **Documentar una propuesta no la aprueba.** El estado de cada decisión se
  registra en la sección de decisiones de su SPEC.
