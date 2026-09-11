# SPEC-01 — Alcance y estructura de la web

| Campo            | Valor                                                        |
| ---------------- | ------------------------------------------------------------ |
| **ID**           | SPEC-01                                                      |
| **Título**       | Alcance y estructura de la web                               |
| **Fecha**        | 2026-09-10                                                   |
| **Estado**       | ✅ **Aprobada / DONE**                                        |
| **Aprobada**     | 2026-09-10 por el responsable del proyecto                    |
| **Depende de**   | SPEC-00 (base técnica, DONE ✅)                              |
| **Produce**      | Documentación. **Ningún código, componente ni página.**       |
| **Desbloquea**   | SPEC-02 y posteriores (diseño visual, routing, SEO, implementación) |
| **Tipo**         | Especificación de producto y arquitectura de información      |

**Marcado de estado usado en este documento:**

- ✅ **Aprobado** — decisión validada por el responsable del proyecto.
- 🟡 **Propuesta** — redactada aquí, pendiente de aprobación explícita.
- ⛔ **Fuera de alcance** — excluido conscientemente del proyecto.

**Identificadores usados en la sección 11:**

- `R-xx` — riesgo o problema detectado en decisiones aprobadas.
- `P-xx` — decisión pendiente de tomar en una SPEC posterior.
- `S-xx` — sugerencia adicional no solicitada.

**Estado de los identificadores:**

- **Aprobados y cerrados** (sección 11.1): `R-01`, `R-02`, `R-08`, `P-02`, `P-03`.
- **Abiertos** (secciones 11.2 a 11.4): `R-03` a `R-07`, `P-01`, `P-04` a `P-11`,
  `S-01` a `S-04`.

---

## 1. Objetivo

Construir una **web corporativa** moderna y profesional para un gimnasio, cuyo
propósito es **presentar el negocio y generar conversiones/contactos**.

Objetivos concretos:

### 1.1 Objetivos funcionales (del producto)

1. **Comunicar qué es el gimnasio**: identidad, propuesta de valor y
   diferenciadores frente a la competencia.
2. **Explicar la oferta**: servicios, clases y tarifas de forma clara.
3. **Generar confianza**: instalaciones, equipo humano, ubicación y prueba
   social.
4. **Convertir**: llevar al visitante a la acción mediante CTAs claros. El CTA
   principal "Únete ahora" lleva a `/contacto` (ver P-02 en 11.1).
5. **Facilitar el contacto**: teléfono, correo, WhatsApp, dirección y horario.

### 1.2 Objetivos del proyecto (de aprendizaje y portfolio)

1. Servir como **proyecto de aprendizaje** de desarrollo web moderno.
2. Servir como **pieza de portfolio** y potencial **plantilla reutilizable**
   para futuros gimnasios.

**Consecuencia de diseño de estos objetivos:** al ser potencialmente una
plantilla, la estructura debe ser **predecible y poco específica**, y los
contenidos (textos, tarifas, entrenadores) deben poder sustituirse sin tocar
lógica. Se prioriza claridad y buenas prácticas sobre soluciones ad-hoc.

### 1.3 Qué NO es esta web

⛔ **No es una aplicación de gestión de gimnasio.** No es un SaaS, no tiene área
privada y no gestiona ninguna operación del negocio.

---

## 2. Alcance

### 2.1 Incluye ✅

- Una web **estática de presentación** (contenido corporativo).
- **5 páginas**: Inicio, Nosotros, Servicios, Tarifas, Contacto.
- **Secciones dentro de Inicio**: Hero, propuesta de valor / beneficios,
  servicios y clases destacadas, entrenadores, galería, tarifas destacadas,
  ubicación, CTA final, footer.
- **Navegación** entre las 5 páginas y hacia las secciones de Inicio.
- **CTAs** de conversión (principal: "Únete ahora" → `/contacto`; secundario:
  "Conoce el gimnasio").
- Identidad visual aprobada (5 colores + gris alternativo para fondos claros,
  ver R-02 en 11.1).
- Requisitos de **responsive**, **accesibilidad** (WCAG 2.2 AA) y **SEO básico**.
- **Canales de contacto sin formulario propio**: teléfono, email, WhatsApp (si
  hay número real), dirección, horario y enlace para obtener indicaciones
  (ver P-03 en 11.1).

### 2.2 Queda fuera ⛔

**Excluido por decisión del proyecto** (no implementar, no asumir, no
especificar):

| Excluido                                        | Motivo                                                |
| ----------------------------------------------- | ----------------------------------------------------- |
| Gestión de socios                               | Funcionalidad de sistema de gestión, no corporativa    |
| Pagos y pasarelas de pago                       | Idem                                                  |
| Check-in / control de acceso                    | Idem                                                  |
| Usuarios, cuentas y perfiles                    | Idem                                                  |
| Roles y permisos                                | Idem                                                  |
| Panel de administración / CMS propio            | Idem                                                  |
| Autenticación (login, registro, recuperación)   | Idem                                                  |
| Base de datos                                   | Idem                                                  |
| Backend propio                                  | Idem                                                  |
| API propia                                      | Idem                                                  |
| Cualquier funcionalidad SaaS                    | Idem                                                  |
| Reserva de clases o de plazas                   | Implica gestión y estado; fuera de alcance             |
| Tienda online / venta de bonos o merchandising  | Fuera de alcance                                      |
| Blog o sección de noticias                     | No aprobado; se puede proponer más adelante            |
| Multiidioma                                     | No aprobado; ver pendiente P-08                        |
| **Formulario de contacto propio**               | ✅ Decidido: no se implementa (P-03 en 11.1)           |
| **Servicio externo de formularios**             | ✅ Decidido: no se usa ningún tercero (P-03 en 11.1)   |

**Nota sobre "clases":** las clases se muestran **únicamente de forma
informativa** (qué clases existen, descripción, imagen). No hay reserva,
disponibilidad ni plazas. Cualquier lectura en ese sentido queda excluida.

### 2.3 Fuera de alcance de ESTA SPEC (SPEC-01)

Aunque formen parte de la web, **no** se definen aquí y corresponden a SPECs
posteriores:

- Diseño visual concreto (layout, tipografía final, espaciados, animaciones).
- Librería o estrategia de estilos.
- Sistema de componentes y estructura de carpetas de `src/`.
- Routing y decisión de instalar React Router.
- **Renderizado y SEO técnico** (SPA, prerenderizado o SSG — ver P-10).
- Contenidos definitivos (textos, imágenes, tarifas reales, datos del negocio).
- Páginas legales (ver P-04).
- Implementación, testing y despliegue.

---

## 3. Arquitectura de información

### 3.1 Mapa del sitio

```
GymFit (web corporativa)
│
├── Inicio            →  /
│     ├── 1. Hero
│     ├── 2. Propuesta de valor / beneficios
│     ├── 3. Servicios y clases destacadas
│     ├── 4. Entrenadores            (ancla: #entrenadores)
│     ├── 5. Galería                 (ancla: #galeria)
│     ├── 6. Tarifas destacadas
│     ├── 7. Ubicación               (ancla: #ubicacion)
│     └── 8. CTA final
│
├── Nosotros          →  /nosotros      🟡 propuesta de URL
├── Servicios         →  /servicios     🟡 propuesta de URL
├── Tarifas           →  /tarifas       🟡 propuesta de URL
└── Contacto          →  /contacto      🟡 propuesta de URL
```

**Elementos globales ✅ (aprobado R-01):** cabecera (marca, navegación a las 5
páginas, CTA) y pie de página son **elementos de layout globales**, presentes de
forma consistente en todas las páginas. **No son secciones exclusivas de Inicio.**

### 3.2 Propósito de cada página

