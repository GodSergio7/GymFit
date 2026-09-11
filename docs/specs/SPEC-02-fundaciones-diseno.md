# SPEC-02 — Fundaciones de diseño

| Campo            | Valor                                                        |
| ---------------- | ------------------------------------------------------------ |
| **ID**           | SPEC-02                                                      |
| **Título**       | Fundaciones de diseño (sistema visual)                       |
| **Fecha**        | 2026-09-10                                                   |
| **Última revisión** | 2026-09-10 (revisión 2: cierre del Bloque 1)              |
| **Cierre Bloque 1** | 2026-09-10 — 6 decisiones ratificadas (ver §15)          |
| **Aprobada**     | 2026-09-10 por el responsable del proyecto                    |
| **Estado**       | ✅ **Aprobada / DONE**                                        |
| **Depende de**   | SPEC-00 (base técnica ✅) y SPEC-01 (alcance y estructura ✅) |
| **Produce**      | Documentación. **Ningún código, componente, archivo CSS, fuente ni asset.** |
| **Desbloquea**   | SPEC-03+ (estructura de carpetas, sistema de componentes, routing, implementación) |
| **Tipo**         | Especificación de diseño y de reglas para componentes futuros |

> ✅ **SPEC-02 está aprobada** (2026-09-10). Las decisiones de **11.1** están
> aprobadas; las de **11.2** pertenecen a SPECs posteriores y **no** se resuelven
> por suposición. SPEC-02 **no produce código**: no se ha implementado nada.

**Marcado de estado usado en este documento:**

- ✅ **Aprobado** — decisión validada explícitamente por el responsable.
- 🟡 **Propuesta** — documentada aquí, pendiente de aprobación explícita.
- ⛔ **Prohibido / fuera de alcance** — excluido conscientemente.

**Estado de los identificadores:**

| Identificador | Tema | Estado |
| ------------- | ---- | ------ |
| `C-01` | Significado de "bootstrap simple" | ✅ **Resuelta** |
| `P-12` | Sistema base de estilos | ✅ **Aprobada** (capa base propia; sin Bootstrap) |
| `P-14` | Estrategia de iconografía | ✅ **Aprobada** (SVG propios) |
| `P-13` | Carga de tipografías | ✅ **Aprobada** (estrategia; archivos al implementar) |
| `P-15` | Tema visual (dos polaridades) | ✅ **Aprobada** |
| `P-16` | Pareja tipográfica | ✅ **Aprobada** |
| `P-17` | Componente `Icon` | ✅ **Aprobada** (revisión 2; se implementa en un bloque posterior) |
| `C-02` | Deriva de tokens con SPEC-00 | 🟡 Vigente (se reconcilia al implementar) |
| `C-03` | Propuestas 🟡 de SPEC-01 sin aprobar | 🟡 Vigente (aviso) |
| `R-01`…`R-08`, `P-01`…`P-11`, `S-01`…`S-04` | Heredados de SPEC-01 | Ver SPEC-01 §11 |

---

## 1. Sistema de estilos

### 1.1 Estrategia general ✅ APROBADA

| Decisión | Valor |
| -------- | ----- |
| Enfoque | **CSS moderno nativo** |
| Organización | **CSS global + variables/tokens CSS + reset/base propios + utilidades mínimas** |
| Capa base | **Propia** (reset + estilos de elementos + utilidades). Ver 1.4 |
| Preprocesador | ⛔ Ninguno (no Sass/Less/Stylus/PostCSS) |
| Bootstrap | ⛔ **No** |
| Tailwind | ⛔ **No** |
| CSS-in-JS | ⛔ **No** |
| Librerías de componentes externas | ⛔ **No** |
| Librería de iconos | ⛔ **No** (iconos SVG propios, ver 8.6) |
| Dependencias nuevas | ⛔ **Ninguna** en esta fase |

**Formulación canónica de la estrategia (usar esta, sin ambigüedad):**

> **CSS propio + reset/base styles + variables CSS + design tokens + utilidades
> mínimas.** Sin ningún framework ni librería de estilos.

### 1.2 C-01 — "bootstrap simple": aclaración resuelta ✅

**Estado: RESUELTA.** El responsable ha confirmado que la expresión "bootstrap
simple" del brief **nunca** se refirió al framework Bootstrap.

**Decisión confirmada:**

> "CSS propio + reset/base styles + variables CSS + tokens + utilidades
> mínimas." **No se instala Bootstrap ni ninguna otra librería de estilos.**

Para que **no vuelva a existir ambigüedad en este documento**, se fija el
vocabulario:

| Término | Significado en este proyecto |
| ------- | ---------------------------- |
| **"Capa base"** o **"base styles"** | El CSS propio que normaliza el navegador y da estilo a los elementos HTML desnudos (reset + base). Ver 1.4 |
| ~~"bootstrap"~~ | **Término retirado del vocabulario del proyecto.** Se sustituye siempre por "capa base" |
| **Bootstrap** (mayúscula, framework) | ⛔ Prohibido. No se instala, no se usa, no se referencia |

**Motivos registrados de la decisión** (además de la preferencia explícita):

1. Bootstrap es una **librería de componentes externa** y una **dependencia**,
   ambas cosas prohibidas por el brief.
2. Impone su propia paleta, tipografía, radios y espaciado, que **competirían
   con los design tokens** de esta SPEC.
3. Su lenguaje visual es reconocible de inmediato, lo que contradice el objetivo
   explícito de "no parecer una plantilla genérica".
4. El objetivo del proyecto es **aprender**: usar el framework ocultaría los
   fundamentos que se quieren practicar.

**Referencias actualizadas:** `P-12` (aprobada) y C-01 (resuelta).

### 1.3 Modelo de dos capas (arquitectura de tokens)

```
CAPA 1 — Primitivos de marca        (--gf-color-*, --gf-font-*, ...)
        Valores crudos. La marca se cambia AQUÍ y en ningún otro sitio.
                    │
                    ▼
CAPA 2 — Tokens semánticos          (--gf-bg, --gf-text, --gf-surface, ...)
        Describen la FUNCIÓN, no el color. Los componentes consumen SOLO esta capa.
                    │
                    ▼
COMPONENTES / CLASES                (.gf-card, .gf-btn, .gf-container, ...)
        No contienen valores literales (ni hex, ni px sueltos).
```

**Reglas:**

1. **Un componente nunca usa un valor literal** (`#F5C400`, `16px`, `0.5rem`).
   Siempre consume un token. Así se evita repetir valores.
2. **Los componentes consumen solo la capa 2.** Si un componente necesita un
   color, pide `--gf-text-muted`, no `--gf-color-gray`.
3. **El cambio de marca toca solo la capa 1.** Cambiar el amarillo es editar una
   línea; un gimnasio sin amarillo solo cambia primitivos y todo el sistema se
   recolorea.

### 1.4 Qué incluye la capa base ✅ (aprobada como propia)

Contenido de la capa base, **conceptualmente** (no se implementa todavía):

| Bloque | Responsabilidad | Qué cubre |
| ------ | --------------- | --------- |
| **Reset / normalización** | Igualar el comportamiento entre navegadores | `box-sizing: border-box` global, eliminación de márgenes por defecto, `margin: 0` en elementos de bloque |
| **Estilos de elementos** | Que el HTML desnudo ya se vea bien y sea coherente | `body` (fondo, color, tipografía base), `h1`–`h6`, `p`, `ul`/`ol`, `a`, `img`/`svg` (bloque, `max-width: 100%`), `button`, `address` |
| **Comportamientos base** | Evitar defectos típicos | Foco visible por defecto, `prefers-reduced-motion`, `-webkit-font-smoothing` |
| **Utilidades mínimas** | Muy pocas, justificadas | `.gf-visually-hidden` (texto solo para lectores de pantalla), `.gf-text-muted` |

**Reglas de la capa base:**

1. **Debe ser pequeña y legible.** Si crece, deja de ser base y pasa a ser un
   framework propio, que es justo lo que se evita.
2. **No incluye componentes.** Los componentes viven en su propia capa.
3. **No incluye utilidades de layout** más allá de las 4 clases de 5.2.
4. **No se importa nada de terceros.**

> En SPEC-00 ya existen `src/styles/global.css` (reset ligero) y
> `src/styles/theme.css` (tokens). Esta SPEC define **qué debe contener** la capa
> base; **no modifica esos archivos** (ver C-02).

### 1.5 Organización conceptual de los estilos

**Organización conceptual** de los archivos. Los nombres y ubicaciones concretas
en `src/` están **ratificados en §15.1 (decisión 1)**: no existe una SPEC de
estructura independiente.

| Capa conceptual | Responsabilidad | Orden de carga |
| --------------- | --------------- | -------------- |
| **1. Reset / base** | Normalización y estilos de elementos HTML | 1.º |
| **2. Tokens** | Capa 1 (primitivos) y capa 2 (semánticos). Solo variables, ninguna regla de layout | 2.º |
| **3. Primitivas de layout** | Contenedor, sección, grid, cluster | 3.º |
| **4. Componentes** | Button, Card, Badge, SectionHeading, Header, Footer… | 4.º |
| **5. Utilidades mínimas** | `.gf-visually-hidden`, `.gf-text-muted` y poco más | último |

**Decisiones de organización:**

1. **Los tokens se cargan antes que nada**, para que todo lo demás los consuma.
2. **Los tokens viven en un único punto**, para que un cambio de marca no obligue
   a tocar varios archivos.
3. **Los componentes no se estilan desde fuera**: no se aplican reglas globales
   sobre elementos internos de un componente ajeno.
4. **La base va primero y las utilidades al final**, para que la cascada sea
   predecible.

### 1.6 Convención de nombres

| Aspecto | Convención |
| ------- | ---------- |
| Prefijo de tokens | `--gf-` |
| Prefijo de clases CSS | `gf-` |
| Metodología de clases | **BEM-lite**: `.gf-card`, `.gf-card__media`, `.gf-card--pricing` |
| Tokens semánticos | Nombran la **función**: `--gf-text-muted`, no `--gf-gray-500` |
| Utilidades | Pocas y explícitas |

### 1.7 Gestión de variantes de componentes

| Mecanismo | Cuándo usarlo | Ejemplo |
| --------- | ------------- | ------- |
| **1. Modificador de clase** (`.gf-card--pricing`) | La variante cambia pocos valores y el marcado es idéntico | Card de tarifas vs card de servicio |
| **2. Atributo de datos / ARIA** (`[aria-current="page"]`, `[data-state="active"]`) | Estados que también se leen desde JS o que afectan a accesibilidad | Elemento activo de navegación, `[aria-expanded]`, `[aria-disabled]` |
| **3. Token local del componente** (`--gf-btn-padding`) | La variante solo ajusta una medida | Botón `lg` del Hero |

**Reglas:**

1. **Máximo 2–3 variantes por componente.** Una cuarta variante indica que
   faltan dos componentes distintos, no que falta versatilidad.
2. **Se prefiere el atributo ARIA al atributo propio.** Si el estado ya existe en
   ARIA, se estila desde ahí y no se duplica con una clase.
3. **Ninguna variante existe solo por color.** Si algo "se ve distinto", debe ser
   porque **cumple otra función**.
4. **Las variantes de polaridad (claro/oscuro) no son variantes de componente.**
   Un componente no sabe en qué sección está: consume tokens y funciona en ambas
   (ver 2.1.3).

---

## 2. Design tokens

> Todos los valores son **propuestas** de esta SPEC pendientes de aprobación.
> Los ratios de contraste están **calculados**, no estimados.

### 2.1 Colores

#### 2.1.1 Capa 1 — Primitivos de marca ✅ (heredados de SPEC-01)

| Token | Valor | Nombre en SPEC-01 | Función |
| ----- | ----- | ----------------- | ------- |
| `--gf-color-black` | `#050505` | Negro principal | Fondo y color protagonista de la web |
| `--gf-color-gray-dark` | `#111111` | Gris oscuro | Fondos secundarios y superficie de cards |
| `--gf-color-gray` | `#A3A3A3` | Gris secundario | Texto secundario **solo sobre fondos oscuros** |
| `--gf-color-gray-onlight` | `#525252` | Gris alternativo para fondos claros | Texto secundario **sobre fondos claros** |
| `--gf-color-yellow` | `#F5C400` | Amarillo principal | Acento y conversión (CTA). **Nunca texto sobre fondo claro** |
| `--gf-color-white` | `#FFFFFF` | Blanco | Texto sobre oscuro; fondo de secciones claras |

#### 2.1.2 Colores derivados del acento (únicos 2 valores nuevos)

| Token | Valor | Derivación | Contraste con texto negro |
| ----- | ----- | ---------- | ------------------------- |
| `--gf-color-yellow-hover` | `#FFD633` | Aclarado | **14,48:1** ✅ |
| `--gf-color-yellow-active` | `#D8AC00` | Oscurecido | **9,53:1** ✅ |

El acento base `#F5C400` con texto negro da **12,40:1** ✅.

✅ **Aprobados** (2026-09-10) como **estados derivados** del amarillo principal:
`#FFD633` para *hover* y `#D8AC00` para *active*. ⛔ **No se utilizan como
colores decorativos independientes** ni amplían innecesariamente la paleta.

> **Decisión sobre derivación dinámica:** se **desaconseja** `color-mix()` como
> mecanismo principal: haría que el contraste final no fuera verificable de un
> vistazo. Se prefieren **2 valores explícitos y medidos**.

#### 2.1.3 Modelo de polaridad: secciones oscuras y secciones claras ✅ APROBADO (P-15)

> ✅ **Decisión aprobada** el 2026-09-10.

**Modelo aprobado:**

> **Tema oscuro dominante + secciones claras minoritarias.** El negro `#050505`
> sigue siendo el color principal y protagonista. Podrán existir **1–2 secciones
> claras por página** cuando aporten contraste y ritmo visual, para evitar que
> toda la web sea visualmente plana.

**Concepto de "polaridad":** cada sección tiene una polaridad, **oscura** (por
defecto) o **clara** (banda de contraste). La polaridad **no es un color nuevo**:
son los **mismos 6 primitivos** aplicados en dos direcciones.

**Reglas de convivencia (propuestas):**

| # | Regla | Motivo |
| - | ----- | ------ |
| 1 | **El negro enmarca la web.** Cabecera, pie, Hero y CTA final son **siempre oscuros** | La web abre y cierra en negro: identidad coherente y CTA con máximo contraste |
| 2 | **Las secciones claras son minoría:** máximo **1–2 por página**, nunca consecutivas, nunca más del **~35 %** de las secciones | Evitan que el negro pierda el protagonismo que el brief exige |
| 3 | **La polaridad es de la sección completa** (banda a todo el ancho), **nunca de un bloque o card suelto** dentro de una sección de otra polaridad | Alternar polaridad dentro de un mismo bloque rompe la lectura |
| 4 | **Ningún degradado entre polaridades.** El cambio de fondo **es** el separador | Un degradado sería un adorno prohibido (9.4) |
| 5 | **No hay mezcla de textos:** en sección oscura, texto claro; en sección clara, texto oscuro. **Nunca texto blanco sobre fondo claro** | Evita el fallo de contraste más común |
| 6 | **Los componentes no saben su polaridad.** Consumen tokens semánticos; el mismo componente funciona en ambas | Es la razón de existir de la capa 2 de tokens |
| 7 | **Se conserva la paleta exacta.** La polaridad clara **no añade ni un color nuevo**: reutiliza `#FFFFFF`, `#050505` y `#525252` | Requisito explícito: sin segunda paleta |
| 8 | **La asignación concreta de qué secciones son claras se decide por página**, en su especificación/implementación y siempre **antes** de implementarla ✅ (§15.1, decisión 6). Candidatas orientativas: propuesta de valor/beneficios, galería y tarifas | Mantiene la regla global sin inventar ahora una distribución definitiva. El Hero y el CTA final **nunca** son claros |