| # | Página        | Propósito principal                                                                 | Pregunta que responde el visitante       | Acción esperada                       |
| - | ------------- | ----------------------------------------------------------------------------------- | ---------------------------------------- | ------------------------------------- |
| 1 | **Inicio**    | Causar buena impresión rápida y resumir toda la oferta; es la principal herramienta de conversión | "¿Este gimnasio es para mí y qué ofrece?" | Clic en "Únete ahora" (→ `/contacto`) o ir a una página |
| 2 | **Nosotros**  | Generar confianza: historia, valores, instalaciones y equipo                          | "¿Quién está detrás y por qué debería confiar?" | Pasar a Servicios / Tarifas / Contacto |
| 3 | **Servicios** | Explicar en detalle la oferta: servicios, clases y cómo se entrena                    | "¿Qué puedo hacer aquí exactamente?"      | Ir a Tarifas o Contacto                |
| 4 | **Tarifas**   | Resolver la duda económica con transparencia y comparar planes                        | "¿Cuánto cuesta y qué incluye?"           | "Únete ahora" / Contacto               |
| 5 | **Contacto**  | Facilitar el contacto y la visita física                                              | "¿Cómo contacto o llego?"                 | Llamar, escribir, ver mapa             |

### 3.3 Relación entre páginas (flujo previsto)

```
Inicio ──┬──> Servicios ──> Tarifas ──> Contacto
         ├──> Nosotros   ──> Servicios / Tarifas
         └──> Contacto
```

Recorrido de conversión principal previsto:
**Inicio → Servicios o Tarifas → Contacto.**
El CTA "Únete ahora" debe estar disponible desde cualquier punto sin depender de
completar ese recorrido, y su destino es **`/contacto`** ✅ (P-02, sección 11.1).

### 3.4 Principios de arquitectura de información

1. **Una idea principal por página.** Cada página tiene un propósito único
   (tabla 3.2) y no intenta cubrir el de otra.
2. **Inicio resume, las páginas internas desarrollan.** Las secciones de Inicio
   que tienen página propia (Servicios, Tarifas, Ubicación) muestran
   **resúmenes/destacados con enlace**, nunca el contenido completo duplicado.
   Ver **R-03**.
3. **Profundidad máxima de 2 niveles.** Todo contenido está a un clic de Inicio.
4. **Sin contenido huérfano.** Toda sección y toda página es alcanzable desde la
   navegación. Ver **R-04** (Entrenadores y Galería).
5. **Contenido separable de la presentación.** Los datos variables (tarifas,
   entrenadores, servicios, horarios) se definirán en una fuente de datos única
   y tipada, no incrustados en el marcado. Ver **R-07**.
6. **Cabecera y pie globales.** No se duplican por página ni se consideran
   secciones de contenido ✅ (R-01).

---

## 4. Estructura conceptual de cada página

> Estas son **secciones conceptuales**, no un diseño. No se define aquí layout,
> orden visual exacto, número de columnas ni textos definitivos. Las secciones
> marcadas 🟡 son propuestas de esta SPEC pendientes de aprobación.

### 4.1 Inicio (`/`)

Estructura aprobada ✅:

| # | Sección                             | Propósito                                                                 | Estado |
| - | ----------------------------------- | ------------------------------------------------------------------------- | ------ |
| 1 | **Hero**                            | Impacto inmediato: qué es el gimnasio, para quién y qué hacer ahora. Incluye los dos CTAs. | ✅ |
| 2 | **Propuesta de valor / beneficios**  | Motivos para elegir este gimnasio (3–5 beneficios diferenciales).          | ✅ |
| 3 | **Servicios y clases destacadas**    | Muestra parcial de la oferta; enlaza a Servicios.                          | ✅ |
| 4 | **Entrenadores**                    | Presenta al equipo humano; refuerza confianza. Ancla `#entrenadores`.      | ✅ |
| 5 | **Galería**                         | Prueba visual de instalaciones y ambiente. Ancla `#galeria`.               | ✅ |
| 6 | **Tarifas destacadas**              | Resumen de planes; enlaza a Tarifas.                                       | ✅ |
| 7 | **Ubicación**                       | Dónde está y cómo llegar. Ancla `#ubicacion`. Reutilizada en Contacto.     | ✅ |
| 8 | **CTA final**                       | Último empujón a la conversión antes del cierre. Destino `/contacto`.      | ✅ |
| 9 | **Footer**                          | Cierre de la página. **Es un elemento global**, no una sección exclusiva de Inicio ✅ (R-01). | ✅ |

**Pendiente de aprobación** para Inicio:

- Orden definitivo de las secciones 🟡 (el listado 1–9 se toma como orden
  propuesto, no confirmado).
- Si el Hero incluye imagen, vídeo o solo tipografía 🟡 → depende del diseño y
  de los assets (ver P-07).

### 4.2 Nosotros (`/nosotros`) 🟡 propuesta completa

| # | Sección propuesta              | Propósito                                                        |
| - | ------------------------------ | ---------------------------------------------------------------- |
| 1 | Introducción de página         | Encabezado que sitúa al visitante ("quiénes somos").             |
| 2 | Historia y origen              | Cómo nace el gimnasio; genera cercanía y credibilidad.            |
| 3 | Valores y diferenciadores      | En qué se diferencia de un gimnasio genérico.                    |
| 4 | Instalaciones                  | Qué tiene el local (resumen, enlaza a la galería de Inicio).      |
| 5 | El equipo                      | Resumen del equipo humano → enlaza a `/#entrenadores`.            |
| 6 | CTA final                      | Conversión al terminar de leer (→ `/contacto`).                  |

### 4.3 Servicios (`/servicios`) 🟡 propuesta completa

| # | Sección propuesta              | Propósito                                                        |
| - | ------------------------------ | ---------------------------------------------------------------- |
| 1 | Introducción de página         | Qué se va a encontrar en esta página.                            |
| 2 | Servicios                      | Catálogo de servicios disponibles.                               |
| 3 | Clases colectivas              | Detalle informativo de las clases (**sin reserva**).             |
| 4 | Cómo empezar                   | Reduce la fricción: pasos para empezar.                          |
| 5 | CTA final                      | Enlaza a Tarifas y a `/contacto`.                                |

**Pendiente:** ¿se publican **horarios** de clases? 🟡 (ver R-07 y P-09). Si sí,
implica datos volátiles que hay que mantener; si no, la sección de clases es
puramente descriptiva.

### 4.4 Tarifas (`/tarifas`) 🟡 propuesta completa

| # | Sección propuesta              | Propósito                                                        |
| - | ------------------------------ | ---------------------------------------------------------------- |
| 1 | Introducción de página         | Encuadre: transparencia de precios.                              |
| 2 | Planes y precios               | 2–4 planes comparables; el recomendado, destacado.                |
| 3 | Qué incluye cada plan          | Detalle de contenido por plan.                                   |
| 4 | Condiciones                    | Matrícula, permanencia, formas de pago (texto informativo).       |
| 5 | Preguntas frecuentes           | Resuelve objeciones antes de contactar. 🟡 no aprobado            |
| 6 | CTA final                      | "Únete ahora" → `/contacto`.                                     |

**Pendiente:** número de planes 🟡, precios reales (contenido, no SPEC) y si se
muestra IVA incluido o desglosado 🟡.

### 4.5 Contacto (`/contacto`) ✅ estructura decidida (P-03)

Página **sin formulario propio** ✅. Contenido decidido:

| # | Sección                         | Propósito                                                                 | Estado |
| - | ------------------------------- | ------------------------------------------------------------------------- | ------ |
| 1 | Introducción de página          | Invitación clara a contactar.                                             | 🟡 propuesta |
| 2 | **Datos de contacto**           | **Teléfono, email, WhatsApp (si hay número real), dirección.**             | ✅ |
| 3 | **Ubicación y cómo llegar**     | Reutiliza el bloque de ubicación de Inicio + **enlace para obtener indicaciones**. | ✅ |
| 4 | **Horario**                     | Horario de atención del local.                                            | ✅ |
| 5 | CTA final                       | 🟡 Sujeto a P-11 (el CTA principal apunta a `/contacto`, que es esta misma página). | 🟡 |

**Decidido ✅:**

- **No hay formulario de contacto** en la primera versión.
- **No hay backend, API, base de datos ni servicio externo de formularios.**
- WhatsApp se muestra **solo si finalmente se dispone de un número real**.
- **Los datos reales del negocio** (teléfono, email, dirección, horario) se
  incorporarán posteriormente cuando corresponda (ver P-06).

### 4.6 Elementos globales (todas las páginas) ✅ aprobado (R-01)

| Elemento            | Contenido conceptual                                                                 |
| ------------------- | ------------------------------------------------------------------------------------ |
| **Cabecera**        | Marca/logo, navegación a las 5 páginas, CTA "Únete ahora". Presente en todas las páginas. |
| **Pie de página**   | Marca, navegación secundaria, datos de contacto, redes, aviso legal (ver P-04). Presente en todas las páginas. |
| **Saltar al contenido** | Enlace de accesibilidad al inicio del contenido principal (ver S-01).             |

Ambos son **elementos de layout globales** y deben mantener una presencia
consistente en todas las páginas. ✅

---

## 5. Navegación

### 5.1 Principios

1. **Siempre visible**: la navegación principal debe estar accesible en todo
   momento (no oculta tras scroll infinito).
2. **Predecible**: el mismo orden y las mismas etiquetas en todas las páginas.
3. **Consistente**: la página actual debe estar indicada visual y
   semánticamente.
4. **Máximo 5 elementos** en la navegación principal (las 5 páginas aprobadas).
5. **El CTA no es un elemento de navegación**, sino una acción destacada aparte.

### 5.2 Modelo propuesto 🟡 (parcialmente aprobado)

Navegación **híbrida** de dos niveles, coherente con las decisiones aprobadas:

| Nivel | Elementos | Comportamiento | Estado |
| ----- | --------- | -------------- | ------ |
| **Principal** | Inicio · Nosotros · Servicios · Tarifas · Contacto | Navegan entre páginas. | 🟡 |
| **Secundaria (anclas)** | Entrenadores · Galería · Ubicación | Secciones dentro de Inicio. | 🟡 |
| **Acción** | "Únete ahora" | CTA destacado, fuera del listado de navegación. Destino `/contacto`. | ✅ destino aprobado (P-02) |
| **Pie** | Repetición de las 5 páginas + contacto + legal | Navegación secundaria. | ✅ global (R-01) |

**Etiquetas definitivas:** los textos de navegación coinciden con los nombres de
página aprobados (Inicio, Nosotros, Servicios, Tarifas, Contacto). 🟡 No se
proponen sinónimos para no introducir decisiones de copy no aprobadas.

### 5.3 Cómo se llega a las secciones de Inicio

- Desde **Inicio**: desplazamiento dentro de la página (anclas).
- Desde **otra página**: enlace a Inicio con ancla (por ejemplo
  `/#entrenadores`).

**Consecuencia técnica (R-05, abierta):** en una aplicación de una sola página,
un cambio de ruta con ancla **no desplaza automáticamente** al elemento. Requiere
tratamiento explícito (desplazamiento tras el render, compensación de la altura
de la cabecera fija, foco en el destino). Debe especificarse en la SPEC de
routing, no improvisarse.

### 5.4 Comportamiento responsive de la navegación

✅ **Patrón aprobado** (2026-09-10, revisión de cierre del Bloque 1): **menú
desplegable vertical debajo de la cabecera**. ⛔ No se usa menú lateral. Detalle
completo y requisitos en **SPEC-02 §3.4**.

| Dispositivo | Comportamiento ✅ |
| ----------- | ----------------- |
| Desktop     | Los 5 elementos visibles en la cabecera, sin menú colapsado. |
| Tablet      | Los 5 elementos visibles si caben; si no, menú colapsado. |
| Móvil       | Menú colapsado (botón de menú) que abre un **panel vertical** con los 5 elementos y el CTA. |

Requisitos del menú móvil (accesibilidad, obligatorios):

- El botón tiene **nombre accesible** e indica su estado (abierto/cerrado) con
  `aria-expanded`.
- `aria-controls` apunta al panel cuando corresponda.
- El **mismo control** abre y cierra.
- Se puede cerrar con teclado (tecla Escape) y devuelve el foco al botón.
- Mientras está abierto, el foco no escapa al contenido de detrás.
- No depende exclusivamente de `hover`.
- Respeta `prefers-reduced-motion`.
- Bloquea el desplazamiento del fondo mientras está abierto ✅ (confirmado).
- Estado inicial: **cerrado**.

### 5.5 Decisiones de navegación pendientes ⛔ (no resueltas en esta SPEC)

- **¿Se instala React Router?** No se instala nada en esta SPEC. Es una decisión
  de la SPEC de routing. Ver **P-01**.
- **URLs definitivas** de cada página. Ver P-01 y R-06.
- **Página 404** (ruta no encontrada): no aprobada; ver **S-03**.
- **Comportamiento al cambiar de página**: se propone subir al principio de la
  página en cada navegación. 🟡

---

## 6. CTAs

### 6.1 CTA principal ✅

| Campo            | Valor                                    |
| ---------------- | ---------------------------------------- |
| **Texto**        | "Únete ahora"                            |
| **Nivel**        | Primario (mayor peso visual)             |
| **Objetivo**     | Llevar al usuario a contactar con el gimnasio para informarse o apuntarse |
| **Destino**      | ✅ **`/contacto`**, coherente en toda la web (P-02, sección 11.1) |
| **Estilo**       | Fondo amarillo (`#F5C400`) con **texto negro**. Obligatorio por contraste ✅ (R-02) |

> El texto es el valor inicial aprobado y puede modificarse si durante el diseño
> aparece una opción mejor.
>
> ⚠️ Detalle abierto: cómo se comporta este CTA **en la propia página
> `/contacto`** — ver **P-11**.

### 6.2 CTA secundario ✅

| Campo            | Valor                                              |
| ---------------- | -------------------------------------------------- |
| **Texto**        | "Conoce el gimnasio"                               |
| **Nivel**        | Secundario (menor peso visual que el principal)     |
| **Función**      | Alternativa para quien no está listo para convertir |
| **Estilo**       | 🟡 Propuesta: contorno sobre fondo oscuro           |
| **Destino**      | 🟡 **Pendiente** — ver P-11                         |

### 6.3 CTAs terciarios / contextuales 🟡 propuesta

| Texto propuesto              | Dónde                            | Destino                        |
| ---------------------------- | -------------------------------- | ------------------------------ |
| "Ver todos los servicios"    | Servicios destacados (Inicio)    | `/servicios`                   |
| "Ver todas las tarifas"      | Tarifas destacadas (Inicio)      | `/tarifas`                     |
| "Ver galería"                | Galería (Inicio)                 | `#galeria`                     |
| "Obtener indicaciones"       | Ubicación (Inicio y Contacto)     | Mapa / app externa (ver P-05)  |
| "Llamar ahora"               | Contacto y pie                   | `tel:`                         |
| "Escríbenos por WhatsApp"    | Contacto, **solo si hay número real** | `https://wa.me/...`        |
| "Enviar un email"            | Contacto y pie                   | `mailto:`                      |

⛔ **No se proponen** CTAs de "Reservar clase", "Hazte socio online", "Comprar
bono" ni similares: implican gestión, pagos o estado, y quedan fuera de alcance.

⛔ **No existe ningún CTA de envío de formulario**, porque no hay formulario
✅ (P-03).

### 6.4 Dónde deben aparecer conceptualmente

| Ubicación                        | CTA principal "Únete ahora" | CTA secundario |
| -------------------------------- | --------------------------- | -------------- |
| Cabecera (todas las páginas)     | ✅ Sí                       | —              |
| Hero (Inicio)                    | ✅ Sí                       | ✅ Sí          |
| Propuesta de valor               | —                           | —              |
| Servicios y clases destacadas    | —                           | 🟡 Ver servicios |
| Entrenadores                     | —                           | —              |
| Galería                          | —                           | —              |
| Tarifas destacadas (Inicio)      | ✅ Sí                       | 🟡 Ver tarifas |
| Ubicación                        | —                           | 🟡 Obtener indicaciones |
| CTA final (Inicio)               | ✅ Sí                       | —              |
| Nosotros (CTA final)             | ✅ Sí                       | —              |
| Servicios (CTA final)            | ✅ Sí                       | —              |
| Tarifas (CTA final)              | ✅ Sí                       | —              |
| Contacto                         | 🟡 ver P-11 (destino = esta página) | —      |
| Pie de página                    | 🟡 a confirmar              | —              |