**Cómo convive cada elemento:**

| Elemento | En sección OSCURA | En sección CLARA |
| -------- | ----------------- | ---------------- |
| **Fondo** | `--gf-bg` (`#050505`) o `--gf-bg-alt` (`#111111`) para bandas alternas | `--gf-bg-light` (`#FFFFFF`) |
| **Texto principal** | `--gf-text` = blanco (**20,38:1**) | `--gf-text-onlight` = `#050505` (**20,38:1**) |
| **Texto secundario** | `--gf-text-muted` = `#A3A3A3` (**8,08:1** / 7,49:1) | `--gf-text-muted-onlight` = `#525252` (**7,81:1**) |
| **Card (opción A)** | Superficie `#111111` + borde claro decorativo | Superficie blanca + borde oscuro decorativo + sombra opcional `--gf-shadow-sm` |
| **Card (opción B)** | Igual que A | **Card oscura** `#111111` sobre blanco: **18,88:1** de separación, máximo impacto |
| **Bordes decorativos** | `rgba(255,255,255,0.10)` | `rgba(5,5,5,0.12)` (**1,31:1**, decorativo) |
| **Bordes funcionales** | `rgba(255,255,255,0.40)` (**3,71:1**) | `rgba(5,5,5,0.50)` (**3,84:1**) |
| **Amarillo (acento)** | Texto, *eyebrow*, subrayado y relleno de CTA. **12,40:1** ✅ | **Solo relleno de CTA** (con texto negro) y detalles **decorativos**. ⛔ Nunca como texto |
| **Indicador de estado** | Amarillo válido (**12,40:1**) | ⛔ **Amarillo NO** (1,64:1). Usar `#525252` (7,81:1), peso o subrayado |
| **Anillo de foco** | `--gf-focus-ring` = amarillo; sobre elemento amarillo → **blanco** | `--gf-focus-ring-onlight` = **negro**. Sirve para todo, incluido el botón amarillo |
| **CTA primario** | ✅ **Uso preferente** del CTA amarillo | Se **evita** (ver 6.6): se prioriza CTA secundario, enlace o card oscura que contenga el CTA |
| **Hover del CTA** | **Aclarar** → `#FFD633` | **Oscurecer** → `#D8AC00` (vs blanco 2,14:1, mejor que aclarar: 1,41:1) |
| **Sombra** | Casi inútil sobre negro | Útil: `--gf-shadow-sm` para separar cards blancas |

#### 2.1.4 Tokens semánticos — secciones OSCURAS (polaridad por defecto)

| Token | Valor | Función | Contraste verificado |
| ----- | ----- | ------- | -------------------- |
| `--gf-bg` | `--gf-color-black` | **Background principal** | — |
| `--gf-bg-alt` | `--gf-color-gray-dark` | **Background secundario**: bandas alternas sin sombras | — |
| `--gf-surface` | `--gf-color-gray-dark` | **Superficie / card** | — |
| `--gf-surface-hover` | `rgba(255,255,255,0.05)` | Superficie al pasar el ratón (cards interactivas) | — |
| `--gf-text` | `--gf-color-white` | **Texto principal** | 20,38:1 ✅ |
| `--gf-text-muted` | `--gf-color-gray` | **Texto secundario** | 8,08:1 / 7,49:1 ✅ |
| `--gf-text-on-accent` | `--gf-color-black` | **Texto sobre amarillo**. Regla fija de SPEC-01 | 12,40:1 ✅ |
| `--gf-accent` | `--gf-color-yellow` | **Acento y conversión** | 12,40:1 como texto ✅ |
| `--gf-accent-hover` | `--gf-color-yellow-hover` | Hover del acento | 14,48:1 con texto negro ✅ |
| `--gf-accent-active` | `--gf-color-yellow-active` | Active del acento | 9,53:1 con texto negro ✅ |
| `--gf-border` | `rgba(255,255,255,0.10)` | **Borde decorativo** | 1,30:1 — decorativo |
| `--gf-border-strong` | `rgba(255,255,255,0.40)` | **Borde funcional** | **3,71:1** ✅ |
| `--gf-disabled-bg` | `rgba(255,255,255,0.08)` | Fondo deshabilitado | — |
| `--gf-disabled-text` | `rgba(255,255,255,0.45)` | Texto deshabilitado (WCAG exime, pero legible) | 4,52:1 ✅ |
| `--gf-overlay-hover` | `rgba(255,255,255,0.05)` | Realce en hover (filas, enlaces) | — |
| `--gf-overlay-active` | `rgba(255,255,255,0.08)` | Realce pulsado | — |
| `--gf-scrim` | `linear-gradient(180deg, rgba(5,5,5,0.20), rgba(5,5,5,0.85))` | Capa sobre imágenes para el texto encima | se verifica con el asset real |
| `--gf-focus-ring` | `--gf-color-yellow` | **Anillo de foco** por defecto | 12,40:1 ✅ |
| `--gf-focus-ring-on-accent` | `--gf-color-white` | Anillo cuando el elemento es amarillo | 20,38:1 ✅ |

#### 2.1.5 Tokens semánticos — secciones CLARAS ✅ (aprobado, P-15)

| Token | Valor | Función | Contraste verificado |
| ----- | ----- | ------- | -------------------- |
| `--gf-bg-light` | `--gf-color-white` | Fondo de sección clara | — |
| `--gf-surface-onlight` | `--gf-color-white` | Superficie de card blanca (opción A) | separada por borde decorativo (1,31:1) |
| `--gf-surface-inverse` | `--gf-color-gray-dark` | Card oscura sobre sección clara (**opción B**) | **18,88:1** de separación ✅ |
| `--gf-text-onlight` | `--gf-color-black` | **Texto principal** sobre fondo claro | 20,38:1 ✅ |
| `--gf-text-muted-onlight` | `--gf-color-gray-onlight` | **Texto secundario** sobre fondo claro | 7,81:1 ✅ |
| `--gf-border-onlight` | `rgba(5,5,5,0.12)` | **Borde decorativo** sobre claro | 1,31:1 — decorativo |
| `--gf-border-strong-onlight` | `rgba(5,5,5,0.50)` | **Borde funcional** sobre claro | **3,84:1** ✅ |
| `--gf-accent-hover-onlight` | `--gf-color-yellow-active` (`#D8AC00`) | Hover del CTA en sección clara (**oscurecer**, no aclarar) | 2,14:1 vs blanco (mejor que 1,41:1) |
| `--gf-focus-ring-onlight` | `--gf-color-black` | **Anillo de foco** sobre claro | 20,38:1 sobre el fondo · **12,40:1 sobre el botón amarillo** ✅ |
| `--gf-disabled-bg-onlight` | `rgba(5,5,5,0.08)` | Fondo deshabilitado | — |
| `--gf-disabled-text-onlight` | `rgba(5,5,5,0.45)` | Texto deshabilitado | 3,28:1 (WCAG exime *disabled*) |

#### 2.1.6 Número de colores: sin segunda paleta ✅

**La polaridad clara no añade ningún color nuevo.** Se compone exclusivamente de:

- `#FFFFFF` (ya en la paleta)
- `#050505` (ya en la paleta)
- `#525252` (ya en la paleta, aprobado en SPEC-01)
- Variantes **alfa** de `#050505` para bordes y estados
- Los 2 derivados del acento, ya definidos

**Total: 6 primitivos + 2 derivados, con independencia de cuántas polaridades
haya.** El sistema de dos polaridades se construye **reutilizando**, no
ampliando: es lo que evita una segunda paleta innecesaria.

#### 2.1.7 Hallazgos medidos que condicionan reglas

1. **Un borde blanco al 20 % da 1,71:1 y FALLA** el mínimo de 3:1 de los límites
   de componentes de interfaz. Por eso `--gf-border-strong` se fija en **40 %
   (3,71:1)**. En un botón de contorno, el borde **es** lo único que identifica
   el componente.
2. **Un anillo de foco amarillo sobre un botón amarillo da 1:1**: es invisible.
   De ahí `--gf-focus-ring-on-accent` (blanco) en secciones oscuras.
3. **El amarillo no puede ser indicador de estado sobre fondo claro**: 1,64:1
   frente al mínimo de 3:1. En sección clara, el estado activo se expresa con
   `#525252` (7,81:1), **peso tipográfico o subrayado**, nunca con amarillo.
4. **El borde funcional sobre fondo claro necesita al menos el 50 % de negro**
   (`rgba(5,5,5,0.50)` = 3,84:1). Con el 40 % se queda en 2,78:1 y **falla**.
5. **El relleno amarillo sobre blanco da 1,64:1**: el CTA primario **no se fuerza
   sobre fondos claros** (decisión aprobada, ver 6.6), así que en la práctica el
   problema se evita. Si excepcionalmente se usara, necesitaría borde funcional y
   su hover **oscurecería** (aclarar lo acerca al blanco: 1,41:1).

**Distinción clave:** los **bordes decorativos** (cards, separadores) **no**
están sujetos al 3:1, porque el componente se identifica por su contenido. Los
**bordes funcionales** (botón de contorno, control) **sí**. Esta distinción evita
tanto un diseño sobrecargado como un fallo de accesibilidad.

#### 2.1.8 ⛔ Combinaciones prohibidas (cualquier polaridad)

| Combinación | Ratio | Estado |
| ----------- | ----- | ------ |
| `#F5C400` como texto sobre `#FFFFFF` | **1,64:1** | ⛔ Prohibido (SPEC-01) |
| `#FFFFFF` como texto sobre `#F5C400` | **1,64:1** | ⛔ Prohibido (SPEC-01) |
| `#A3A3A3` sobre `#FFFFFF` | **2,52:1** | ⛔ Prohibido (SPEC-01) |
| `#F5C400` como indicador de estado sobre fondo claro | **1,64:1** | ⛔ Prohibido (nuevo, medido) |
| Texto blanco sobre fondo claro | — | ⛔ Prohibido |
| Texto oscuro sobre fondo oscuro | — | ⛔ Prohibido |

#### 2.1.9 Tokens auxiliares de implementación ✅ (ratificados)

Tokens aprobados **durante la implementación del Bloque 1** (ver §15.2). Son
técnicamente necesarios, **no introducen ningún color nuevo** y no contradicen el
sistema aprobado:

| Token | Valor | Por qué es necesario |
| ----- | ----- | -------------------- |
| `--gf-link` | oscuro: `--gf-accent` · claro: `--gf-text-onlight` | Única forma de cumplir §6.5 sin que el componente conozca su polaridad (§2.1.3 regla 6). En sección clara el enlace **no** puede ser amarillo (1,64:1) |
| `--gf-surface-hover-onlight` | `rgb(5 5 5 / 5%)` | §2.1.5 define los 11 tokens de la polaridad clara pero **ningún realce** de hover/active |
| `--gf-overlay-hover-onlight` | `rgb(5 5 5 / 5%)` | Idem |
| `--gf-overlay-active-onlight` | `rgb(5 5 5 / 8%)` | Idem |
| `--gf-border-width` | `1px` | Evita repetir el literal de grosor de borde en cada componente (§1.3 regla 1) |
| `--gf-focus-ring-width` | `2px` | Geometría del anillo de foco (§10.2) |
| `--gf-focus-ring-offset` | `2px` | Idem |
| `--gf-target-min` | `44px` | Mínimo táctil aprobado (SPEC-01 §7.2, §10.4) |
| `--gf-control-height-lg` | `52px` | Tamaño `lg` de botón (§6.7) |
| `--gf-underline-offset` | `0.2em` | Subrayado de enlaces y de botones de texto |
| `--gf-layer-skip-link` | `10` | Capa del SkipLink |

Los tres realces de la polaridad clara usan **el mismo alfa** que sus
equivalentes oscuros (5 % y 8 %) sobre el neutro oscuro `#050505`: son un
**espejo**, no un color nuevo.

### 2.2 Tipografía ✅ APROBADA (P-13 y P-16)

> ✅ **Aprobada** el 2026-09-10: la pareja tipográfica (P-16) y la estrategia de
> carga (P-13). **No se ha instalado ni descargado ninguna fuente**: los archivos
> se añadirán durante la implementación.

#### 2.2.1 Pareja propuesta

| Rol | Fuente | Pesos | Origen |
| --- | ------ | ----- | ------ |
| **Headings** | **Barlow Condensed** | 600 · 700 · 800 | Google Fonts · SIL Open Font License 1.1 |
| **Body** | **Inter** | 400 · 500 · 600 | Google Fonts · SIL Open Font License 1.1 |

**Alcance aprobado:** **Barlow Condensed** en headings y titulares; **Inter** en
cuerpo de texto, navegación, información, precios y contenido general.

**Fallbacks obligatorios** (si la fuente no carga, la web no debe romperse):

```
--gf-font-heading: 'Barlow Condensed', 'Arial Narrow', system-ui, sans-serif;
--gf-font-body:    'Inter', system-ui, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
```

#### 2.2.2 Por qué Barlow Condensed para headings

1. **Es condensada.** Ocupa menos ancho por carácter manteniendo la altura: esto
   permite **titulares grandes y de alto impacto** sin invadir la pantalla ni
   forzar saltos de línea raros. Un titular ancho obliga a reducirlo; uno
   condensado puede ser grande y seguir cabiendo.
2. **Es la tipografía del sector.** Las marcas de fitness y deporte usan
   condensadas en mayúsculas: comunica "deportivo" de forma inmediata, sin
   necesidad de iconos ni adornos.
3. **Tiene 9 pesos (100–900) más itálicas.** Una sola familia cubre toda la
   jerarquía de titulares: no obliga a añadir una segunda fuente para subtítulos.
4. **Sus pesos altos (700–800) son sólidos sin ser toscos.** Aguantan el
   contraste extremo de la web (texto claro sobre negro) sin emborronarse, cosa
   que las redondeadas o las de trazo fino no hacen.
5. **Funciona en mayúsculas con tracking corto**, que es exactamente el recurso
   "potente" de la dirección visual.
6. **Buena disponibilidad y licencia OFL 1.1**, lo que permite autoalojarla.
7. **Límite reconocido: no sirve para cuerpo de texto.** A tamaños pequeños y muy
   condensada, cansa la vista. Por eso se usa **solo** en titulares, etiquetas y
   botones, y **nunca** en párrafos.

#### 2.2.3 Por qué Inter para body

1. **Está diseñada para pantalla.** Altura de x generosa y formas abiertas: se
   lee bien a 16 px, que es el tamaño de cuerpo de esta web.
2. **Numerales y signos inequívocos.** Esto es crítico en un gimnasio: **precios
   y horarios** son el dato que más se consulta y el que más caro sale si se
   confunde un 3 con un 8.
3. **Es neutra y discreta.** No compite con la condensada de los titulares: cada
   familia tiene un papel claro y no hay dos fuentes "con carácter" peleando.
4. **Cobertura completa del español**, con acentos y "ñ" bien resueltos (y la
   posibilidad de limitar la descarga al subconjunto latino).
5. **Es variable y con muchos pesos**, así que la jerarquía secundaria no exige
   archivos adicionales.
6. **Aspecto contemporáneo y sobrio**: no tiene una personalidad "de moda" que
   envejezca rápido, lo que importa en una plantilla reutilizable.
7. **Excelente renderizado en Windows, macOS y Android**, incluido el texto claro
   sobre fondo oscuro.

#### 2.2.4 Personalidad que aporta cada una