**Principios de CTAs:**

1. **Un solo CTA primario por pantalla/sección.** Evitar que dos acciones
   amarillas compitan en el mismo viewport.
2. **El CTA principal siempre visible** en la cabecera, en cualquier página y a
   cualquier altura.
3. **Todo CTA debe tener un destino real y definido** antes de implementarse.
   El principal ya lo tiene (`/contacto`); los demás siguen pendientes (P-11).
4. **Sin CTAs rotos ni `href="#"`**: no se admite un CTA que no lleve a ningún
   sitio.
5. **Coherencia del CTA principal en toda la web**: siempre el mismo texto y el
   mismo destino ✅ (P-02).

---

## 7. Responsive

Enfoque 🟡 propuesto: **mobile-first** (se diseña y programa primero para móvil y
se amplía hacia arriba). Se documentan requisitos, no CSS.

### 7.1 Rangos de dispositivo

| Rango              | Ancho de referencia 🟡 | Dispositivo típico          |
| ------------------ | ---------------------- | --------------------------- |
| **Móvil**          | 320 – 767 px           | Teléfonos en vertical        |
| **Tablet**         | 768 – 1023 px          | Tablets en vertical/horizontal |
| **Desktop**        | ≥ 1024 px              | Portátiles y monitores       |

**Breakpoints numéricos definitivos:** 🟡 pendientes de confirmar en la SPEC de
diseño. Se propone una escala reducida (como máximo 3–4 puntos de ruptura) para
evitar mantenimiento innecesario.

### 7.2 Requisitos generales (todos los dispositivos)

1. **Sin desplazamiento horizontal** en ningún ancho, incluido 320 px.
2. **Ancho mínimo soportado: 320 px.**
3. **Contenido legible sin zoom**: tamaño de texto base suficiente y línea de
   longitud controlada (ni líneas de 200 caracteres ni de 30).
4. **Áreas táctiles de al menos 44 × 44 px** en cualquier elemento interactivo.
5. **Nada depende solo de `hover`**: la información y las acciones deben ser
   accesibles sin ratón.
6. **Imágenes fluidas** que nunca desborden su contenedor.
7. **Sin alturas fijas que rompan el contenido** cuando el texto crece o se
   traduce.
8. **Orden de lectura coherente** con el orden visual en todas las disposiciones.

### 7.3 Requisitos por dispositivo

| Requisito                     | Móvil | Tablet | Desktop |
| ----------------------------- | ----- | ------ | ------- |
| Navegación principal visible  | No (colapsada) | Condicional | Sí |
| Columnas de contenido         | 1 | 2 | 2–4 según sección |
| CTA principal siempre accesible | Sí (cabecera + CTA fijo 🟡) | Sí | Sí |
| Galería                       | 1–2 columnas / carrusel | 2–3 | 3–4 |
| Tarifas                       | Apiladas (1 columna) | 2 | 2–4 |
| Datos de contacto (sin formulario) | 1 columna | 1–2 columnas | 1–2 columnas |
| Mapa                          | Estático/colapsado 🟡 | Interactivo | Interactivo |
| Tablas comparativas de tarifas | Convertir en tarjetas, **no** tabla con scroll horizontal | Tarjetas | Tarjetas o tabla |

### 7.4 Requisitos de rendimiento e imágenes (transversal)

1. **Imágenes responsive** (varias resoluciones) y en formatos modernos.
2. **Carga diferida** para todo lo que está por debajo del primer pantallazo.
3. **La imagen principal del Hero no se carga de forma diferida** (afecta a la
   métrica de carga percibida).
4. **Reservar espacio** para imágenes y vídeos para evitar saltos de layout.
5. **Las animaciones deben respetar** la preferencia de movimiento reducido del
   sistema (ya contemplado en `src/styles/global.css`).
6. Objetivo de rendimiento 🟡 propuesto: cargar rápido en conexión móvil
   mediocre, evitando vídeos pesados en el Hero.

---

## 8. Accesibilidad básica

Requisito ✅: cumplir **WCAG 2.2 nivel AA** en los criterios aplicables a este
tipo de web. Se documentan requisitos, no implementación.

### 8.1 Contraste y uso del color ✅ (aprobado R-02)

**Paleta aprobada ✅:**

| Color                          | Hex       | Uso permitido                                                        |
| ------------------------------ | --------- | -------------------------------------------------------------------- |
| Negro principal                | `#050505` | Fondo principal, texto sobre fondos claros y sobre amarillo           |
| Gris oscuro                    | `#111111` | Fondos secundarios, bloques y tarjetas                                |
| Amarillo principal             | `#F5C400` | Fondo de CTA y acentos. **Nunca como texto sobre fondo claro**         |
| Blanco                         | `#FFFFFF` | Texto sobre fondos oscuros, fondos claros                             |
| Gris secundario                | `#A3A3A3` | Texto secundario **solo sobre fondos oscuros** y si cumple contraste  |
| **Gris alternativo para fondos claros** | **`#525252`** | **Texto secundario sobre fondos claros** ✅ (nuevo, aprobado)  |

Ratios de contraste calculados:

| Combinación                              | Ratio      | Veredicto |
| ---------------------------------------- | ---------- | --------- |
| Amarillo `#F5C400` sobre negro `#050505` | **12,40:1** | ✅ Excelente |
| Amarillo `#F5C400` sobre gris `#111111`  | **11,49:1** | ✅ Excelente |
| Negro `#050505` sobre amarillo `#F5C400` | **12,40:1** | ✅ Excelente |
| Blanco `#FFFFFF` sobre gris `#111111`    | **18,88:1** | ✅ Excelente |
| Gris `#A3A3A3` sobre negro `#050505`     | **8,08:1**  | ✅ Cumple AA/AAA |
| Gris `#A3A3A3` sobre gris `#111111`      | **7,49:1**  | ✅ Cumple AA/AAA |
| **Gris `#525252` sobre blanco `#FFFFFF`** | **7,81:1** | ✅ Cumple AA/AAA |
| **Blanco `#FFFFFF` sobre amarillo `#F5C400`** | **1,64:1** | ⛔ **Prohibido** |
| **Amarillo `#F5C400` sobre blanco `#FFFFFF`** | **1,64:1** | ⛔ **Prohibido** |
| **Gris `#A3A3A3` sobre blanco `#FFFFFF`**     | **2,52:1** | ⛔ **Prohibido** |

**Reglas obligatorias ✅:**

1. **El amarillo nunca se usa como texto sobre fondo claro.**
2. **Cuando el fondo es amarillo, el texto debe ser negro** (`#050505`). Aplica
   al CTA principal "Únete ahora".
3. **El gris `#A3A3A3` se usa únicamente sobre fondos oscuros** y cuando cumple
   contraste (8,08:1 sobre `#050505`, 7,49:1 sobre `#111111`).
4. **Para fondos claros se utiliza el gris suficientemente oscuro `#525252`**
   (7,81:1 sobre blanco).
5. **Texto de cuerpo ≥ 4,5:1**; texto grande (≥ 24 px o ≥ 19 px en negrita)
   ≥ 3:1.
6. **Componentes de interfaz y bordes significativos ≥ 3:1** frente a su fondo
   (incluye el indicador de foco).
7. **Ningún texto sobre imágenes** sin garantizar el contraste (capa oscura o
   similar).

> **Nota de implementación:** el token del gris alternativo `#525252` **todavía
> no está** en `src/styles/theme.css`. Añadirlo es implementación y corresponde a
> una SPEC posterior; esta SPEC no ha modificado `src/`.

### 8.2 Navegación por teclado

1. Todo elemento interactivo es alcanzable con teclado, en orden lógico.
2. **Enlace "saltar al contenido principal"** como primer elemento enfocable
   (ver S-01).
3. **Sin trampas de foco**: se puede entrar y salir de cualquier componente.
4. El menú móvil y cualquier elemento emergente (galería ampliada, avisos) se
   cierra con **Escape** y devuelve el foco al elemento que lo abrió.
5. Los elementos emergentes gestionan el foco mientras están abiertos.

### 8.3 Estados de foco

1. **Todo elemento enfocable tiene un indicador de foco visible.** Ya existe una
   base en `src/styles/global.css` (`:focus-visible` con contorno amarillo de
   2 px). ✅
2. El indicador debe ser **visible sobre fondos claros y oscuros**; sobre fondo
   claro, el contorno amarillo del color de acento no es válido como único
   indicador (1,64:1) y necesita una variante que cumpla ≥ 3:1.
3. **No se elimina nunca el foco** sin sustituirlo por un indicador equivalente.
4. El foco debe verse en navegación por teclado **y** distinguirse del estado
   `hover`.

### 8.4 Textos alternativos

1. **Toda imagen informativa tiene texto alternativo descriptivo** y en español.
2. **Las imágenes decorativas usan `alt=""`** para no generar ruido.
3. **Fotos de entrenadores**: el texto alternativo describe a la persona en su
   contexto (no "imagen" ni "foto de").
4. **Imágenes de galería**: descripción del contenido real de la imagen.
5. **Iconos con significado** llevan nombre accesible; los decorativos se ocultan
   a lectores de pantalla.
6. **Imágenes de texto (precios, promociones) no se usan**: el texto debe ser
   texto real.

### 8.5 Jerarquía de headings

1. **Un único `<h1>` por página**, que describe el propósito de la página.
2. **Un solo `<h2>` por sección**; los niveles siguen un orden lógico sin saltos.
3. **Los headings se eligen por estructura, no por tamaño visual.**
4. En Inicio, las 8 secciones de contenido se estructuran como `<h2>` y el `<h1>`
   es el mensaje principal del Hero.
5. El logotipo **no** es un heading si se repite en todas las páginas.

### 8.6 Enlaces y botones correctamente identificables

1. **Enlaces para navegar, botones para actuar.** Un CTA que navega a
   `/contacto` es un `<a>`; una acción (abrir el menú móvil) es un `<button>`.
2. **Ningún enlace se disfraza de botón sin serlo semánticamente.**
3. **Texto de enlace descriptivo**: se evitan "clic aquí", "leer más", "más"
   como único texto.
4. **El enlace de la página actual** en la navegación se marca con
   `aria-current="page"` y se distingue visualmente.
5. **Los enlaces externos y las descargas** (si existen) se identifican.
6. Los enlaces de teléfono, WhatsApp y correo usan `tel:`, `https://wa.me/` y
   `mailto:` correctamente formateados.

### 8.7 Formularios — **no aplica en la versión inicial** ✅ (P-03)

⛔ **No hay formulario de contacto** en esta primera versión: no existe ningún
formulario que cumplir ni que validar.

Los siguientes requisitos quedan **documentados para el caso de que en el futuro
se apruebe añadir un formulario**, y no son aplicables ahora:

1. Toda etiqueta asociada a su campo; sin *placeholders* como única etiqueta.
2. Errores anunciados y asociados al campo que los provoca, con texto en español.
3. Campos obligatorios identificados de forma perceptible.
4. `autocomplete` correcto para nombre, correo y teléfono.
5. Orden de tabulación igual al orden visual.

### 8.8 Otros requisitos

1. **`lang="es"`** en el documento; marcar cambios de idioma si aparecen.
2. **Zoom hasta 200%** sin pérdida de contenido ni funcionalidad.
3. **Marcas de referencia** (`header`, `nav`, `main`, `footer`) con un único
   `main` por página.
4. **Sin contenido que parpadee o se mueva solo** sin control del usuario.
5. **Mensajes de estado** anunciados a lectores de pantalla, no solo visuales.
6. **El color no es el único portador de información** (por ejemplo, no indicar
   el plan recomendado solo con amarillo; ver S-04).

---

## 9. SEO básico

No se implementa en esta SPEC. Requisitos iniciales:

### 9.1 Title

1. **Un `<title>` único por página**, descriptivo, no repetido entre páginas.
2. Patrón propuesto 🟡: `Propósito de la página | GymFit`
   (ej. `Tarifas y precios | GymFit`).
3. Longitud orientativa: **50–60 caracteres** para evitar truncado en resultados.
4. **El nombre de marca está centralizado** porque "GymFit" es provisional
   (ver P-06): cambiar la marca no debe exigir editar 5 títulos a mano.

### 9.2 Meta description

1. **Única por página**, con la propuesta de valor y una invitación a la acción.
2. Longitud orientativa: **140–160 caracteres**.
3. No es un factor de posicionamiento directo, pero **sí influye en el clic**.
4. **No duplicar** la misma descripción en varias páginas.

### 9.3 Headings

Se aplican los requisitos de la sección 8.5: un `<h1>` por página que describa
su tema, y `<h2>` por sección.

### 9.4 URLs

1. **En minúsculas, sin acentos ni "ñ"**, con guiones si hace falta y sin
   parámetros ni identificadores.
2. Propuesta 🟡:

   | Página    | URL propuesta   |
   | --------- | --------------- |
   | Inicio    | `/`             |
   | Nosotros  | `/nosotros`     |
   | Servicios | `/servicios`    |
   | Tarifas   | `/tarifas`      |
   | Contacto  | `/contacto`     |

   > `/contacto` es el destino aprobado del CTA principal ✅ (P-02), por lo que
   > esa URL ya no debería cambiar.

3. **Legibles y estables**: no deben contener cambios de campaña ni fechas.
4. 🟡 **Decisión pendiente y con coste si se cambia después:** la estructura de
   URLs debe **congelarse antes de implementar**, porque cambiarla más adelante
   obliga a redirecciones. Ver R-06 y P-01.

### 9.5 Semántica HTML

1. **HTML semántico**: `header`, `nav`, `main`, `section`, `footer`, `address`
   para los datos de contacto.
2. **Una sección con su heading**, sin `<div>` genéricos para todo.
3. **Listas reales** (`ul`/`ol`) para listados de beneficios, servicios y
   características de planes.
4. **La comparativa de tarifas puede ser una tabla**; si en móvil se convierte en
   tarjetas, debe seguir siendo comprensible.
5. **Contenido en el HTML, no inyectado solo por JavaScript** cuando sea posible
   (ver P-10).
6. **Enlaces internos entre páginas relacionadas** (Inicio → Servicios → Tarifas
   → Contacto) para distribuir relevancia.

### 9.6 Open Graph y redes sociales

**Recomendación: sí se considera necesario** 🟡 (pendiente de aprobación),
porque un gimnasio comparte enlaces por WhatsApp, Instagram y Facebook, y el
enlace sin previsualización pierde conversión.

Requisitos:

| Etiqueta                | Valor                                                    |
| ----------------------- | -------------------------------------------------------- |
| `og:title`              | Título de la página + marca                              |
| `og:description`        | Descripción breve                                        |
| `og:image`              | Imagen 1200 × 630 px por página o compartida             |
| `og:url`                | URL canónica de la página                                |
| `og:type`               | `website`                                                |
| `og:locale`             | `es_ES`                                                  |
| `og:site_name`          | Nombre del gimnasio                                      |
| `twitter:card`          | `summary_large_image`                                    |

**Pendiente:** la imagen de Open Graph requiere un asset real (ver P-07) y el
dominio definitivo (ver P-06).

### 9.7 Otros requisitos técnicos de SEO 🟡

1. **URL canónica** por página.
2. **`robots.txt`** y **`sitemap.xml`**.
3. **Favicon** e iconos de aplicación.
4. **Datos estructurados `LocalBusiness`/`Gym` en JSON-LD** con nombre,
   dirección, teléfono, horarios, rango de precios y coordenadas — **alto valor
   para SEO local** 🟡. Requiere datos reales del negocio (ver P-06).