| Fuente | Personalidad | Papel en el sistema |
| ------ | ------------ | ------------------- |
| **Barlow Condensed** | Atlética, directa, enérgica, con actitud. Tono de cartel deportivo, no de folleto | **Aporta el "potente" y el "deportivo"**. Grita cuando tiene que gritar |
| **Inter** | Neutra, técnica, precisa, silenciosa. Tono de interfaz bien hecha | **Aporta el "profesional" y el "limpio"**. Informa sin distraer |

**Por qué funcionan juntas:** el contraste de personalidades produce jerarquía
inmediata (el titular destaca sin necesidad de color ni tamaño extremo) y evita
la monotonía de usar una sola familia, que es el aspecto de "plantilla genérica"
que el brief prohíbe.

#### 2.2.5 Pesos concretos a cargar

| Fuente | Peso | Uso |
| ------ | ---- | --- |
| Barlow Condensed | **800** | `h1` / display (Hero) |
| Barlow Condensed | **700** | `h2`, títulos de CTA y botones |
| Barlow Condensed | **600** | `h3`/`h4`, etiquetas y *eyebrows* |
| Inter | **400** | Cuerpo de texto |
| Inter | **500** | Énfasis, etiquetas, texto de badge |
| Inter | **600** | Subtítulos de card, navegación y **enlaces textuales** |

**Reparto por elemento ✅ — resuelve la contradicción de esta tabla (§15.1,
decisión 2):**

| Elemento | Familia y peso |
| -------- | -------------- |
| **Botones de acción**: CTA primaria, CTA secundaria, botones de acción y botones de navegación **cuando visualmente sean botones** | **Barlow Condensed 700** |
| **Enlaces puramente textuales**: navegación de cabecera y pie, enlaces de cuerpo de texto | **Inter 600** |
| **Variante de botón `--text`** (acción de menor importancia renderizada como texto) | **Inter 600**: es una acción, pero **visualmente no es un botón**, así que sigue el criterio "cuando visualmente sean botones" |

> Las filas «Barlow 700 → botones» e «Inter 600 → botones secundarios» de la
> tabla anterior quedan **sustituidas** por este reparto, que es el aprobado.
> Intención: los elementos **de acción** llevan la identidad deportiva de Barlow
> Condensed; los **enlaces textuales** pueden usar Inter.

**Reglas:**

1. **6 pesos en total** (o 2 archivos variables). **No se cargan más.**
2. ⛔ **No se usa Barlow Condensed 900**: en mayúsculas y a gran tamaño resulta
   excesivamente pesado y pierde elegancia.
3. ⛔ **No se usa Inter por debajo de 400**: el texto claro sobre fondo oscuro se
   percibe más grueso de lo que es, y los pesos finos se vuelven ilegibles.
4. **No se cargan itálicas** mientras no haya un uso real que las justifique.

#### 2.2.6 Escala de tamaños

Fluida con `clamp()` para evitar breakpoints de tipografía:

| Token | Valor | Uso |
| ----- | ----- | --- |
| `--gf-text-xs` | `0.75rem` (12 px) | Metadatos, avisos legales, *eyebrows* |
| `--gf-text-sm` | `0.875rem` (14 px) | Etiquetas, badges, texto auxiliar |
| `--gf-text-base` | `1rem` (16 px) | **Cuerpo de texto** (mínimo absoluto) |
| `--gf-text-lg` | `1.125rem` (18 px) | Entradillas, párrafos destacados |
| `--gf-text-xl` | `clamp(1.25rem, 1.15rem + 0.5vw, 1.5rem)` | `h4`, títulos de card |
| `--gf-text-2xl` | `clamp(1.5rem, 1.3rem + 1vw, 2rem)` | `h3` |
| `--gf-text-3xl` | `clamp(1.875rem, 1.5rem + 1.9vw, 2.75rem)` | `h2` (título de sección) |
| `--gf-text-display` | `clamp(2.5rem, 1.8rem + 3.5vw, 4.5rem)` | `h1` (solo Hero y cabeceras de página) |

**Regla:** **el cuerpo de texto nunca baja de 16 px.**

#### 2.2.7 Line-height, tracking y medida

| Token | Valor | Uso |
| ----- | ----- | --- |
| `--gf-leading-tight` | 1.1 | Titulares display y `h1`/`h2` |
| `--gf-leading-snug` | 1.25 | `h3`/`h4`, títulos de card |
| `--gf-leading-normal` | 1.6 | Cuerpo de texto |
| `--gf-tracking-tight` | `-0.02em` | Titulares grandes (compensación óptica) |
| `--gf-tracking-normal` | `0` | Cuerpo |
| `--gf-tracking-wide` | `0.08em` | Etiquetas en mayúsculas |
| `--gf-tracking-wider` | `0.16em` | *Eyebrows* (ya usado en SPEC-00) |
| `--gf-measure` | `68ch` | Ancho máximo de línea de lectura |

**Nota:** los titulares condensados en mayúsculas **necesitan** tracking positivo
(`--gf-tracking-wide` o superior); sin él el texto se ve apretado y pierde
calidad.

#### 2.2.8 Uso de mayúsculas

1. **Permitido:** *eyebrows*, etiquetas, badges, categorías y **etiquetas de CTA
   cortas** ("Únete ahora") 🟡.
2. **Prohibido:** párrafos, descripciones y títulos largos. Las mayúsculas
   sostenidas reducen la velocidad de lectura.
3. **Si hay mayúsculas, siempre con tracking** (`--gf-tracking-wide` o mayor).
4. La decisión de poner el CTA principal en mayúsculas queda 🟡 **pendiente**.

#### 2.2.9 Alternativas consideradas

| Opción | Pareja | Personalidad | Valoración |
| ------ | ------ | ------------ | ---------- |
| **A (recomendada)** | Barlow Condensed + Inter | Atlética + técnica | **Máximo equilibrio deportivo/premium.** Condensada con muchos pesos; cero compromisos |
| **B** | Archivo + Inter | Grotesca neutra, corporativa, ligeramente editorial | Muy versátil (variable, muchos pesos) y más "premium sobrio", pero **menos deportiva**: se acerca más a una consultora que a un gimnasio |
| **C** | Bebas Neue + Inter | Cartel, impacto máximo | Muy reconocible en fitness, pero **solo tiene un peso**: la jerarquía se limita y obliga a otra fuente. Riesgo de parecer una plantilla de gimnasio genérica |
| **D** | Oswald + Inter | Condensada editorial, aire de prensa deportiva | Buena alternativa si se quiere un tono más **serio y menos geométrico**; algo más estrecha y menos "moderna" que Barlow |
| **E** | Anton / Archivo Black (solo display) + Inter | Póster, peso extremo | Válida **solo** para el Hero; insuficiente como sistema de titulares |
| **F** | Solo `system-ui` | La del sistema operativo | **Cero dependencias y cero peticiones**, pero aspecto genérico: **prohibido** por el brief |

#### 2.2.10 Estrategia de carga de fuentes ✅ APROBADA (P-13)

**Peso estimado (subconjunto latino, WOFF2):**

| Escenario | Archivos | Peso aproximado |
| --------- | -------- | --------------- |
| 6 pesos estáticos (3 + 3) | 6 | **≈ 100–160 KB** |
| 2 fuentes variables | 2 | **≈ 100–150 KB** |

**Ventajas de autoalojar:**

1. **Sin peticiones a terceros**: mejora la privacidad y evita el debate legal
   sobre tipografías servidas desde CDN externo (relevante para **P-04**).
2. **Sin dependencia de disponibilidad ajena**: si el CDN falla o retira una
   versión, la web no cambia de aspecto.
3. **Control total del subconjunto** y del orden de carga.
4. **Mejor rendimiento medible**: sin resolución DNS ni conexión TLS adicional a
   otro dominio.

**Costes y riesgos de autoalojar:**

1. **Peso añadido** (~100–160 KB) que compite con las imágenes en la carga
   inicial y afecta a **P-10** (rendimiento).
2. **Mantenimiento manual**: descargar, versionar y actualizar archivos es tarea
   nuestra, no de un CDN.
3. **El repositorio crece** con archivos binarios.
4. **Riesgo de CLS (el punto que más se subestima):** la fuente propia tiene
   métricas distintas de la de reserva, así que el texto **salta** al sustituirse
   si no se compensa. Mitigación: ajustar la fuente de reserva con
   `size-adjust` / `ascent-override` y/o reservar el espacio del bloque.
5. **Riesgo de FOIT/FOUT**: si la fuente tarda, el texto puede no verse. Se
   mitiga con `font-display: swap`.
6. **Licencias**: Barlow e Inter son **SIL Open Font License 1.1**, que permite
   uso comercial, modificación y redistribución (incluido autoalojar). Hay que
   **conservar el archivo de licencia** junto a las fuentes.
   *No soy asesor legal: conviene verificarlo antes de publicar.*

**Requisitos técnicos propuestos si se aprueba autoalojar:**

| Requisito | Detalle |
| --------- | ------- |
| Formato | **WOFF2** (único formato; el soporte es universal) |
| Subconjunto | **latin + latin-ext** (español). ⛔ No cargar cirílico, griego ni vietnamita |
| `font-display` | **`swap`** (texto visible desde el primer momento) |
| Precarga | **Solo 1–2 archivos** del primer pantallazo (titular del Hero y cuerpo). Precargar los 6 penaliza la carga |
| Fallback compensado | Ajustar métricas de la fuente de reserva para reducir el salto de layout |
| Variable vs estático | Decidir en implementación; variable suele simplificar si se usan varios pesos |
| Carga | Las fuentes **no** pueden bloquear el renderizado del contenido |
| Licencia | Incluir el texto de la OFL 1.1 en el proyecto |

> ✅ **Estrategia aprobada** (2026-09-10): **autoalojadas en WOFF2**, subconjunto
> **latino**, `font-display: swap`, **precarga únicamente de las fuentes
> críticas**, fallback adecuado y medidas para minimizar el CLS.
> **La implementación física de los archivos se realizará durante la
> implementación**; aquí no se ha descargado ni añadido ninguna fuente.

### 2.3 Espaciado

Escala basada en **múltiplos de 4 px**:

| Token | Valor | px | Uso típico |
| ----- | ----- | -- | ---------- |
| `--gf-space-2xs` | `0.25rem` | 4 | Separación icono–texto |
| `--gf-space-xs` | `0.5rem` | 8 | Espacio interno de badges, gaps pequeños |
| `--gf-space-sm` | `0.75rem` | 12 | Separación entre líneas de una lista |
| `--gf-space-md` | `1rem` | 16 | **Unidad base** |
| `--gf-space-lg` | `1.5rem` | 24 | Padding de cards, gap de grid en móvil |
| `--gf-space-xl` | `2rem` | 32 | Gap de grid en tablet/desktop |
| `--gf-space-2xl` | `3rem` | 48 | Separación entre bloques de una sección |
| `--gf-space-3xl` | `4rem` | 64 | Padding vertical de sección en móvil |
| `--gf-space-4xl` | `6rem` | 96 | Padding vertical de sección en desktop |

**Reglas:** ningún margen literal · **9 tokens y ni uno más** · el espaciado
vertical de sección es fluido, no por breakpoint · **se prefiere `gap` a
márgenes** entre hermanos (evita colapsos y hace el layout predecible).

### 2.4 Bordes y radios

| Token | Valor | Uso |
| ----- | ----- | --- |
| `--gf-radius-sm` | `0.25rem` (4 px) | Elementos pequeños |
| `--gf-radius-md` | `0.5rem` (8 px) | **Botones** y elementos de interfaz |
| `--gf-radius-lg` | `0.75rem` (12 px) | **Cards** e imágenes destacadas |
| `--gf-radius-pill` | `999px` | **Solo** badges y etiquetas |

**Reglas:**

1. **Ningún radio supera los 12 px** (salvo la píldora de los badges).
2. **Los botones no son píldoras.** Botón píldora + sombra + degradado es
   exactamente el "aspecto SaaS" que el brief prohíbe.
3. **Las imágenes dentro de una card usan `--gf-radius-md`**, un paso menos que
   la card, para que la esquina no se vea "hinchada".
4. **No se redondean secciones ni contenedores** a pantalla completa.

> **Reconciliación (C-02):** `theme.css` define hoy `--radius-lg: 1rem` (16 px).
> Esta SPEC propone **12 px**. El cambio es de implementación y no se ha aplicado.

### 2.5 Sombras

| Token | Valor | Uso permitido |
| ----- | ----- | ------------- |
| `--gf-shadow-sm` | `0 1px 2px rgba(0,0,0,0.4)` | Elementos ligeramente elevados; separar cards claras en secciones claras |
| `--gf-shadow-md` | `0 12px 32px rgba(0,0,0,0.5)` | **Solo** elementos flotantes por encima del contenido |

**Reglas:**

1. **En secciones oscuras, las cards NO llevan sombra.** Se separan con
   superficie + borde: sobre negro la sombra es casi invisible, así que se paga
   coste de render sin ganar jerarquía.
2. **En secciones claras la sombra sí tiene sentido** (una card blanca sobre
   fondo blanco se apoya en ella), pero se prefiere primero el **borde**.
3. **Solo 2 niveles**, y solo para elementos flotantes o cards en sección clara.
4. ⛔ Prohibidas las **sombras de color**, los *glows* amarillos y las sombras
   interiores.
5. ⛔ **Nunca sombra de texto**: para eso está `--gf-scrim`.

### 2.6 Transiciones

| Token | Valor | Uso |
| ----- | ----- | --- |
| `--gf-duration-fast` | `120ms` | Color en hover de enlaces y bordes |
| `--gf-duration-base` | `200ms` | **Por defecto**: botones, cards, navegación |
| `--gf-duration-slow` | `320ms` | Menú móvil, visor de galería |
| `--gf-ease-standard` | `cubic-bezier(0.2, 0, 0, 1)` | Salida suave, sin rebotes |
| `--gf-ease-entrance` | `cubic-bezier(0.16, 1, 0.3, 1)` | Entradas (menú, visor) |

| Elemento | Qué se anima | Duración |
| -------- | ------------ | -------- |
| **Botones** | `background-color`, `color`, `border-color` | `fast` (120 ms) |
| **Enlaces** | `color`, `text-decoration-color` | `fast` |
| **Cards** | `border-color`, `background-color` | `base` (200 ms) — solo si son interactivas, **sin desplazamientos** |
| **Navegación** | `color`, `background-color`, subrayado del activo | `base` |
| **Menú móvil / visor** | `opacity`, `transform` | `slow` (320 ms) |

**Reglas:**

1. **Solo propiedades baratas:** `color`, `background-color`, `border-color`,
   `opacity`, `transform`, `text-decoration-color`. ⛔ **Nunca** `width`,
   `height`, `margin`, `padding`, `top`, `left`.
2. **Ninguna transición supera 320 ms.**
3. **Sin animaciones de entrada al hacer scroll**, sin *parallax*, sin
   *scroll-jacking*. Solo se permite 🟡 una entrada sutil del Hero (≤ 400 ms).
4. **`prefers-reduced-motion` es obligatorio** (base ya existente en
   `src/styles/global.css`). **Ninguna información depende de una animación.**
5. **Ningún elemento parpadea ni se mueve solo** de forma sostenida.

---

## 3. Breakpoints responsive ✅ APROBADOS

### 3.1 Valores concretos

✅ **Aprobados** (2026-09-10): **móvil `< 768 px`**, **tablet `768–1023 px`**,
**desktop `≥ 1024 px`**. **No se añaden más breakpoints** salvo justificación
real durante la implementación.

| Token de referencia | Valor | Motivo del cambio de layout |
| ------------------- | ----- | --------------------------- |
| `--bp-md` | **768 px** | La navegación completa cabe y deja de colapsarse. Grids: 1 → 2 columnas |
| `--bp-lg` | **1024 px** | Grids: 2 → 3 o 4 columnas. Layouts de dos columnas (texto + media). Hero expandido |
| `--bp-sm` | **640 px** | ⛔ **No se usa.** Solo se añadirá si un layout demuestra romperse entre 320 y 767 px, con justificación explícita |