5. **Sin contenido duplicado** entre Inicio y las páginas internas (ver R-03).
6. **Redirecciones** si alguna URL cambia (ver 9.4).
7. **HTTPS** y **un solo dominio canónico** (con o sin `www`, decidir en P-06).
8. **Estrategia de renderizado** (SPA, prerenderizado o SSG): decisión aplazada
   a una SPEC posterior, ver P-10.

---

## 10. Criterios de aceptación — verificados ✅

SPEC-01 se considera **DONE** porque toda esta checklist está satisfecha y el
responsable ha aprobado el documento (2026-09-10).

### 10.1 Documentación

- [x] El archivo `docs/specs/SPEC-01-alcance-estructura.md` existe y está en el
      repositorio.
- [x] El registro `docs/specs/README.md` existe e identifica SPEC-00 (base
      técnica) y SPEC-01 (alcance y estructura).
- [x] Queda registrado explícitamente que **la implementación corresponde a una
      SPEC posterior**.
- [x] El documento contiene las 10 secciones requeridas: objetivo, alcance,
      arquitectura de información, estructura de páginas, navegación, CTAs,
      responsive, accesibilidad, SEO y criterios de aceptación.

### 10.2 Alcance

- [x] Las 5 páginas están definidas: Inicio, Nosotros, Servicios, Tarifas,
      Contacto.
- [x] **No se ha añadido ninguna página adicional** sin aprobación.
- [x] Cada página tiene documentado su propósito y la pregunta que responde.
- [x] La lista de exclusiones (socios, pagos, check-in, usuarios, roles,
      administración, autenticación, base de datos, backend, API propia, SaaS)
      está escrita y es explícita.
- [x] Queda claro que las clases son **informativas** y no reservables.
- [x] Queda claro que **no hay formulario propio ni servicio externo** de
      formularios (P-03).

### 10.3 Estructura

- [x] Las 9 secciones conceptuales de Inicio están documentadas.
- [x] Entrenadores, Galería y Ubicación están registradas como **secciones de
      Inicio**, no como páginas.
- [x] Ubicación está registrada como contenido **compartido** con Contacto.
- [x] Las secciones de Nosotros, Servicios, Tarifas y Contacto están
      documentadas y **marcadas como propuesta 🟡 pendiente de aprobación**.
- [x] Está claro que estas secciones son conceptuales y **no están diseñadas ni
      implementadas**.
- [x] La cabecera y el pie están registrados como **elementos globales** en
      todas las páginas ✅ (R-01).
- [x] La estructura de `/contacto` está decidida y **sin formulario** ✅ (P-03).

### 10.4 Navegación, CTAs y marca

- [x] El modelo de navegación (principal + anclas + CTA) está documentado.
- [x] Está registrado que **React Router no se ha instalado** y que el routing es
      una decisión pendiente.
- [x] El CTA principal "Únete ahora" y el secundario "Conoce el gimnasio" están
      registrados con su ubicación conceptual y su estilo.
- [x] El destino del CTA principal está decidido: **`/contacto`**, coherente en
      toda la web ✅ (P-02).
- [x] Queda registrado que "GymFit" es un **nombre provisional**.

### 10.5 Requisitos transversales

- [x] Los requisitos de responsive están definidos para móvil, tablet y desktop,
      sin CSS concreto.
- [x] Los requisitos de accesibilidad cubren contraste (con ratios verificados),
      teclado, textos alternativos, jerarquía de headings, estados de foco y
      enlaces/botones.
- [x] La regla **"texto negro sobre amarillo, nunca blanco"** está documentada
      como obligatoria ✅ (R-02).
- [x] La regla **"el amarillo no se usa como texto sobre fondo claro"** está
      documentada ✅ (R-02).
- [x] El **gris alternativo `#525252`** para fondos claros está aprobado y
      registrado ✅ (R-02).
- [x] Los requisitos de SEO cubren title, meta description, headings, URLs,
      semántica y Open Graph.
- [x] La recomendación sobre **Open Graph** está documentada y pendiente de
      aprobación.

### 10.6 Integridad del alcance de la SPEC

- [x] **No se ha creado ningún componente** de la web.
- [x] **No se ha creado ninguna página ni ruta.**
- [x] **No se ha implementado navegación.**
- [x] **No se ha diseñado el Hero** ni ninguna sección visual.
- [x] **No se ha añadido ninguna dependencia** al proyecto (verificado en
      `package.json`: 8 dependencias directas, sin React Router).
- [x] `src/` permanece **sin cambios** respecto a SPEC-00 (verificado: el build
      genera el mismo hash de bundle que en SPEC-00).
- [x] No se ha implementado ninguna solución de prerenderizado ni se ha cambiado
      el stack ✅ (R-08).
- [x] El proyecto sigue compilando (`npm run build`) y arrancando (`npm run dev`).

### 10.7 Cierre

- [x] Las decisiones pendientes (sección 11) están listadas con una propuesta
      para cada una.
- [x] El responsable del proyecto **revisa y aprueba** este documento
      (2026-09-10).
- [x] Las decisiones aprobadas (R-01, R-02, R-08, P-02, P-03) están registradas
      en la sección 11.1.
- [x] Los puntos que dependen de SPECs futuras permanecen **explícitamente
      pendientes**, sin resolver por suposición.
- [x] Se actualiza el estado de SPEC-01 a **DONE** en `docs/specs/README.md`.

---

## 11. Decisiones: registro de cierre y puntos abiertos

> Las decisiones aprobadas están en 11.1. Todo lo demás permanece **abierto** y
> **no se ha resuelto por suposición**.

### 11.1 Decisiones aprobadas ✅

#### R-01 — Header y footer como elementos globales ✅ APROBADO

- **Problema original:** el listado de Inicio incluía "Footer" como sección 9,
  cuando un pie de página debe aparecer en todas las páginas.
- **Decisión aprobada:** el header y el footer se consideran **elementos
  globales de la web**, no secciones exclusivas de Inicio, y deben estar
  presentes de forma **consistente en las páginas correspondientes**.
- **Aplicado en este documento:** secciones 3.1, 3.4 (principio 6), 4.1 (fila 9),
  4.6 y 5.2.
- **Fecha:** 2026-09-10.

#### R-02 — Contraste y uso de los colores ✅ APROBADO

- **Problema original:** el amarillo y el gris secundario incumplían contraste
  sobre blanco (1,64:1 y 2,52:1, medidos).
- **Decisión aprobada:** se mantienen las restricciones de accesibilidad y se
  amplía la paleta con un gris para fondos claros:

  | Color | Hex |
  | ----- | --- |
  | Negro principal | `#050505` |
  | Amarillo principal | `#F5C400` |
  | Blanco | `#FFFFFF` |
  | Gris oscuro | `#111111` |
  | Gris secundario | `#A3A3A3` |
  | **Gris alternativo para fondos claros** | **`#525252`** |

- **Reglas aprobadas:**
  1. **Nunca** se utiliza amarillo como texto sobre fondo claro.
  2. Cuando el fondo sea amarillo, **el texto debe ser negro**.
  3. El gris `#A3A3A3` se utiliza **únicamente sobre fondos oscuros** cuando
     cumple contraste.
  4. Para fondos claros se utiliza un **gris suficientemente oscuro** (`#525252`,
     7,81:1 sobre blanco).
  5. **WCAG 2.2 AA sigue siendo un requisito.**
- **Aplicado en este documento:** secciones 2.1, 6.1, 8.1 (paleta y reglas) y
  10.5.
- **Nota:** el token `#525252` **no** se ha añadido a `src/styles/theme.css`;
  hacerlo es implementación y queda para una SPEC posterior.
- **Fecha:** 2026-09-10.

#### R-08 — SEO y renderizado ✅ APROBADO (decisión aplazada)

- **Problema original:** una aplicación renderizada en el cliente tiene
  desventajas de SEO y devuelve 404 en rutas profundas sin reescritura en el
  hosting.