**Solo 2 breakpoints.** No se añaden más sin una justificación clara. Con
tipografía fluida, espaciado fluido y grids intrínsecos, la mayoría de layouts no
los necesita: se diseña pensando en "cuándo el contenido deja de caber", no en
"qué móvil tiene el usuario".

### 3.2 ⚠️ Advertencia técnica: los tokens no funcionan en media queries

Las variables CSS **no se pueden usar dentro de una media query**. Esto **no es
válido**:

```css
/* ⛔ NO FUNCIONA */
@media (min-width: var(--bp-md)) { ... }
```

Sin preprocesador (decisión de 1.1), los breakpoints **no pueden ser tokens
operativos**. Solución adoptada:

1. **Esta SPEC es la fuente de verdad** (768 px, 1024 px).
2. En el código se escriben **literalmente** (`@media (min-width: 768px)`),
   acompañados de un **comentario de referencia**: `/* --bp-md */`.
3. **Coste aceptado:** si un breakpoint cambia, hay que localizarlo por el
   comentario. Se acepta a cambio de no añadir un preprocesador.
4. **Alternativa futura:** PostCSS permitiría centralizarlos. ⛔ No se añade
   ninguna dependencia ahora.

### 3.3 Comportamiento por elemento

| Elemento | Móvil (base, <768) | `--bp-md` (≥768) | `--bp-lg` (≥1024) |
| -------- | ------------------ | ---------------- | ----------------- |
| **Contenedores** | Padding fluido, ancho 100 % | Igual | Se limita al ancho máximo y se centra |
| **Grids** | 1 columna (o `auto-fit minmax(16rem,1fr)`) | 2 columnas | 3–4 columnas según contenido |
| **Tipografía** | Mínimo de la escala fluida | Crece por `clamp()` | Máximo de la escala fluida |
| **Navegación** | **Colapsada**: botón de menú + **panel vertical** bajo la cabecera (§3.4) | Completa si cabe | Completa siempre |
| **Cards** | Ancho completo, padding `lg` | 2 por fila | Según grid |
| **Imágenes** | Proporción móvil (Hero 4:5) | Intermedia | Amplia (Hero 16:9) |
| **Spacing** | `--gf-space-3xl` entre secciones | Fluido por `clamp()` | `--gf-space-4xl` |

Tipografía y spacing cambian **de forma continua** con `clamp()`: no dependen de
un breakpoint. La tabla solo muestra los extremos.

### 3.4 Menú móvil ✅ APROBADO

✅ **Decisión aprobada** (2026-09-10; §15.1 decisión 3). Patrón: **menú
desplegable vertical debajo de la cabecera**. ⛔ **No** se usa menú lateral
(*drawer*).

| Contexto | Comportamiento |
| -------- | -------------- |
| **Desktop** (desde `--bp-md`, 768 px) | Navegación **horizontal visible**; CTA visible según el diseño aprobado |
| **Móvil** (< `--bp-md`) | Navegación **inicialmente colapsada**; botón de menú → **panel vertical** bajo la cabecera con los elementos **en columna** |

**Requisitos obligatorios:**

1. **Botón de menú accesible**, visible y enfocable, **con nombre accesible**
   (`aria-label`).
2. **`aria-expanded`** en el botón, reflejando el estado abierto/cerrado.
3. **`aria-controls`** apuntando al panel cuando corresponda.
4. **El mismo control abre y cierra** el panel.
5. **Operable con teclado**: se abre y se cierra con teclado; `Escape` cierra y
   **devuelve el foco al botón**.
6. **El foco no escapa al contenido de detrás** mientras el panel está abierto.
7. ⛔ **No puede depender exclusivamente de `hover`** (en móvil no existe).
8. **Respeta `prefers-reduced-motion`** (§2.6): que la apertura no dependa de una
   animación para ser comprensible.
9. El panel es un **elemento flotante** → puede usar `--gf-shadow-md`, uno de los
   dos únicos casos previstos junto al visor de galería (§2.5).
10. **Estado inicial: cerrado.**

> ⚠️ **Trabajo pendiente:** la cabecera implementada en el Bloque 1 mantiene la
> navegación **visible y apilada** en móvil porque este patrón aún no estaba
> aprobado. Este apartado **sí lo aprueba**, así que implementar el panel pasa a
> ser trabajo del siguiente bloque de implementación (§15.3). ⛔ No se implementa
> en esta revisión documental.

---

## 4. Layout y contenedores ✅ APROBADO

✅ **Aprobado** (2026-09-10): container principal **1200 px**, container estrecho
**720 px**, padding horizontal fluido con `clamp()`, espaciado vertical de
secciones fluido, **mobile-first** y grids intrínsecos siempre que sea posible.

### 4.1 Anchos

| Token | Valor | Función |
| ----- | ----- | ------- |
| `--gf-container-max` | `75rem` (**1200 px**) | Ancho máximo del contenido general |
| `--gf-container-narrow` | `45rem` (**720 px**) | Bloques de lectura larga (historia, FAQ, texto legal) |
| `--gf-container-padding` | `clamp(1rem, 4vw, 2.5rem)` | **Padding horizontal** fluido (16 → 40 px) |
| `--gf-measure` | `68ch` | Ancho máximo de párrafo |

**Por qué 1200 px:** en monitores grandes, un contenido a 1600 px se vuelve
incómodo de leer y "vacío". 1200 px mantiene amplitud con control tipográfico.
Las secciones con imagen (Hero, galería) pueden ir **a sangre**, con el contenido
alineado a 1200 px: da sensación premium sin estirar el texto.

### 4.2 Reglas del contenedor

1. **Un único mecanismo de contenedor** (clase, no componente). Sin anchos
   máximos sueltos por sección.
2. **El padding es fluido**, así que **no hay breakpoint de contenedor**: el
   mismo contenedor funciona de 320 px a 4K.
3. **A partir de 1200 px + padding, se centra** y el espacio extra queda como
   margen exterior.
4. **Ninguna sección define su propio ancho máximo**; si necesita texto más
   estrecho, usa `--gf-container-narrow` o `--gf-measure` **dentro** del
   contenedor.
5. **El ancho del contenedor es independiente de la polaridad**: las secciones
   claras y oscuras comparten el mismo contenedor, y el cambio de fondo se
   extiende a todo el ancho de la banda.

### 4.3 Grids y columnas

1. **CSS Grid o Flexbox nativo.** Sin framework.
2. **Patrón por defecto:** `grid-template-columns: repeat(auto-fit, minmax(16rem, 1fr))`.
   Se adapta solo y a menudo **elimina la necesidad de breakpoint**.
3. **Columnas orientativas:** servicios 3–4, entrenadores 3–4, tarifas 2–3,
   galería 2–4.
4. **`gap` en lugar de márgenes**: `--gf-space-lg` en móvil, `--gf-space-xl`
   desde `--bp-md`.
5. **Sin grid de 12 columnas.** Maquinaria innecesaria para 5 páginas.
6. **Las cards de una fila, a la misma altura** (`align-items: stretch`).

### 4.4 Ritmo vertical entre secciones

| Token | Valor | Función |
| ----- | ----- | ------- |
| `--gf-section-padding-y` | `clamp(3rem, 7vw, 6rem)` | Padding vertical de sección (48 → 96 px) |

**Reglas:**

1. **Todas las secciones usan el mismo ritmo vertical.** La consistencia es lo
   que hace que una web parezca profesional.
2. **El espacio entre secciones es mayor que el espacio dentro de una sección**
   (regla práctica: padding de sección ≥ 2 × el mayor espaciado interno).
3. **Las bandas de fondo delimitan secciones sin bordes ni sombras**: `--gf-bg` /
   `--gf-bg-alt` en secciones oscuras, `--gf-bg-light` en las claras.
4. **Cambiar de polaridad ya es un separador**: no se añaden bordes ni
   degradados entre bandas.
5. **Se permite una sección "a sangre"** (Hero, franja de galería) como
   excepción.

### 4.5 Hero

1. **Altura:** ocupa una porción generosa del primer pantallazo pero **nunca
   obliga a hacer scroll para ver el CTA principal** (visible sin desplazamiento
   en un móvil de 360 × 640).
2. **El diseño no depende de la imagen** ✅ (aprobado 2026-09-10). Como los assets
   no existen (P-07), el Hero funciona **solo con fondo oscuro + tipografía +
   CTA**; la imagen será una mejora, no un requisito.
3. **El Hero es siempre oscuro** (regla 1 de 2.1.3): maximiza el contraste del
   CTA amarillo y asegura que la marca abre la web con la identidad fuerte.

---

## 5. Sistema de componentes

### 5.1 Criterio de decisión (evitar sobrearquitectura)

Un componente **solo existe** si cumple **al menos uno** de estos criterios:

| Criterio | Significado |
| -------- | ----------- |
| **Reutilización real** | Se usa en **2 o más sitios** con el mismo propósito |
| **Complejidad de accesibilidad** | Encapsula ARIA, foco o teclado que no debe reescribirse cada vez |
| **Contrato estable** | Tiene una API clara que otros componentes consumen |

Si no cumple ninguno: **marcado directo + clase CSS**. Un componente que solo
envuelve un `<div>` es coste sin beneficio.

### 5.2 Layout — **clases CSS, NO componentes React** ✅ APROBADA

| Clase | Función | Por qué no es componente |
| ----- | ------- | ------------------------ |
| `.gf-container` | Ancho máximo + padding lateral | Es una regla de CSS, no un contrato de datos |
| `.gf-section` | Ritmo vertical y polaridad | Idem |
| `.gf-grid` | Rejilla auto-adaptable | Idem |
| `.gf-cluster` | Grupo en línea con `gap` (icono + texto, botones) | Idem |

**Razón:** crear `Container`/`Section`/`Grid`/`Stack`/`Box`/`Flex` como
componentes es el patrón de un sistema de diseño en JavaScript. Aporta una capa
de indirección, componentes que mantener y **ningún beneficio** en CSS nativo.

### 5.3 Componentes que sí se construirán

| Componente | Estado | Motivo |
| ---------- | ------ | ------ |
| `Header` | ✅ **APROBADO** | Compone logo + navegación + CTA + botón de menú. Global (R-01) |
| `Footer` | ✅ **APROBADO** | Global (R-01), contenido propio y repetido |
| `Nav` | ✅ **APROBADO** | Se reutiliza en **dos** sitios: cabecera y pie |
| `SkipLink` | ✅ **APROBADO** | Accesibilidad con comportamiento propio (la sugerencia S-01 sigue sin aprobar, pero el componente está aprobado) |
| `Button` | ✅ **APROBADO** | Polimórfico `<a>` / `<button>` (SPEC-01 §8.6). 3 variantes, 5 estados |
| `Badge` | ✅ **APROBADO** | Varios usos (clases, categorías, "Recomendado"). Coste mínimo |
| `SectionHeading` | ✅ **APROBADO** | **Alto valor de accesibilidad**: centraliza y obliga la jerarquía de headings (SPEC-01 §8.5) |
| `Card` | ✅ **APROBADO** | Base común de servicios, entrenadores y tarifas (sección 7) |
| `GalleryItem` | ✅ **APROBADO** | **No** es una card: imagen clicable que abre el visor. Anatomía distinta |
| `Icon` | ✅ **APROBADO (P-17 cerrada)** | Componente reutilizable que **centraliza los SVG propios** del proyecto. Reglas en 8.6. **Se implementará en un bloque posterior** (§15.1, decisión 4) |
| `Logo` | 🟡 **PENDIENTE (P-06)** | Depende de que exista marca. Hoy "GymFit" es provisional |

### 5.4 Componentes de contenido diferidos

| Componente | Estado | Motivo |
| ---------- | ------ | ------ |
| `ServiceCard` | 🟡 **Diferido** | Se implementa primero como variante de `Card`. Solo se separa si su marcado diverge de verdad |
| `TrainerCard` | 🟡 **Diferido** | Idem (variante con imagen vertical) |
| `PricingCard` | 🟡 **Diferido** | Idem (precio + lista + CTA). Es la que más probabilidad tiene de justificar componente propio |
| `ContactInfo` / `ContactBlock` | ⛔ **No** | Es un patrón de marcado (filas de etiqueta + valor), no un componente |
| `ServiceList`, `TrainerList`… | ⛔ **No** | Un `map()` y un grid lo resuelven |

**Recomendación explícita:** empezar con **un solo `Card`** con 3 variantes
(`--media`, `--icon`, `--pricing`) en lugar de 4 componentes casi idénticos.
**Criterio para dividir:** cuando una variante necesite **lógica propia** o su
marcado diverja en más de la mitad.

### 5.5 ⛔ Qué NO se va a construir

| ⛔ No construir | Motivo |
| --------------- | ------ |
| `Link` (envoltorio de `<a>`) | El `<a>` ya existe; cuando llegue el routing, lo hará el `Link` del router |
| `Text`, `Heading`, `Title` | Envolver etiquetas HTML añade indirección sin valor |
| `Box`, `Flex`, `Stack`, `Spacer` | Es el patrón de un sistema de diseño en JS; en CSS nativo se resuelve con clases |
| `Divider` | Es un borde en CSS |
| `Modal` / `Dialog` | Solo se necesita para el visor de galería, aún sin especificar |
| `Carousel` | La galería y sus patrones no están aprobados |
| `Accordion` | El FAQ de Tarifas no está aprobado |
| Campos de formulario | **No hay formulario** (P-03 aprobado) |
| `ThemeProvider` / selector de tema | No hay cambio de tema por el usuario. La polaridad es **de la sección**, no una preferencia (2.1.3) |
| `Tooltip`, `Dropdown`, `Tabs` | Ningún caso de uso aprobado |
| Un componente de icono por servicio | **Inventar un icono por servicio es contenido no aprobado.** Los iconos genéricos de interfaz (teléfono, correo, ubicación, reloj, WhatsApp) **sí** se permiten |

**Regla general:** no se convierte cada pequeño elemento visual en un componente
React.

### 5.6 Reglas generales para cualquier componente

1. **Nunca contiene valores literales:** solo tokens.
2. **Nunca decide su propio margen exterior**: el espaciado lo decide el
   contenedor (`gap`).
3. **El estado se expone con ARIA**, no con clases ad-hoc.
4. **Los estados interactivos son visibles con teclado**, no solo con ratón.
5. **Un componente no asume su polaridad.** Consume tokens semánticos y funciona
   igual en sección clara y oscura (2.1.3, regla 6).
6. **Los componentes no conocen copy concreto**: textos y datos vienen de fuera
   (encaja con R-07).
7. **Sin `!important`.**

---

## 6. Botones y enlaces

### 6.1 Botón primario ✅ (identidad aprobada en SPEC-01)

| Aspecto | Valor |
| ------- | ----- |
| Fondo | `--gf-accent` (`#F5C400`) |
| Texto | `--gf-text-on-accent` (**negro**) — regla obligatoria |
| Contraste del texto | **12,40:1** ✅ |
| Radio | `--gf-radius-md` (8 px) |
| Padding | `--gf-space-sm` / `--gf-space-lg` (12 px 24 px) |
| Peso | `--gf-weight-bold` (700) |
| Altura mínima | **44 px** |
| Mayúsculas | 🟡 pendiente (2.2.8) |

### 6.2 Estados del botón primario en sección OSCURA