- **Decisión aprobada:** **no se toma todavía una decisión definitiva** entre
  SPA, prerenderizado o SSG.
  1. Se mantiene **React + TypeScript + Vite** como stack aprobado.
  2. La decisión se **deja para una SPEC posterior** relacionada con SEO y
     arquitectura técnica.
  3. **No se implementa ninguna solución de prerenderizado** ni se cambia el
     stack.
- **Continuidad:** la decisión abierta se traslada a **P-10** (sección 11.3).
- **Aplicado en este documento:** secciones 2.3, 9.7 (punto 8) y 10.6.
- **Fecha:** 2026-09-10.

#### P-02 — Destino del CTA "Únete ahora" ✅ APROBADO

- **Decisión aprobada:** el CTA principal **"Únete ahora" lleva a `/contacto`**.
  La intención es que el usuario interesado pueda contactar con el gimnasio para
  informarse o apuntarse.
- **Restricciones confirmadas:** en esta fase **no hay sistema de reservas, ni
  compra online, ni área de usuarios**.
- **Regla aprobada:** el CTA debe ser **coherente en toda la web** y utilizar
  `/contacto` como destino principal.
- **Aplicado en este documento:** secciones 1.1, 2.1, 3.2, 3.3, 4.1, 4.2, 4.4,
  5.2, 6.1, 6.4, 9.4 y 10.4.
- **Detalle abierto derivado:** comportamiento del CTA **en `/contacto`** →
  ver **P-11**.
- **Fecha:** 2026-09-10.

#### P-03 — Formulario de contacto ✅ APROBADO

- **Decisión aprobada:** **NO se implementa formulario propio** en esta primera
  versión.
- **Contenido decidido para `/contacto`:**
  - teléfono
  - email
  - WhatsApp, **si finalmente se dispone de un número real**
  - dirección
  - horario
  - enlace para obtener indicaciones
- **Restricciones aprobadas:** **no habrá backend, API, base de datos ni
  servicio externo de formularios.**
- **Continuidad:** los datos reales del negocio se incorporarán posteriormente
  cuando corresponda (ver P-06).
- **Aplicado en este documento:** secciones 2.1, 2.2, 4.5, 6.3, 8.7 y 10.2.
- **Fecha:** 2026-09-10.

### 11.2 Riesgos que permanecen abiertos 🟡

#### R-03 — Duplicación de contenido entre Inicio y las páginas internas

- **Problema:** Inicio incluye "Servicios y clases destacadas", "Tarifas
  destacadas" y "Ubicación", que también existen como páginas o bloques. Si se
  copia el contenido completo: (a) riesgo de canibalización SEO, (b) dos copias
  que mantener, con el peligro de que **los precios se desincronicen**.
- **Propuesta:** en Inicio, mostrar **resúmenes/destacados con enlace** a la
  página completa, y definir **una única fuente de datos** para tarifas,
  servicios y entrenadores.
- **Por qué:** mantiene la conversión de Inicio sin penalizar SEO ni duplicar
  mantenimiento.
- **Impacto:** medio. Condiciona cómo se estructuran los contenidos.

#### R-04 — Entrenadores y Galería no tienen entrada en la navegación principal

- **Problema:** son secciones de Inicio, no páginas, así que no ocupan un lugar
  en la navegación de 5 elementos. Quien llega a Nosotros o Servicios puede no
  descubrirlas nunca, y la galería y el equipo son argumentos de venta fuertes.
- **Propuesta (elegir una):**
  1. Enlazarlas desde el **pie de página** y desde las páginas relacionadas
     (Nosotros → equipo; Servicios → clases).
  2. Incluirlas como elementos del menú móvil aunque sean anclas.
  3. Crear páginas propias — **descartado**, requeriría aprobar páginas nuevas.
- **Por qué:** resuelve la descubribilidad sin violar la decisión de que sean
  secciones ni añadir páginas.
- **Impacto:** bajo-medio. Afecta a la navegación (sección 5).

#### R-05 — Los enlaces con ancla a otra página requieren tratamiento explícito

- **Problema:** en una aplicación de página única, ir a `/#entrenadores` desde
  otra página **no desplaza automáticamente** al elemento, y si la cabecera es
  fija, el destino queda oculto tras ella. Además, el foco no se mueve al
  destino, lo que rompe la navegación por teclado.
- **Propuesta:** especificar en la SPEC de routing el comportamiento de
  desplazamiento a anclas (desplazamiento tras el render, compensación de la
  cabecera fija, gestión del foco) y decidir si la cabecera es fija o estática.
- **✅ Cerrado en parte (2026-09-10):** la cabecera es **ESTÁTICA**:
  `position: fixed` y `position: sticky` quedan descartados en esta primera
  versión, y convertirlos en fija exigirá una **decisión explícita nueva**
  (SPEC-02 §15.1, decisión 5). **Sigue abierto:** el comportamiento de
  desplazamiento y de foco hacia las anclas entre páginas.
- **Por qué:** es un detalle que suele implementarse mal y genera frustración
  real; mejor especificarlo que improvisarlo.
- **Impacto:** medio. Es requisito de entrada para la SPEC de routing.

#### R-06 — La estructura de URLs debe congelarse antes de implementar

- **Problema:** las URLs propuestas (`/nosotros`, `/servicios`, …) son fáciles
  de cambiar ahora y caras de cambiar después (redirecciones, enlaces rotos,
  posicionamiento perdido). `/contacto` ya está fijada por P-02.
- **Propuesta:** aprobar el resto de la estructura de URLs (sección 9.4) **junto
  con la decisión de routing**, antes de escribir código.
- **Por qué:** es una decisión barata ahora e irreversible en la práctica
  después.
- **Impacto:** medio.

#### R-07 — Contenido variable incrustado en el marcado

- **Problema:** tarifas, entrenadores, servicios, horarios y datos de contacto
  cambian con el tiempo. Si se escriben directamente en el marcado, cada cambio
  es una edición de código y un despliegue. El riesgo concreto: **precios y
  horarios desactualizados publicados**.
- **Propuesta:** definir los contenidos variables en **una fuente de datos única
  y tipada** (archivos de datos tipados en TypeScript), consumida por las
  secciones. Decidir su forma en la SPEC de implementación.
- **Por qué:** encaja con el objetivo de "plantilla reutilizable" (cambiar
  contenido sin tocar componentes) y evita inconsistencias entre Inicio y las
  páginas internas.
- **Impacto:** medio. Es una decisión de arquitectura.

### 11.3 Decisiones pendientes de tomar (para SPECs posteriores) 🟡

#### P-01 — Routing y URLs

- **Decisión necesaria:** ¿se instala React Router? ¿Las 5 páginas son rutas
  reales? ¿URLs definitivas? ¿Hay página 404?
- **Opciones:** (a) sin router, navegación con anclas en una sola página;
  (b) router con 5 rutas reales; (c) router con carga diferida por ruta.
- **Recomendación:** **(b) router con 5 rutas reales**, porque las 5 páginas
  están aprobadas como páginas y cada una tiene propósito propio y valor SEO.
  La opción (a) contradice la decisión de las 5 páginas y ya no encaja con el
  destino `/contacto`; la (c) es optimización prematura para 5 páginas.
- **Por qué:** coherencia con lo aprobado y mejor posicionamiento por intención
  de búsqueda.
- **Cuándo:** SPEC de routing.

#### P-04 — Páginas legales (aviso legal, privacidad, cookies)

- **Problema:** una web corporativa española que publica datos de contacto y
  enlaza a mapas o mensajería de terceros necesita, con alta probabilidad,
  **aviso legal, política de privacidad y política de cookies**. Hoy no hay
  ninguna. **No se han añadido páginas porque requerirían aprobación.**
- **Nota:** al haberse descartado el formulario (P-03), el riesgo de tratamiento
  de datos propios disminuye, pero **no desaparece** si se añade analítica o
  contenido de terceros.
- **Propuesta:** decidir estas páginas antes de publicar, en una SPEC propia.
- **Por qué:** es una obligación legal habitual en este tipo de web, no una
  preferencia de diseño. **No soy asesor legal**: conviene confirmarlo con un
  profesional antes de publicar.
- **Impacto:** medio. Afecta al pie de página.