| Estado | Fondo | Texto | Notas |
| ------ | ----- | ----- | ----- |
| **Default** | `#F5C400` | negro | 12,40:1 · **sin borde**: el relleno ya contrasta con el fondo |
| **Hover** | `#FFD633` (**aclarar**) | negro | **14,48:1** ✅ |
| **Focus** | igual | igual | Anillo **blanco** de 2 px con 2 px de separación (`--gf-focus-ring-on-accent`) |
| **Active** | `#D8AC00` | negro | **9,53:1** ✅ |
| **Disabled** | `--gf-disabled-bg` | `--gf-disabled-text` | `aria-disabled`, 4,52:1 |

> **Por qué el foco es blanco:** un anillo amarillo sobre un botón amarillo da
> **1:1**, es decir, invisible. El anillo blanco da 20,38:1 sobre el fondo y se
> separa del botón por los 2 px de fondo oscuro. Es la respuesta al requisito
> abierto de SPEC-01 §8.3.

### 6.3 Botón secundario

| Aspecto | Valor |
| ------- | ----- |
| Fondo | Transparente |
| Borde (sección oscura) | `1px solid --gf-border-strong` (`rgba(255,255,255,0.40)`) → **3,71:1** ✅ |
| Borde (sección clara) | `1px solid --gf-border-strong-onlight` (`rgba(5,5,5,0.50)`) → **3,84:1** ✅ |
| Texto | `--gf-text` / `--gf-text-onlight` |

**Por qué el borde es al 40 % y no "sutil":** medido, un borde al 20 % da
**1,71:1** y **falla**. En un botón de contorno, **el borde es lo único que
identifica el componente**, así que le aplica el mínimo de 3:1. Es el caso donde
"diseño elegante" y "accesibilidad" chocan, y gana la accesibilidad.

**Estados:** hover → fondo `--gf-overlay-hover` (texto blanco ≥18:1 ✅) y borde
`--gf-text` · focus → anillo amarillo (oscuro) / negro (claro) · active → fondo
`--gf-overlay-active` · disabled → igual que el primario.

> **Nota (revisión 2):** las versiones anteriores de este apartado citaban
> `rgba(255,255,255,0.06)` y `0.10` como literales. Prevalece la regla "ningún
> valor literal en componentes" (§1.3), así que los estados se expresan con los
> tokens `--gf-overlay-hover` (5 %) y `--gf-overlay-active` (8 %) definidos en
> §2.1.4. Diferencia visual imperceptible (ver §15.2, discrepancia 6).

### 6.4 Botón de texto / enlace de acción

| Aspecto | Valor |
| ------- | ----- |
| Fondo | Ninguno |
| Texto | `--gf-text` con **subrayado** |
| Hover | Color de acento **manteniendo el subrayado** |
| Área táctil | ≥ 44 px mediante padding |

**Regla:** el hover **no puede depender solo del color**. Si el color fuera la
única diferencia, se incumpliría "no usar el color como único portador de
información". Por eso el subrayado **permanece**.

### 6.5 Enlaces dentro de texto

| Aspecto | Valor |
| ------- | ----- |
| Color (sección oscura) | `--gf-accent` (**12,40:1** ✅) |
| Color (sección clara) | ⛔ **Nunca amarillo.** `--gf-text-onlight` (`#050505`, 20,38:1 ✅) con subrayado |
| Subrayado | **Sí, por defecto** en cuerpo de texto |
| Hover | El subrayado se refuerza; se permite variar color o grosor |

**Regla de accesibilidad:** en el cuerpo de texto, un enlace debe distinguirse
**sin depender del color** (WCAG 1.4.1). El subrayado es la señal. Excepciones:
navegación, pie, botones y CTA, que ya se identifican por contexto y forma.

### 6.6 CTA primario y secciones claras ✅ APROBADO

✅ **Decisión aprobada** (2026-09-10):

> **El CTA primario amarillo se utiliza preferentemente sobre fondos oscuros.**
> En secciones claras se prioriza el **CTA secundario**, un **enlace** o un
> **componente/card oscura**. **No se fuerza** el CTA primario amarillo sobre un
> fondo claro si eso complica el contraste o la jerarquía visual.

**Motivo (medido):** el amarillo relleno sobre blanco da **1,64:1**, así que el
botón casi no se distingue del fondo. Comprobado:

| Situación | Contraste del relleno con el fondo |
| --------- | ---------------------------------- |
| `#F5C400` sobre blanco | 1,64:1 |
| Hover aclarando (`#FFD633`) sobre blanco | **1,41:1** (empeora) |
| Hover oscureciendo (`#D8AC00`) sobre blanco | **2,14:1** (mejora) |

**Reglas aprobadas:**

1. **Uso preferente del CTA primario amarillo sobre fondos oscuros.**
2. En secciones claras se prioriza, en este orden: **CTA secundario → enlace →
   card oscura** que contenga el CTA.
3. Si excepcionalmente se usara el CTA primario sobre fondo claro, **llevaría
   borde funcional** (`--gf-border-strong-onlight`, `rgba(5,5,5,0.50)`,
   **3,84:1**) y su **hover oscurecería** (`#D8AC00`). Es un recurso documentado,
   **no** un uso previsto.
4. **El foco en sección clara usa `--gf-focus-ring-onlight` (negro)**, que
   funciona para todo: 20,38:1 sobre el fondo blanco y **12,40:1 sobre el botón
   amarillo**.
5. **La coherencia del CTA no se rompe** (SPEC-01, P-02): el texto "Únete ahora"
   y su destino `/contacto` siguen siendo los mismos en toda la web; lo que
   cambia es el **peso visual** según la polaridad de la sección.

### 6.7 Tamaños

**Máximo 2 tamaños.**

| Tamaño | Altura | Uso |
| ------ | ------ | --- |
| **md** (por defecto) | 44 px | Todo el sitio. Cumple el mínimo táctil |
| **lg** | 52 px | Solo el CTA del Hero |

---

## 7. Cards

### 7.1 Estrategia: una base común, pocas variantes ✅ APROBADA

**Problema a evitar:** que la card de servicio, la de entrenador y la de tarifas
acaben siendo **tres diseños distintos** que no parecen de la misma web.

**Decisión:** una **base común** (`Card`) para servicios, entrenadores y tarifas,
con variantes **solo cuando la estructura de contenido difiere**. La galería
**no** usa `Card`.

✅ **Aprobado** (2026-09-10): `Card` base con variantes. **No** se crea un
componente independiente por tipo de card salvo que exista **lógica o
comportamiento realmente diferente**.

### 7.2 Base común

| Elemento | Token |
| -------- | ----- |
| Superficie (sección oscura) | `--gf-surface` (`#111111`) |
| Superficie (sección clara, opción A) | `--gf-surface-onlight` (blanco) |
| Superficie (sección clara, opción B) | `--gf-surface-inverse` (`#111111`) |
| Borde | `1px solid --gf-border` (oscuro) / `--gf-border-onlight` (claro) — decorativo |
| Radio | `--gf-radius-lg` (12 px) |
| Padding | `--gf-space-lg` (24 px) |
| Sombra | **Ninguna** en sección oscura; `--gf-shadow-sm` opcional en clara (opción A) |
| Separación interna | `gap: --gf-space-sm` / `--gf-space-md` |
| Altura | Igualada por el grid de la fila |
| Media (imagen) | Arriba, a sangre dentro de la card, `--gf-radius-md` |

**Anatomía compartida:** media (opcional) → eyebrow/badge (opcional) → título
(`h3`) → cuerpo (texto secundario, 2–3 líneas) → meta/pie (opcional).

### 7.3 Las dos opciones de card en sección clara 🟡

| Opción | Descripción | Contraste de separación | Cuándo |
| ------ | ----------- | ----------------------- | ------ |
| **A — Card blanca** | Superficie blanca + borde decorativo + sombra opcional | Borde 1,31:1 (decorativo, suficiente) | Secciones claras serenas y de mucho texto |
| **B — Card oscura** | Card `#111111` sobre fondo blanco, texto claro | **18,88:1** (separación muy fuerte) | Máximo impacto; enlaza visualmente con la identidad negra |

**Regla:** **no se mezclan A y B en la misma página.** Unificar por página, para
que la sección clara no parezca un collage.

### 7.4 Variantes

| Variante | Dónde | Qué cambia | ¿Componente propio? |
| -------- | ----- | ---------- | ------------------- |
| `--media` | Servicios con foto, Entrenadores | Media superior con proporción fija | 🟡 No por ahora |
| `--icon` | Servicios sin foto | La media se sustituye por un icono SVG | 🟡 No por ahora |
| `--pricing` | Tarifas | **Bloque de precio** + **lista de características** + **CTA** | 🟡 Probable, se decide al implementar |
| — | Bloque de texto simple | Solo superficie + borde | — |

**Regla para una variante nueva:** solo si **cambia la estructura del contenido**,
no si cambia el texto o el color. Un "servicio destacado" no es una variante: es
el mismo componente con un `Badge`.

### 7.5 Interacción

| Tipo de card | Hover | Notas |
| ------------ | ----- | ----- |
| **No interactiva** | **Ninguno** | Si no lleva a ningún sitio, no reacciona |
| **Interactiva** (toda la card es enlace) | Borde más marcado + realce sutil | **Sin desplazamiento ni escala** |
| **Con enlace interno** | Hover en el enlace, no en la card | Evita dos affordances contradictorias |

**Accesibilidad:** si toda la card es clicable, **debe haber un único elemento
enfocable** (el enlace del título), no un `<div>` con `onClick`. Un `<div>`
clicable no se alcanza con teclado ni se anuncia como enlace.

### 7.6 Card de tarifas: el plan recomendado

El plan destacado **no puede distinguirse solo por el color** (SPEC-01 §8.8 y
S-04, pendiente). Combinación propuesta: fondo alterno + borde de acento +
`Badge` textual ("Recomendado") + posición privilegiada.

**Además, en sección clara el amarillo tampoco sirve como indicador** (1,64:1,
medido): allí el plan recomendado se distingue con `Badge`, peso tipográfico,
borde oscuro y posición — **no** con amarillo.

---

## 8. Imágenes y contenido visual

### 8.1 Reglas generales (todas las imágenes)

1. **Proporción fijada con `aspect-ratio`**, nunca por la imagen de origen.
2. **`object-fit: cover` por defecto**; `contain` **solo** para logotipos y
   gráficos que no se pueden recortar.
3. **`object-position` centrado** por defecto; ajustable cuando el sujeto quede
   cortado.
4. **Siempre `width`/`height` o `aspect-ratio`** para **reservar el espacio** y
   evitar saltos de layout (SPEC-01 §7.4).
5. **Formatos modernos** (AVIF/WebP) con alternativas y tamaño adaptado.
6. **Carga diferida** por debajo del primer pantallazo.
7. ⛔ **Prohibido incrustar texto en imágenes** (precios, promociones): no es
   accesible, ni traducible, ni indexable.
8. **Texto alternativo** según SPEC-01 §8.4 (decorativas `alt=""`; informativas,
   descriptivas y en español).
9. **Ninguna imagen es imprescindible** para entender la página.
10. ⛔ **Prohibido emoji como icono** y capturas de stock que "simulen"
    instalaciones inexistentes.

### 8.2 Proporciones por tipo 🟡

| Tipo | Proporción | `object-fit` | Uso |
| ---- | ---------- | ------------ | --- |
| **Entrenadores** | **3:4** | cover | Retrato; recorta bien de pie y medio cuerpo |
| **Servicios** | **4:3** | cover | Instalación/actividad con contexto |
| **Instalaciones / galería** | **3:2** y **4:3** | cover | Ver 8.4 |
| **Hero (desktop)** | **16:9** | cover | Imagen amplia y potente |
| **Hero (móvil)** | **4:5** | cover | Recorte vertical, más impacto |
| **Tarifas** | Sin imagen | — | El precio y las características son el contenido |
| **Open Graph** | 1200 × 630 | cover | Compartir en redes (SPEC-01 §9.6) |

### 8.3 Texto sobre imágenes

1. **`--gf-scrim` obligatorio** (capa oscura sobre la imagen).
2. **El contraste se verifica contra la imagen real**, en su punto más claro, no
   contra el color medio.
3. **El texto sobre imagen no puede ser la única forma de transmitir algo
   crítico** si el contraste no se garantiza.
4. Si el asset no permite cumplir contraste, **se cambia la imagen**, no la
   exigencia de accesibilidad.
5. **Un Hero oscuro con `--gf-scrim` es coherente en ambas polaridades** porque
   el Hero siempre es oscuro (2.1.3, regla 1).

### 8.4 Galería: adaptarse a cualquier proporción sin romper el diseño

**Regla clave:** el contenedor **impone** la proporción y la imagen **se adapta**,
nunca al revés.

| Decisión | Valor |
| -------- | ----- |
| Patrón por defecto | **Rejilla uniforme** con `aspect-ratio` fijo en cada celda y `object-fit: cover` |
| Columnas | 1–2 móvil · 2–3 tablet · 3–4 desktop |
| Proporción de celda | 4:3 en móvil, 3:2 en desktop (o una única proporción para máxima uniformidad) |
| Imágenes de proporción distinta | **Se recortan** para encajar: es la única forma de que una galería con fotos heterogéneas se vea ordenada |
| Tile destacado (opcional) 🟡 | Un elemento puede ocupar 2 columnas y/o 2 filas con su propia proporción |
| Masonry / alturas libres | ⛔ **Descartado**: rompe la uniformidad, complica el orden de lectura y el foco del teclado |

**Por qué importa:** las fotos reales llegarán en proporciones imprevistas
(P-07). Con `aspect-ratio` + `cover`, **cualquier foto encaja sin tocar CSS**.

**Accesibilidad:** si se abre un visor ampliado, debe cerrarse con `Escape`,
devolver el foco al elemento que lo abrió y gestionar el foco mientras está
abierto (SPEC-01 §8.2).

### 8.5 Hero sin assets disponibles ✅ APROBADO

1. **El Hero se diseña primero sin imagen**: fondo `--gf-bg` + tipografía display
   + CTA. Debe verse **intencionado**, no "inacabado".
2. **La imagen, cuando llegue, se añade encima** con `--gf-scrim`, **sin cambiar
   la estructura**: no habrá que rehacer el Hero.
3. ⛔ **No se generan imágenes** ni se descargan placeholders de stock para
   rellenar.

### 8.6 Reglas para SVG e iconos ✅ (P-14 aprobada)

**Decisión aprobada: se usan SVG propios. No se instala ninguna librería de
iconos.**

#### Construcción

| Regla | Detalle |
| ----- | ------- |
| Formato | **SVG en línea** (inline), dentro del componente `Icon` |
| Rejilla | **24 × 24** de `viewBox`, para que todos los iconos sean coherentes |
| Trazo | Iconos de **línea**: `fill="none"`, `stroke-width: 2`, extremos y uniones redondeados |
| Color | **`currentColor`**, para que el icono herede el color del texto. Los colores salen de tokens |
| Tamaño | Se controla con `width`/`height` en `rem`/`em` (tokens de icono), nunca con atributos rígidos |
| Simplificación | Sin metadatos del editor, sin capas ocultas, sin grupos innecesarios |
| Identificadores internos | Si un SVG lleva `id` (máscaras, degradados), debe ser **único** para evitar colisiones al estar en línea |

#### Tamaños

| Token | Valor | Uso |
| ----- | ----- | --- |
| `--gf-icon-sm` | `1rem` (16 px) | Icono junto a texto pequeño, badges |
| `--gf-icon-md` | `1.25rem` (20 px) | **Por defecto**: navegación, botones, filas de contacto |
| `--gf-icon-lg` | `1.5rem` (24 px) | Destacados y encabezados de bloque |

#### Accesibilidad de los SVG (obligatorio)

1. **Icono decorativo** (acompaña a texto que ya dice lo mismo): `aria-hidden="true"`
   y `focusable="false"`. Debe ser el caso **más habitual**.