#### P-05 — Mapa de ubicación: incrustado o estático

- **Problema:** incrustar un mapa de un tercero carga cookies y recursos de
  terceros, con implicaciones de privacidad y de rendimiento.
- **Propuesta:** empezar por **imagen estática del mapa con enlace a la app de
  mapas** (coherente con "enlace para obtener indicaciones" de P-03), y decidir
  el mapa interactivo tras resolver P-04.
- **Por qué:** mantiene la utilidad sin cargar terceros.
- **Impacto:** medio. Afecta a la sección Ubicación (Inicio y Contacto).

#### P-06 — Marca, dominio y datos reales del negocio

- **Problema:** "GymFit" es **provisional** y muy genérica. Aparece en el
  `<title>`, en Open Graph, en el logotipo y en los datos estructurados de SEO
  local. Además, `/contacto` necesita **datos reales** (teléfono, email,
  dirección, horario) que hoy no existen.
- **Propuesta:** considerar la marca y el dominio como decisiones abiertas,
  **centralizar** el nombre, y recopilar los datos reales antes de la SPEC de
  SEO y de contenido.
- **Por qué:** el nombre genérico puede tener conflicto de marca o dominio
  ocupado; sin datos reales no se puede completar `/contacto`.
- **Impacto:** medio-alto. No bloquea el diseño, sí el contenido final.

#### P-07 — Imágenes y assets

- **Problema:** no hay ninguna imagen. Galería, entrenadores y Hero dependen de
  material audiovisual que no existe. Publicar **fotos de personas
  identificables** requiere su consentimiento, y usar imágenes de stock tiene
  condiciones de licencia.
- **Propuesta:** decidir el origen (fotos reales, stock con licencia, material
  temporal de marcador de posición) y recoger los consentimientos necesarios.
- **Por qué:** sin assets no se puede diseñar la galería ni el Hero, y es un
  riesgo legal si se improvisa.
- **Impacto:** medio-alto. Bloquea el diseño visual.

#### P-08 — Idioma

- **Suposición actual:** **la web es solo en español.** Se asume porque toda la
  documentación y los textos aprobados están en español.
- **Pendiente:** confirmar. Si se prevé más de un idioma, hay que decidirlo
  **antes de fijar las URLs** (afecta a `/es/…`, `/en/…` o subdominios).
- **Por qué:** es barato ahora y caro después.
- **Impacto:** medio si se prevé más de un idioma; nulo si se confirma uno solo.

#### P-09 — Horarios de clases y de atención

- **Problema:** los horarios son el dato que más cambia y el que más se
  desactualiza. Publicar horarios implica compromiso de mantenimiento.
- **Nota:** el **horario de atención del local** ya está decidido como contenido
  de `/contacto` ✅ (P-03). Lo que sigue pendiente es si se publican además
  **horarios detallados de clases**.
- **Propuesta:** decidir si se publican y quién los mantiene.
- **Por qué:** un horario incorrecto genera mala experiencia y llamadas
  innecesarias, peor que no publicarlo.
- **Impacto:** bajo-medio.

#### P-10 — Estrategia de renderizado y SEO técnico *(heredada de R-08)*

- **Decisión necesaria:** SPA con renderizado en cliente, SPA **con
  prerenderizado** de las 5 páginas, o generador de sitios estáticos.
- **Estado:** **aplazada expresamente** por decisión del responsable (R-08,
  sección 11.1). Se mantiene React + TypeScript + Vite y **no se implementa
  ningún prerenderizado** mientras no se decida.
- **Opciones y consecuencias:**
  1. SPA **+ prerenderizado** en el build: mantiene el stack, resuelve SEO y el
     404 de rutas profundas. *Recomendada.*
  2. SPA sin prerenderizar: coste de SEO y necesidad de reescritura de rutas en
     el hosting.
  3. SSG: descartado por ahora, cambia el stack aprobado.
- **Por qué importa:** es la decisión técnica con más impacto en el objetivo de
  captar contactos vía buscadores.
- **Cuándo:** SPEC de SEO / arquitectura técnica.

#### P-11 — Detalles de CTAs pendientes

Dos detalles que P-02 deja sin resolver y que **no se resuelven por suposición**:

1. **Comportamiento del CTA principal en la propia página `/contacto`.** El CTA
   "Únete ahora" apunta a `/contacto`; encontrándose el usuario ya en esa página,
   debe decidirse si el CTA se oculta, cambia de texto o pasa a ser una acción
   directa (llamar / WhatsApp / email).
   - *Propuesta:* en `/contacto`, sustituirlo por las acciones de contacto
     directo (llamar, WhatsApp si hay número real, email), que es la acción útil
     en ese punto.
2. **Destino del CTA secundario "Conoce el gimnasio".** Sigue sin aprobar.
   - *Propuesta:* `/nosotros`.

- **Por qué:** un CTA sin destino definido o redundante es un fallo de
  conversión o de coherencia; y P-02 exige coherencia en toda la web.
- **Impacto:** medio. Afecta a la cabecera, al Hero y a `/contacto`.
- **Cuándo:** antes de diseñar los CTAs.

### 11.4 Sugerencias pendientes de aprobación 🟡

| ID   | Sugerencia | Motivo | Estado |
| ---- | ---------- | ------ | ------ |
| S-01 | Enlace "saltar al contenido principal" como primer elemento enfocable | Accesibilidad básica con teclado | ✅ **aprobada e implementada** (Bloque 1) |
| S-02 | Barra de CTA fija en móvil | La conversión móvil es la mayoritaria en gimnasios locales | 🟡 propuesta |
| S-03 | Página 404 propia | Evita perder visitas por enlaces rotos o URLs mal escritas | 🟡 propuesta |
| S-04 | Marcar el plan recomendado con más de un indicador (no solo el color) | Accesibilidad: el color no es el único portador de información | 🟡 propuesta |

### 11.5 Resumen de puntos abiertos

| Tipo | Abiertos | Aprobados y cerrados |
| ---- | -------- | -------------------- |
| Riesgos | R-03, R-04, R-05 (solo la parte de anclas), R-06, R-07 | R-01, R-02, R-08 |
| Pendientes | P-01, P-04, P-05, P-06, P-07, P-08, P-09, P-10, P-11 | P-02, P-03 |
| Sugerencias | S-02, S-03, S-04 | S-01 |

---

## 12. Fuera de alcance de SPEC-01 (recordatorio)

⛔ Esta SPEC **no** produce: páginas, componentes, navegación, diseño del Hero,
estilos finales, routing, prerenderizado, dependencias nuevas, contenidos
definitivos, backend, autenticación, base de datos, APIs ni formularios.

**Verificado al cierre:** no se ha instalado React Router, no se ha añadido
ninguna dependencia, no se ha modificado `src/` (el build genera el mismo hash
de bundle que en SPEC-00) y el color `#525252` **no** se ha añadido todavía a
`src/styles/theme.css`.

---

## 13. Historial de cambios

| Fecha      | Cambio                                                            |
| ---------- | ----------------------------------------------------------------- |
| 2026-09-10 | Creación inicial de SPEC-01 a partir de las decisiones aprobadas. |
| 2026-09-10 | Aprobadas R-01, R-02, R-08 (aplazada), P-02 y P-03. SPEC-01 pasa a **✅ Aprobada / DONE**. Registro de decisiones en 11.1; puntos abiertos reordenados en 11.2–11.5; nueva P-10 (renderizado/SEO) y nueva P-11 (detalles de CTAs). Criterios de aceptación verificados. |
| 2026-09-10 | **Sincronización con el cierre del Bloque 1** (SPEC-02 revisión 2, §15). Aprobado el **patrón del menú móvil** (§5.4: panel vertical desplegable bajo la cabecera, con los requisitos de accesibilidad). Aprobada la **cabecera estática** (§11.2, R-05: cerrado en parte; el comportamiento de anclas sigue abierto). **S-01** pasa a aprobada e implementada (`SkipLink`). **No se modifica el alcance**: siguen las 5 páginas, las secciones, los CTAs y el stack. |