2. **Icono con significado propio** (sin texto visible a su lado): necesita
   **nombre accesible** mediante `aria-label` en el elemento interactivo o un
   texto visible solo para lectores de pantalla (`.gf-visually-hidden`).
3. **Botón solo con icono**: obligatorio `aria-label` descriptivo en español.
   ⛔ Nunca un botón cuyo único contenido sea un SVG sin nombre accesible.
4. ⛔ **No se usa `<title>` como única fuente del nombre accesible** en elementos
   interactivos: es inconsistente entre lectores de pantalla. Si se usa, debe ir
   con `role="img"` y `aria-labelledby`.
5. ⛔ **Ningún estado o significado se comunica solo con un icono.** El icono
   refuerza; el texto (o el nombre accesible) comunica.
6. **El icono hereda el contraste del texto** al usar `currentColor`: si el texto
   cumple, el icono cumple.
7. **Los iconos que transmiten información** (por ejemplo los de contacto)
   mantienen el contraste de componente ≥ 3:1 frente a su fondo.
8. ⛔ **Prohibido usar emoji como icono**: el aspecto depende del sistema
   operativo y no es coherente con la identidad.

#### Origen y licencias

1. **Se dibujan iconos propios** o, si se copia alguno, debe proceder de un set
   con licencia compatible (**OFL, MIT o CC0**) y **documentarse su licencia y
   atribución** en el proyecto.
2. ⛔ **No se instala una librería de iconos** ni se usan fuentes de iconos.
3. **El set se mantiene pequeño y coherente**: si un icono no encaja en la
   rejilla de 24 px ni en el trazo de 2 px, no entra.
4. **La ubicación física de los archivos de iconos** corresponde a la SPEC de
   estructura de carpetas; aquí solo se fijan las reglas de construcción y uso.

---

## 9. Estética general

### 9.1 Dirección ✅ (aprobada en el brief)

**moderna + deportiva + profesional + potente + limpia**, con el negro `#050505`
como protagonista y el amarillo `#F5C400` reservado a acento y conversión.

### 9.2 Traducción a decisiones concretas

| Objetivo | Decisión de sistema |
| -------- | ------------------- |
| **Moderna** | CSS nativo moderno, `clamp()`, grid intrínseco, tipografía fluida, cero framework |
| **Deportiva** | Headings condensados en mayúsculas cortas, alto contraste, fotografía protagonista, ritmo amplio |
| **Profesional** | Pocos colores, jerarquía tipográfica clara, espaciado consistente, cero adornos |
| **Potente** | Titulares grandes, bordes definidos, contraste extremo, nada "pastel" |
| **Limpia** | Sin sombras en cards oscuras, sin degradados decorativos, sin texturas, mucho aire |

### 9.3 Cuánto color, dónde (guía cuantitativa) ✅

Con el modelo de dos polaridades (2.1.3):

| Regla | Valor |
| ----- | ----- |
| **El negro y sus derivados dominan** | **≥ 65–70 %** de la superficie de una página |
| **Las secciones claras son minoría** | Máximo **1–2 por página**, nunca consecutivas, **≤ ~35 %** de las secciones |
| **El amarillo se limita al ~10 %** del área visible | CTA, *eyebrows*, acentos e indicadores (donde es válido) |
| **El amarillo nunca es fondo** | Ni de sección, ni de card completa, ni de bloque grande |
| **Siempre oscuros** | Cabecera, pie, Hero y CTA final |
| **Máximo 2 colores visibles simultáneamente** además de negro/blanco | Más colores = pierde "premium" |

**Por qué el objetivo del 65–70 % de negro:** el brief pide que el negro tenga
"bastante protagonismo". Las secciones claras existen para dar **ritmo**, no para
repartirse la web al 50 %. Si una página acaba con más blanco que negro, se ha
perdido la identidad.

### 9.4 ⛔ Lista de prohibiciones (anti-patrones)

**Aspecto de plantilla genérica:**

1. Tipografía por defecto del sistema para los titulares (opción F de 2.2.9).
2. Bloques de icono + título + párrafo repetidos con idéntico peso visual.
3. Hero con "Bienvenido a nuestra web" centrado sobre imagen de stock.

**Aspecto de aplicación SaaS:**

4. Botones tipo píldora con sombra y degradado.
5. Tarjetas con sombra difusa grande y radios de 16–24 px.
6. Ilustraciones vectoriales genéricas de personas haciendo ejercicio.
7. Colores de acento extra (violeta, azul, verde) para "diferenciar secciones".
8. Fondos con degradados de color.

**Aspecto infantil:**

9. Tipografías redondeadas o caligráficas.
10. Emoji como iconos.
11. Colores saturados múltiples.
12. Animaciones juguetonas (rebotes, rotaciones, confeti).

**Exceso:**

13. Sombra en cada card.
14. Animación de entrada en cada sección al hacer scroll.
15. Más de 3 niveles de jerarquía tipográfica compitiendo en un mismo bloque.

**Mal uso de la polaridad (nuevo):**

16. Alternar polaridad dentro de un mismo bloque o tarjeta.
17. Poner más de 1–2 secciones claras por página, o encadenar dos seguidas.
18. Usar el amarillo como indicador de estado sobre fondo claro (1,64:1).
19. Dejar que las secciones claras ganen peso al negro.

### 9.5 Coherencia con SPEC-01

Esta dirección **no cambia** el alcance, las páginas, las secciones ni los CTA
aprobados. Es la traducción visual de lo ya aprobado.

---

## 10. Accesibilidad visual

> **Se heredan todas las decisiones de SPEC-01 §8 y §10.5 y no se contradice
> ninguna.** Aquí se concretan para el sistema visual.

### 10.1 Contraste ✅

| Regla | Verificación |
| ----- | ------------ |
| Cuerpo de texto ≥ 4,5:1 | Oscuro: blanco 20,38:1 · `#A3A3A3` 8,08:1 / 7,49:1. Claro: `#050505` 20,38:1 · `#525252` 7,81:1 |
| Texto grande ≥ 3:1 | Cubierto por lo anterior |
| **Límites de componentes ≥ 3:1** | Oscuro: `--gf-border-strong` 40 % = **3,71:1** ✅. Claro: `--gf-border-strong-onlight` 50 % = **3,84:1** ✅. Un borde al 20 % (1,71:1) **no cumple** |
| **Indicador de foco ≥ 3:1** | Oscuro: amarillo 12,40:1; sobre botón amarillo, blanco 20,38:1. Claro: negro 20,38:1 (y 12,40:1 sobre el botón amarillo) |
| **Estados (activo, seleccionado) ≥ 3:1** | Oscuro: amarillo ✅. **Claro: el amarillo NO (1,64:1)** → se usa `#525252` (7,81:1), peso o subrayado |
| Texto sobre imágenes ≥ 4,5:1 | `--gf-scrim` obligatorio + verificación contra la imagen real |
| ⛔ Combinaciones prohibidas | Ver 2.1.8 |

### 10.2 Foco visible

1. **Todo elemento interactivo tiene indicador de foco visible** (SPEC-01 §8.3).
2. **Tres tokens de anillo:** `--gf-focus-ring` (oscuro, por defecto),
   `--gf-focus-ring-on-accent` (blanco, sobre elemento amarillo en sección
   oscura) y `--gf-focus-ring-onlight` (negro, secciones claras — **sirve para
   todo**, incluido el botón amarillo).
3. **Anillo de 2 px con 2 px de separación.**
4. ⛔ **Nunca `outline: none` sin sustituto.**
5. **El foco debe verse con teclado**; no se depende de `:hover`.

> **Resuelto aquí:** el requisito abierto de SPEC-01 §8.3 (el contorno amarillo no
> sirve como indicador sobre fondo claro) queda resuelto con los tres tokens.

### 10.3 Estados hover / focus / active

| Regla | Motivo |
| ----- | ------ |
| El hover **nunca es la única forma** de descubrir algo | En móvil no existe hover |
| **Ningún estado se comunica solo con color** | WCAG 1.4.1. Especialmente crítico con el amarillo sobre fondos claros |
| Hover y focus **se distinguen entre sí** | Si son idénticos, el usuario de teclado no sabe dónde está |
| El estado *active* es perceptible pero **no desplaza** el layout | Evita saltos molestos |
| **`:focus-visible`**, no `:focus` | Evita anillos al hacer clic con ratón |

### 10.4 Tamaño mínimo de interacción ✅

1. **44 × 44 px mínimo** (SPEC-01 §7.2).
2. Los botones lo cumplen por altura mínima; los **enlaces dentro de texto** son
   la excepción razonable (WCAG exime el contenido en línea), pero los enlaces de
   acción y navegación sí lo cumplen mediante padding.
3. **Separación mínima entre elementos táctiles** para evitar pulsaciones
   accidentales.

### 10.5 Legibilidad

1. **Cuerpo mínimo 16 px** y **nunca pesos < 400 sobre fondo oscuro**.
2. **Longitud de línea 60–75 caracteres** (`--gf-measure`).
3. **Alineación a la izquierda** (nada de justificado).
4. **Contraste del texto secundario verificado por polaridad**: `#A3A3A3` válido
   sobre oscuro (8,08:1) y **prohibido** sobre claro (2,52:1); en claro se usa
   `#525252` (7,81:1).
5. **Nada de texto sobre fondos con textura o degradado** sin `--gf-scrim`.

### 10.6 Reducción de movimiento

1. Se respeta `prefers-reduced-motion` (base existente en
   `src/styles/global.css`).
2. **Con movimiento reducido:** se mantienen los cambios de color y opacidad
   (informativos) y se eliminan desplazamientos y transiciones largas.
3. **Ninguna información depende de una animación.**
4. **Sin animaciones automáticas en bucle**, sin *parallax*, sin *scroll-jacking*.

### 10.7 Comportamiento en zoom

1. **Tamaños en `rem`/`em`**, no en `px` fijos.
2. **Usable al 200 % de zoom sin pérdida de contenido ni funcionalidad.**
3. **Sin alturas fijas en contenedores de texto** ni `overflow: hidden` que
   recorte el texto al crecer.
4. **Ninguna información solo en `background-image`.**
5. **Rejillas que se reordenan solas** (`auto-fit`/`minmax`) en lugar de anchos
   rígidos.

### 10.8 Modo de alto contraste

1. La web **no depende del color** para funcionar: bordes y contornos siguen
   existiendo.
2. Se respeta `forced-colors` del sistema: no se fuerzan colores propios sobre
   los del usuario en ese modo.
3. **El foco sigue siendo visible** con colores forzados.
4. **La polaridad no se rompe**: el texto sigue siendo legible si el sistema
   fuerza sus propios colores de fondo y texto.

---

## 11. Decisiones

### 11.1 Decisiones APROBADAS ✅

#### C-01 — "bootstrap simple" ✅ RESUELTA

- **Confirmado:** la expresión **no** se refería al framework Bootstrap.
- **Decisión:** "CSS propio + reset/base styles + variables CSS + tokens +
  utilidades mínimas". **No se instala Bootstrap ni ninguna otra librería de
  estilos.**
- **Aplicado en:** secciones 1.1, 1.2 y 1.4.
- **Fecha:** 2026-09-10.

#### P-12 — Sistema base de estilos ✅ APROBADA

- **Decisión:** **capa base propia.** No Bootstrap. No Tailwind. No librería
  externa de componentes.
- **Definido en:** 1.4 (contenido de la capa base) y 1.5 (organización).
- **Fecha:** 2026-09-10.

#### P-14 — Iconografía ✅ APROBADA

- **Decisión:** **SVG propios.** No se instala ninguna librería de iconos por
  ahora.
- **Definido en:** 8.6 — reglas de construcción (rejilla 24 × 24, trazo 2 px,
  `currentColor`), 3 tamaños con token, y **reglas de accesibilidad**
  (`aria-hidden` para decorativos, nombre accesible obligatorio para iconos con
  significado y botones solo-icono, prohibición de `<title>` como única fuente,
  prohibición de emoji como icono).
- **Aplicado también en:** 5.3 (`Icon`, aprobado con P-17) y 5.5.
- **Fecha:** 2026-09-10.

#### P-15 — Modelo de polaridad visual ✅ APROBADA

- **Decisión:** **tema oscuro dominante + secciones claras minoritarias.**
- **Reglas aprobadas:**
  1. `#050505` sigue siendo el color principal y protagonista.
  2. **Cabecera, Hero, CTA final y Footer serán oscuros.**
  3. Podrán existir **1–2 secciones claras por página** cuando aporten contraste
     y ritmo visual.
  4. **No habrá secciones claras consecutivas.**
  5. **No se introducirán colores nuevos innecesarios** (la polaridad clara
     reutiliza `#FFFFFF`, `#050505` y `#525252`).
  6. Se respetan las **reglas de contraste de SPEC-01**.
  7. **Los componentes deben funcionar correctamente tanto sobre fondos oscuros
     como claros** (no conocen su polaridad: consumen tokens).
- **Definido en:** 2.1.3, 2.1.5, 7.3 y 9.3.
- **Fecha:** 2026-09-10.

#### P-16 — Pareja tipográfica ✅ APROBADA

- **Decisión:** **Barlow Condensed + Inter.**
- **Uso aprobado:** Barlow Condensed en **headings/titulares**; Inter en **body,
  navegación, información, precios y contenido general**.
- **Pesos aprobados:** Barlow Condensed **600, 700, 800**; Inter **400, 500,
  600**.
- ⛔ **No se usa Barlow 900** ni **Inter por debajo de 400**.
- **Definido en:** 2.2.1–2.2.9.
- **Fecha:** 2026-09-10.

#### P-13 — Carga de tipografías ✅ APROBADA (estrategia)

- **Decisión:** **tipografías autoalojadas en WOFF2**, con subconjunto **latino**,
  `font-display: swap`, **precarga únicamente de las fuentes críticas**, fallback
  adecuado y medidas para minimizar el **CLS**.
- **Alcance de la aprobación:** se aprueba la **estrategia**. **La implementación
  física de los archivos** (descarga, subconjunto y licencias) se realizará
  **durante la implementación**, no ahora.
- **Definido en:** 2.2.10.
- **Fecha:** 2026-09-10.

#### Derivados del amarillo ✅ APROBADOS

- **Decisión:** `#FFD633` (**hover**) y `#D8AC00` (**active**) forman parte del
  sistema visual como **estados derivados** del amarillo principal `#F5C400`.
- ⛔ **No se utilizan como colores decorativos independientes** ni amplían
  innecesariamente la paleta.
- **Definido en:** 2.1.2.
- **Fecha:** 2026-09-10.

#### CTA primario y secciones claras ✅ APROBADO

- **Decisión:** el CTA primario amarillo se utiliza **preferentemente sobre fondos
  oscuros**. En secciones claras se prioriza: **CTA secundario**, **enlace** o
  **componente/card oscura**. **No se fuerza** el CTA primario amarillo sobre un
  fondo claro si eso complica el contraste o la jerarquía visual.
- **Motivo medido:** el relleno amarillo sobre blanco da **1,64:1**.
- **Definido en:** 6.6 (y 2.1.3, 2.1.7).
- **Fecha:** 2026-09-10.

#### Breakpoints y layout ✅ APROBADOS

- **Breakpoints:** móvil `< 768 px`, tablet `768–1023 px`, desktop `≥ 1024 px`.
  **No se añaden más** salvo justificación real durante la implementación.
- **Layout:** container principal **1200 px**, container estrecho **720 px**,
  padding horizontal fluido con `clamp()`, espaciado vertical de secciones
  fluido, **mobile-first** y **grids intrínsecos** siempre que sea posible.
- **Definido en:** secciones 3 y 4.
- **Fecha:** 2026-09-10.

#### Sistema de componentes ✅ APROBADO

- **Componentes aprobados:** `Header`, `Footer`, `Nav`, `SkipLink`, `Button`,
  `Badge`, `SectionHeading`, `Card`, `GalleryItem`.
- **Los patrones de layout** (`Container`, `Grid`, `Stack`, etc.) **permanecen
  como CSS**: no se convierten automáticamente en componentes React.
- **Se mantiene una arquitectura sencilla: no sobrearquitecturar.**
- **Definido en:** 5.2, 5.3 y 5.5.
- **Fecha:** 2026-09-10.

#### Cards ✅ APROBADO

- **Decisión:** `Card` base **con variantes** cuando sea necesario. **No** se crea
  un componente completamente independiente por tipo de card salvo que exista
  posteriormente **lógica o comportamiento realmente diferente**.
- **Definido en:** 7.1 y 7.4.
- **Fecha:** 2026-09-10.

#### Hero ✅ APROBADO

- **Decisión:** el Hero se diseña **inicialmente sin depender de assets reales**.
  Posteriormente podrá incorporar una imagen real **sin modificar la arquitectura
  general**.
- **Definido en:** 4.5 y 8.5.
- **Fecha:** 2026-09-10.

### 11.2 Decisiones que siguen PENDIENTES (SPECs posteriores) 🟡

| # | Pendiente | Dónde | Qué lo resolverá |
| - | --------- | ----- | ---------------- |
| — | **Opción de card en sección clara**: A (blanca) o B (oscura), sin mezclar ambas en la misma página | 7.3 | SPEC de diseño de páginas |
| — | **CTA del Hero en mayúsculas** y otros detalles tipográficos de copy | 2.2.8, 6.1 | SPEC de diseño de páginas |

> **Ya no son pendientes** (cerrados en §15.1): **P-17** (`Icon`, aprobado), la
> **asignación de secciones claras** (pasa a decidirse por página antes de
> implementarla), el **menú móvil** (§3.4) y la **cabecera estática**. Ninguno de
> los pendientes que quedan impide implementar SPEC-02.

### 11.3 Decisiones pendientes heredadas de SPEC-01 🟡

Siguen abiertas y **no las resuelve SPEC-02**:

| ID | Tema | Relación con SPEC-02 |
| -- | ---- | -------------------- |
| **P-01** | Routing y URLs | Condiciona si `Button` renderiza `<a href>` o el `Link` del router |
| **P-04** | Páginas legales | Relacionada con P-13 (autoalojar evita terceros) y P-05 |
| **P-05** | Mapa incrustado o estático | Afecta a la sección Ubicación |
| **P-06** | Marca, dominio y datos reales | Sin marca no hay `Logo` ni título. Bloquea contenido final |
| **P-07** | Imágenes y assets | Bloquea Hero, galería y entrenadores. **El sistema ya funciona sin imágenes** |
| **P-08** | Idioma | Decidir antes de congelar URLs |
| **P-09** | Horarios de clases | Contenido volátil |
| **P-10** | Renderizado y SEO técnico | Relacionada con el peso de fuentes (P-13) |
| **P-11** | Detalles de CTAs (CTA en `/contacto`, destino del secundario) | Afecta a los botones de la página Contacto |
| **S-02** | CTA fijo en móvil | **Sin aprobar.** Los tokens y la sombra ya están previstos |
| **S-04** | Más de un indicador para el plan recomendado | **Sin aprobar.** Aplicado como recomendación en 7.6 |
| **S-01** | Enlace "saltar al contenido" | ✅ **Aprobado e implementado** en el Bloque 1 (`SkipLink`). Ver §15.2, discrepancia 8 |

### 11.4 Resumen

| Estado | Elementos |
| ------ | --------- |
| ✅ **Aprobados** | C-01 (resuelta), **P-12 a P-17**, derivados del amarillo, CTA y secciones claras, breakpoints, layout, sistema de componentes, cards, Hero, **estructura de archivos**, **tipografía de botones**, **menú móvil**, **`Icon`** y **cabecera estática** (§15.1) |
| 🟡 **Pendientes en esta SPEC** | Dos detalles de diseño de página: **opción de card en sección clara** y **mayúsculas del CTA**. Ninguno impide implementar |
| 🟡 **Pendientes heredados de SPEC-01** | P-01, P-04 a P-11 y las sugerencias S-02 y S-03; riesgos abiertos R-03 a R-07 (R-05 solo en su parte de anclas). S-01 y S-04 referenciados |
| ⛔ **Prohibido** | Bootstrap, Tailwind, CSS-in-JS, librerías de componentes, librerías de iconos, dependencias nuevas, segunda paleta de color |

---

## 12. Relación con SPEC-01

### 12.1 Lo que SPEC-02 hereda ✅

| Heredado de SPEC-01 | Estado en SPEC-02 |
| ------------------- | ----------------- |
| Paleta de 5 colores + gris `#525252` | ✅ Respetada, convertida en tokens |
| Regla "texto negro sobre amarillo, nunca blanco" | ✅ Token `--gf-text-on-accent` |
| Regla "amarillo nunca como texto sobre fondo claro" | ✅ Prohibida explícitamente (2.1.8) |
| Regla "gris `#A3A3A3` solo sobre fondos oscuros" | ✅ `--gf-text-muted`, prohibido sobre claro |
| WCAG 2.2 AA | ✅ Concretado en la sección 10 |
| Mínimo táctil 44 px | ✅ Aplicado a botones y controles |
| CTA principal "Únete ahora" → `/contacto` | ✅ No se modifica (solo se estila) |
| CTA secundario "Conoce el gimnasio" | ✅ No se modifica |
| 5 páginas y sus secciones | ✅ No se modifica ni se añade nada |
| `prefers-reduced-motion` | ✅ Se respeta y amplía |
| Reserva de espacio para imágenes | ✅ Convertido en regla de `aspect-ratio` |

### 12.2 Lo que SPEC-02 **no** hace ⛔

No modifica el alcance · no añade páginas · no añade funcionalidades · no
introduce backend, autenticación ni reservas · no cambia los CTA aprobados · no
cambia el stack · no instala dependencias · no descarga fuentes · no genera
assets · no toca `src/`.

### 12.3 Aportaciones y cierres a SPEC-01

| Punto de SPEC-01 | Efecto de SPEC-02 |
| ---------------- | ----------------- |
| §7.1 "Breakpoints numéricos 🟡 pendientes" | **Resuelto en propuesta**: 768 px y 1024 px (3.1) |
| §8.3 "el contorno amarillo no sirve sobre fondo claro" | **Resuelto**: 3 tokens de anillo (10.2) |
| §8.1 "si se usan fondos claros hace falta un neutro más oscuro" | **Resuelto**: `--gf-text-muted-onlight` (`#525252`, 7,81:1) + modelo completo de sección clara (2.1.5) |
| §10.5 "Open Graph pendiente" | Sin cambios: sigue pendiente en SPEC-01 |
| Decisión de polaridad (P-15) | **Aprobada**: oscuro dominante + secciones claras minoritarias |
| CTA primario sobre fondos claros | **Aprobada**: uso preferente sobre oscuro; en claro, secundario / enlace / card oscura |
| Tipografía y su carga (P-16, P-13) | **Aprobadas**: Barlow Condensed + Inter, autoalojadas en WOFF2 |
| Componentes y layout | **Aprobados**: 9 componentes + patrones de layout como CSS |
| Breakpoints y container | **Aprobados**: 768/1024 px y 1200/720 px |
| §5.4 "menú móvil a confirmar en diseño" | **Cerrado**: panel vertical desplegable bajo la cabecera (§3.4) |
| R-05 "decidir si la cabecera es fija o estática" | **Cerrado en parte**: cabecera **ESTÁTICA** (§15.1 decisión 5). El comportamiento de anclas entre páginas sigue abierto |
| S-01 "saltar al contenido principal" | **Aprobado e implementado** (`SkipLink`) |

### 12.4 Contradicciones y ambigüedades

#### C-01 — "bootstrap simple" ✅ **RESUELTA**

- **Estado:** cerrada el 2026-09-10 por confirmación explícita del responsable.
- **Resolución:** la expresión **no** se refería al framework Bootstrap. La
  decisión es **capa base propia** (P-12, aprobada).
- **Sin ambigüedad residual:** el término "bootstrap" queda **retirado del
  vocabulario del proyecto** (1.2) y sustituido por **"capa base"**.

#### C-02 — Deriva entre los tokens de SPEC-00 y esta SPEC ✅ **RESUELTA en el Bloque 1**

No era un conflicto con SPEC-01 (que no definió radios ni tipografías), sino una
**inconsistencia con lo implementado en SPEC-00**. Estado original y resultado:

| Elemento | En `theme.css` de SPEC-00 | Aprobado en SPEC-02 | Resultado tras el Bloque 1 |
| -------- | ------------------------- | ------------------- | -------------------------- |
| Convención de nombres | `--color-*`, `--radius-*` | `--gf-*` | ✅ Migrado: **0 tokens antiguos** |
| Radio grande | `1rem` (16 px) | `0.75rem` (12 px) | ✅ Ajustado |
| Tipografía | `--font-sans: system-ui…` | Dos familias (2.2) | ✅ Tokens de familia con los fallbacks aprobados |
| Colores | 5 tokens | 6 primitivos + 2 derivados | ✅ Ampliado |
| Capa base | `global.css` con reset ligero | Contenido definido en 1.4 | ✅ `global.css` → `base.css`, contenido completado |

- **Único resto:** la **incorporación física de los WOFF2** (P-13), que se hace
  al implementar y no es parte de C-02 (ver §15.2, discrepancia 9).
- **Verificado:** el CSS compilado no contiene ningún `--color-`, `--radius-` ni
  `--font-sans`.

#### C-03 — Las propuestas 🟡 de SPEC-01 siguen sin aprobar 🟡 VIGENTE (parcial)

SPEC-01 se cerró como DONE dejando propuestas sin aprobar (orden de secciones de
Inicio, secciones de las 4 páginas internas, modelo de navegación).

- **✅ Cerrado en la revisión 2:** el **patrón del menú móvil** (§3.4) y la
  **cabecera estática** (§15.1 decisión 5).
- **🟡 Sigue abierto:** el orden definitivo de las secciones de Inicio, las
  secciones propuestas de las 4 páginas internas y la parte del modelo de
  navegación con anclas.
- **Cuándo se resuelve:** **antes de implementar esas páginas**, no antes. No
  impide implementar SPEC-02.

---

## 13. Criterios de aceptación

✅ **Verificada y cerrada** el 2026-09-10: toda la checklist está marcada, el
responsable ha aprobado el documento explícitamente y `docs/specs/README.md`
refleja su estado.

### 13.1 Documentación

- [x] Existe `docs/specs/SPEC-02-fundaciones-diseno.md`.
- [x] `docs/specs/README.md` registra SPEC-02 con su estado.
- [x] El documento contiene las 13 secciones requeridas (1 a 13) más el **cierre del Bloque 1** (§15).
- [x] El estado es **✅ Aprobada / DONE** tras la aprobación explícita.
- [x] Está marcado como documentación, sin implementación.

### 13.2 Sistema de estilos

- [x] La estrategia general está definida (CSS propio + capa base + tokens + utilidades mínimas).
- [x] **C-01 está resuelta y el término "bootstrap" ya no es ambiguo** (1.2).
- [x] Está documentado que **no se usa Bootstrap, Tailwind, CSS-in-JS ni librerías de componentes**.
- [x] Está definido el **contenido de la capa base** (1.4).
- [x] Está documentado el modelo de **dos capas** (primitivos → semánticos).
- [x] Está definida la **organización conceptual** de los estilos.
- [x] Está definida la convención de nombres (`--gf-`, BEM-lite).
- [x] Está definida la **gestión de variantes** y que la polaridad **no** es una variante de componente.
- [x] Está recogido que **ningún componente usa valores literales**.

### 13.3 Design tokens

- [x] **Colores:** 6 primitivos con su función y 2 derivados del acento.
- [x] Están definidos los tokens semánticos pedidos: background principal y secundario, superficie/card, texto principal, texto secundario, texto sobre amarillo, bordes y estados de interacción.
- [x] Están definidos los **tokens de sección clara** y las **reglas de convivencia** entre polaridades (2.1.3–2.1.5).
- [x] Está documentado que la polaridad clara **no añade ningún color nuevo** (2.1.6).
- [x] Los contrastes están **calculados**, no estimados, incluidos los de la sección clara.
- [x] Está señalado el hallazgo de los bordes funcionales (3,71:1 oscuro / 3,84:1 claro).
- [x] Está señalado que el **amarillo no puede ser indicador de estado sobre fondo claro**.
- [x] **Tipografía:** están documentados el porqué de Barlow Condensed (2.2.2), el porqué de Inter (2.2.3), la personalidad de cada una (2.2.4), los pesos concretos (2.2.5), la escala (2.2.6), line-height/tracking/medida (2.2.7), las mayúsculas (2.2.8) y las alternativas (2.2.9).
- [x] Está documentado el **impacto de autoalojar** las fuentes, con peso estimado, ventajas, costes, riesgo de CLS y requisitos técnicos (2.2.10).
- [x] Están definidos los **fallbacks** de fuentes.
- [x] Está recogido que **no se ha descargado ninguna fuente**.
- [x] **Espaciado:** escala en múltiplos de 4 px con usos.
- [x] **Bordes y radios:** 3 radios + píldora, con reglas y el aviso de no abusar.
- [x] **Sombras:** estrategia definida (2 niveles, y el matiz claro/oscuro).
- [x] **Transiciones:** duraciones, easings, qué se anima y qué no, y `prefers-reduced-motion`.

### 13.4 Responsive y layout

- [x] Los **breakpoints concretos** (768 px y 1024 px) están definidos como propuesta.
- [x] Está justificado por qué solo 2 y bajo qué condición se añadiría otro.
- [x] Está documentada la **limitación de las variables CSS en media queries**.
- [x] Está definido el comportamiento de contenedores, grids, tipografía, navegación, cards, imágenes y spacing.
- [x] Están definidos ancho máximo, márgenes, padding, container estrecho y separación entre secciones.
- [x] El contenedor funciona con **ambas polaridades**.
- [x] Se confirma que **no se diseña ninguna página concreta**.

### 13.5 Componentes, botones y cards

- [x] Está definido el criterio para crear un componente nuevo.
- [x] Está **analizado qué NO debe ser componente** y por qué.
- [x] El layout está definido como **clases CSS**, no como componentes React.
- [x] La lista de componentes recomendados incluye Header, Footer, Nav, SkipLink, Button, Badge, SectionHeading, Card, GalleryItem e Icon.
- [x] Está recomendada la estrategia de **una card base con variantes**.
- [x] Los 3 tipos de botón están definidos con sus 5 estados.
- [x] Está resuelto el contraste del foco sobre el botón amarillo en ambas polaridades.
- [x] Está resuelto el **límite del botón amarillo sobre fondo claro** (borde funcional obligatorio, hover que oscurece).
- [x] Las cards tienen definidas sus **dos opciones** en sección clara.

### 13.6 Imágenes, SVG, estética y accesibilidad

- [x] Están definidas las reglas de `aspect-ratio`, `object-fit` y proporciones por tipo.
- [x] Está resuelta la adaptación de la **galería** a proporciones distintas.
- [x] Está resuelto el **Hero sin assets** y que la imagen se pueda añadir después sin cambiar la estructura.
- [x] Están definidas las **reglas de uso y accesibilidad de los SVG** (8.6), incluidos construcción, tamaños y origen/licencias.
- [x] La dirección estética está traducida a decisiones concretas.
- [x] Existe una **lista de prohibiciones** actualizada, incluido el mal uso de la polaridad.
- [x] Está definida la proporción de uso del negro (≥ 65–70 %) y del amarillo (~10 %).
- [x] Están definidos foco visible, contraste, estados, tamaño mínimo, legibilidad, movimiento reducido, zoom y no depender del color.
- [x] **No se contradice ninguna decisión aprobada de SPEC-01.**

### 13.7 Decisiones e integridad

- [x] Las decisiones **aprobadas** están registradas (C-01, **P-12 a P-17**).
- [x] Las **6 decisiones del cierre del Bloque 1** están documentadas con sus reglas (§15.1).
- [x] Las **discrepancias del Bloque 1** están clasificadas (§15.2) y ninguna requiere cambiar el sistema aprobado.
- [x] La **verificación de contradicciones** por área está hecha y no queda ninguna crítica (§15.4).
- [x] Las decisiones de diseño **aún abiertas** están identificadas como pendientes sin bloquear.
- [x] Las decisiones **heredadas pendientes** de SPEC-01 están referenciadas.
- [x] Las contradicciones están señaladas **sin resolverlas silenciosamente** (C-02 y C-03 vigentes).
- [x] **No se ha escrito ningún componente React.**
- [x] **No se ha modificado `src/`.**
- [x] **No se ha creado ninguna página.**
- [x] **No se ha implementado Header, Footer ni navegación.**
- [x] **No se ha instalado ninguna dependencia** (ni React Router, ni Tailwind, ni Bootstrap, ni librería de iconos).
- [x] **No se ha descargado ninguna fuente.**
- [x] **No se ha generado ningún asset ni imagen.**
- [x] El proyecto sigue compilando (`npm run build`) y arrancando (`npm run dev`).
- [x] El responsable **aprueba explícitamente** este documento.

---

## 14. Historial de cambios

| Fecha      | Cambio |
| ---------- | ------ |
| 2026-09-10 | Creación inicial de SPEC-02 (fundaciones de diseño). Estado: 🟡 En revisión. Se detecta la ambigüedad "bootstrap simple" (C-01) y la deriva de tokens con SPEC-00 (C-02). Nuevas pendientes P-12 a P-16. |
| 2026-09-10 | **Revisión 1.** C-01 **resuelta** (no era el framework Bootstrap) y término "bootstrap" retirado del vocabulario. **P-12 aprobada** (capa base propia). **P-14 aprobada** (SVG propios + reglas de uso y accesibilidad en 8.6). P-13 ampliada con motivos, personalidad, pesos, alternativas e impacto de autoalojar. P-15 reformulada como **dos polaridades** (oscuro dominante + secciones claras minoritarias) con reglas de convivencia y tokens de sección clara. P-16 mantenida como propuesta recomendada. Añadidas la regla del botón amarillo sobre fondo claro y la prohibición del amarillo como indicador de estado sobre claro. Breakpoints, container, componentes, cards y Hero confirmados como propuestas. Estado en ese momento: 🟡 En revisión. |
| 2026-09-10 | **Aprobación final.** SPEC-02 pasa a **✅ Aprobada / DONE**. Aprobadas: **P-15** (tema oscuro dominante + secciones claras minoritarias; cabecera, Hero, CTA final y footer oscuros; sin secciones claras consecutivas), **P-16** (Barlow Condensed + Inter con sus pesos), **P-13** (autoalojadas en WOFF2, subconjunto latino, `font-display: swap`, precarga crítica y medidas contra el CLS; los archivos se añaden durante la implementación), **derivados del amarillo** (`#FFD633` hover, `#D8AC00` active), **CTA primario** (uso preferente sobre fondos oscuros; en claros, secundario / enlace / card oscura), **breakpoints** (768 / 1024 px), **layout** (1200 / 720 px, mobile-first, grids intrínsecos), **sistema de componentes** (9 componentes; layout como CSS) , **cards** (`Card` base con variantes) y **Hero sin assets**. Abiertos: **P-17** (`Icon`, por no figurar en la lista de componentes aprobada) y tres detalles de diseño de página. **C-02 se mantiene** y se reconcilia durante la implementación, sin tocar `src/`. Criterios de aceptación verificados. |
| 2026-09-10 | **Revisión 2 — cierre del Bloque 1.** Se ratifican las **6 decisiones** detectadas por la implementación (§15.1): **estructura de archivos** (convención `src/components`, `src/data`, `src/styles`), **tipografía de botones** (Barlow Condensed 700 para acciones; Inter 600 para enlaces textuales: resuelve la contradicción de 2.2.5), **menú móvil** (panel vertical desplegable bajo la cabecera, requisitos completos en el nuevo §3.4), **componente `Icon`** (cierra **P-17**), **cabecera estática** (cierra parcialmente R-05) y **secciones claras** (asignación por página, decidida antes de implementarla). Se clasifican las **9 discrepancias del Bloque 1** (§15.2), se ratifican **11 tokens auxiliares de implementación** sin colores nuevos (§2.1.9) y se documenta la prevalencia del token sobre el literal `0.06` de §6.3. **C-02 pasa a resuelta** (los tokens de SPEC-00 se migraron a `--gf-` en el Bloque 1) y **C-03 queda parcialmente cerrada**. Se añade §15 (cierre, discrepancias y verificación de contradicciones). Estado: **✅ Aprobada / DONE**. **`src/` no se ha modificado.** |

---

## 15. Cierre del Bloque 1: decisiones ratificadas y discrepancias

> **Revisión 2 (2026-09-10).** Documenta el cierre de las **6 decisiones
> pendientes** detectadas por el Bloque 1 de implementación, la clasificación de
> las **9 discrepancias** encontradas y la **verificación final de
> contradicciones**. Esta revisión es **exclusivamente documental**: ⛔ **no se ha
> modificado `src/`**, no se han creado componentes, no se han instalado
> dependencias y no se han descargado fuentes ni assets.

### 15.1 Decisiones ratificadas ✅

#### Decisión 1 — Estructura de archivos ✅ RATIFICADA

Convención del proyecto:

```text
src/
├── components/<ComponentName>/     # componentes reutilizables (.tsx + .css)
├── data/                           # datos estáticos tipados
└── styles/                         # estilos globales por capas
    ├── theme.css                   # tokens (capa 1 + capa 2)
    ├── base.css                    # reset / base
    └── layout.css                  # primitivas de layout
```

**Reglas aprobadas:**

1. Los componentes reutilizables viven en **`src/components/<ComponentName>/`**,
   con su `.tsx` y su `.css` **co-localizados** cuando corresponda.
2. Los **datos estáticos tipados** viven en **`src/data/`** (hoy
   `navigation.ts`).
3. Los **estilos globales** viven en **`src/styles/`**, repartidos por capa
   (§1.5), y `src/main.tsx` aplica el orden de carga.
4. ⛔ **No se crean carpetas adicionales sin necesidad.**
5. ⛔ **No se crea una arquitectura excesivamente compleja**: nada de capas
   `features/`, `hooks/`, `utils/`, `ui/`… mientras no haya un uso real que las
   justifique.
6. **Los estilos de cada componente los importa el propio componente.**

> **Sustituye** la referencia de §1.5 a una "SPEC de estructura de carpetas":
> **no existe una SPEC de estructura independiente** y esta convención es la
> aprobada.

#### Decisión 2 — Tipografía de botones ✅ RATIFICADA

Resuelve la contradicción interna de §2.2.5:

| Elemento | Familia y peso |
| -------- | -------------- |
| **Botones de acción**: CTA primaria, CTA secundaria, botones de acción y botones de navegación **cuando visualmente sean botones** | **Barlow Condensed 700** |
| **Texto/enlace de navegación que no sea un botón** | **Inter 600** |

**Intención aprobada:** que los elementos **de acción** tengan la identidad
visual deportiva de Barlow Condensed, mientras que los **enlaces puramente
textuales** puedan usar Inter.

**Interpretación documentada:** la variante de botón `--text` (acción de menor
importancia renderizada como texto) usa **Inter 600**, porque el criterio
aprobado es "cuando visualmente sean botones". Coincide con lo implementado.

#### Decisión 3 — Menú móvil ✅ RATIFICADA

> **Menú móvil desplegable vertical debajo de la cabecera.** ⛔ No se usa menú
> lateral.

Comportamiento y requisitos de accesibilidad completos en **§3.4** (desktop con
navegación horizontal y CTA; móvil con navegación colapsada, botón accesible,
panel vertical en columna, `aria-expanded`, `aria-controls`, apertura y cierre
con el mismo control y con teclado, cierre con `Escape` devolviendo el foco, sin
depender de `hover` y respetando `prefers-reduced-motion`).

⛔ **No se implementa en esta revisión documental.**

#### Decisión 4 — Componente `Icon` ✅ RATIFICADA (cierra P-17)

Se creará un componente reutilizable **`Icon`** cuya responsabilidad es
**centralizar los SVG propios** del proyecto. Características aprobadas: SVG en
línea · rejilla **24×24** · trazo **2 px** · **`currentColor`** · tamaños
controlados por tokens · ⛔ sin librería externa de iconos · ⛔ sin emojis ·
decorativos con `aria-hidden="true"` · los que tienen significado, con **nombre
accesible** · botones solo-icono con nombre accesible · ⛔ **sin `<title>` como
único mecanismo de accesibilidad**. Especificación completa: **§8.6**.

> **Se implementará en un bloque posterior.** ⛔ **No se crea `Icon.tsx`** en
> esta fase.

#### Decisión 5 — Cabecera estática ✅ RATIFICADA

La cabecera es **ESTÁTICA**: ⛔ **no** se usa `position: fixed` ni
`position: sticky` en esta primera versión.

**Motivos aprobados:** mantener una implementación sencilla · no ocupar espacio
permanente en móvil · evitar problemas con la navegación móvil · mantener la
cabecera como parte natural del flujo de la página.

Es lo que hay implementado. **Convertirla en fija o sticky exigirá una decisión
explícita nueva**, nunca una modificación silenciosa. Cierra la parte
correspondiente de **R-05**.

#### Decisión 6 — Secciones claras ✅ RATIFICADA

Se mantiene la **regla global** de §2.1.3: diseño predominantemente oscuro,
`#050505` como protagonista, **máximo ~1–2 secciones claras por página**, nunca
varias consecutivas, y **cabecera, Hero, CTA final y footer siempre oscuros**.

**La asignación concreta de qué secciones serán claras se decidirá durante la
especificación/implementación de cada página**, y siempre **antes** de
implementarla. Para **Inicio**, cuando llegue el momento, se decidirá
explícitamente qué secciones son claras antes de implementarlas.

⛔ **No se fija ahora una distribución definitiva.**

### 15.2 Discrepancias del Bloque 1: clasificación

| # | Discrepancia | Clasificación | Detalle |
| - | ------------ | ------------- | ------- |
| 1 | `--gf-link` | **Token auxiliar de implementación ✅ aceptado** | Necesario para cumplir §6.5 sin que el componente conozca su polaridad (§2.1.3 regla 6): `--gf-accent` en oscuro, `--gf-text-onlight` en claro. Sin color nuevo. Documentado en §2.1.9 |
| 2 | `--gf-surface-hover-onlight` | **Token auxiliar ✅ aceptado** | §2.1.5 define los 11 tokens de la polaridad clara pero **ningún realce**. Documentado en §2.1.9 |
| 3 | `--gf-overlay-hover-onlight` | **Token auxiliar ✅ aceptado** | Idem |
| 4 | `--gf-overlay-active-onlight` | **Token auxiliar ✅ aceptado** | Idem |
| 5 | Constantes geométricas (`--gf-border-width`, `--gf-focus-ring-width`, `--gf-focus-ring-offset`, `--gf-target-min`, `--gf-control-height-lg`, `--gf-underline-offset`, `--gf-layer-skip-link`) | **Tokens auxiliares ✅ aceptados** | Existen para no repetir literales (§1.3 regla 1). Ninguna introduce color. Documentados en §2.1.9 |
| 6 | `rgba(255,255,255,0.06)` en §6.3 frente al token `--gf-overlay-hover` (5 %) | **Documentado; prevalece el token** | La regla "ningún valor literal en componentes" (§1.3) pesa más que un valor suelto de §6.3. §6.3 actualizado para citar los tokens. Diferencia visual imperceptible |
| 7 | Ausencia de `aria-current` sin routing | **Aceptado como estado temporal ✅** | §8.6.4 exige marcar la página actual, pero **sin routing (P-01) no hay página activa** que marcar: hacerlo sería inventar estado. El estilo ya está preparado en `Nav`. Se aplicará al aprobar P-01 |
| 8 | SkipLink implementado (S-01) | **Aprobación registrada ✅** | S-01 pasa de "🟡 propuesta" a **aprobada e implementada**. §11.3 actualizado |
| 9 | Ausencia temporal de `@font-face` | **Documentado ✅** | P-13 aprueba la **estrategia**; los WOFF2 se añaden al implementar. Los tokens de familia ya apuntan a las fuentes aprobadas y caen a los fallbacks de §2.2.1. **No se declara `@font-face` sin archivos** para no provocar peticiones fallidas |

**Resultado: ninguna de las 9 discrepancias requiere modificar el sistema
aprobado, y ninguna introduce un color nuevo.** Las que necesitaban
documentación ya están documentadas (§2.1.9, §6.3, §3.4 y este apartado).

### 15.3 Trabajo pendiente derivado (no bloquea el cierre)

| Pendiente | Origen | Cuándo |
| --------- | ------ | ------ |
| **Implementar el menú móvil** de §3.4 | La decisión 3 lo aprueba; el Bloque 1 no lo implementó porque no estaba aprobado (discrepancia consignada en el informe del bloque) | Siguiente bloque de implementación de cabecera |
| **Implementar `Icon`** | Decisión 4 lo aprueba | Bloque posterior |
| **Incorporar los WOFF2** y declarar `@font-face` | P-13 (estrategia aprobada) · §15.2 discrepancia 9 | Bloque de tipografía |
| **Ratificar las propuestas 🟡 de SPEC-01** (orden de secciones de Inicio, secciones de las páginas internas, anclas del modelo de navegación) | C-03 | Antes de implementar esas páginas |

### 15.4 Verificación de contradicciones

Áreas revisadas a petición expresa: **tipografía, componentes, responsive,
polaridad, iconos, estructura de carpetas, cabecera y botones**.

| Área | Resultado |
| ---- | --------- |
| **Tipografía** | ✅ Contradicción de §2.2.5 **resuelta** (decisión 2) |
| **Componentes** | ✅ Sin contradicciones. `Icon` cerrado; el resto coherente con §5.3–§5.5 |
| **Responsive** | ✅ Menú móvil decidido (§3.4); los breakpoints siguen siendo **768 y 1024 px** |
| **Polaridad** | ✅ Coherente: las 8 reglas de convivencia se mantienen y los tokens auxiliares **no añaden color** |
| **Iconos** | ✅ **P-17 cerrada**; §8.6 queda como contrato del futuro componente |
| **Estructura de carpetas** | ✅ **Ratificada** (decisión 1); ya no depende de una SPEC inexistente |
| **Cabecera** | ✅ **Estática** (decisión 5); cierra parcialmente R-05 |
| **Botones** | ✅ Reparto tipográfico resuelto; contrastes, variantes y estados sin cambios |

**No se ha encontrado ninguna contradicción crítica pendiente.** Las únicas
abiertas son las ya registradas —opción de card en sección clara, mayúsculas del
CTA y los puntos heredados de SPEC-01— y **ninguna impide implementar SPEC-02**.

### 15.5 Estado

SPEC-02 queda **✅ DONE / APROBADA** con las **6 decisiones de cierre**
documentadas y sin contradicciones críticas. **No se crea ninguna SPEC nueva.**
