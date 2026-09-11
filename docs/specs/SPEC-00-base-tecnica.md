# SPEC-00 — Base técnica del proyecto

| Campo | Valor |
| ----- | ----- |
| **ID** | SPEC-00 |
| **Título** | Base técnica del proyecto |
| **Fecha** | 2026-09-10 |
| **Estado** | ✅ **DONE** (verificado y en producción local) |
| **Naturaleza** | ⚠️ **Documento reconstruido** — ver nota de reconstrucción |
| **Depende de** | — (es la primera SPEC del proyecto) |
| **Produce** | La base técnica ejecutable: React + TypeScript + Vite con CSS propio |
| **Desbloqueó** | SPEC-01 (alcance), SPEC-02 (diseño), SPEC-03 (página Inicio) y los Bloques 1 y 2 de implementación |

> ### ⚠️ Nota de reconstrucción (C-04)
>
> SPEC-00 **se ejecutó y se validó**, pero **nunca se escribió como archivo**: su
> registro vivía únicamente en `docs/specs/README.md`, que lo daba por **DONE**.
> Eso se detectó como contradicción **C-04** al redactar SPEC-03.
>
> Este documento se ha creado el 2026-09-10 para que el índice no vuelva a
> declarar terminada una SPEC que no existe físicamente. **No introduce ninguna
> decisión nueva:** recoge lo que ya estaba aprobado y documentado en
> `README.md`, en SPEC-01, en SPEC-02 y en el propio repositorio (verificado
> leyendo `package.json`, los `tsconfig`, `index.html` y `src/`).
>
> Donde la documentación existente no permitía afirmar algo con seguridad, se ha
> **dejado fuera** o se ha marcado como tal. No se ha inventado nada.

---

## 1. Objetivo

Disponer de la **base técnica mínima ejecutable** del proyecto —React +
TypeScript + Vite— **sin implementar ninguna parte de la web**.

El objetivo era tener un proyecto que arrancara, compilara y estuviera listo para
empezar a construir, **sin adelantar decisiones de diseño ni de producto**.

---

## 2. Alcance

### 2.1 Incluye

- Proyecto **React + TypeScript + Vite** inicializado y ejecutable.
- Estructura mínima de `src/`, `index.html` y archivos de configuración.
- Configuración de **TypeScript en modo estricto**.
- **Tokens de la identidad visual** centralizados en un único archivo.
- Pantalla temporal de verificación (no era diseño de la web).
- Un conjunto **mínimo de dependencias**: 2 de ejecución y 6 de desarrollo.
- Scripts de trabajo: desarrollo, build, previsualización y comprobación de tipos.

### 2.2 Queda fuera ⛔ (explícito y vigente)

Los siguientes elementos **nunca** formaron parte del proyecto y siguen
excluidos (SPEC-01 §2.2 los enumera como exclusiones del alcance):

| Excluido | Estado |
| -------- | ------ |
| **Backend propio** | ⛔ No existe ni se prevé |
| **Base de datos** | ⛔ No existe ni se prevé |
| **API propia** | ⛔ No existe ni se prevé |
| **Autenticación** (login, registro, sesiones) | ⛔ No existe |
| **Usuarios, cuentas y roles** | ⛔ No existen |
| **Panel de administración / CMS** | ⛔ No existe |
| **Librerías de UI o de componentes** | ⛔ No se instaló ninguna |
| **Bootstrap / Tailwind / CSS-in-JS** | ⛔ No se instaló ninguno |
| **Librería de iconos** | ⛔ No se instaló ninguna |
| **Pagos, suscripciones, reservas, check-in** | ⛔ Fuera de alcance |
| **Funcionalidades SaaS** | ⛔ Fuera de alcance |

### 2.3 Decisiones que **no** se tomaron en SPEC-00

Registrado expresamente en el índice del proyecto: en SPEC-00 **no** se
decidieron

- la **librería o estrategia de estilos** (se cerró después, en SPEC-02 §15.1);
- el **routing** (sigue pendiente: **P-01**);
- el **sistema de componentes** (se cerró después, en SPEC-02 §5 y §15.1).

---

## 3. Stack

### 3.1 Tecnologías y versiones

Tomadas de `package.json` y del lockfile instalado (que no ha cambiado desde
entonces):

| Ámbito | Paquete | Versión declarada | Versión instalada |
| ------ | ------- | ----------------- | ----------------- |
| Ejecución | `react` | `^19.3.0` | 19.3.0 |
| Ejecución | `react-dom` | `^19.3.0` | 19.3.0 |
| Desarrollo | `vite` | `^8.2.2` | 8.2.2 |
| Desarrollo | `@vitejs/plugin-react` | `^6.1.1` | 6.1.1 |
| Desarrollo | `typescript` | `^7.0.2` | 7.0.2 |
| Desarrollo | `@types/react` | `^19.3.0` | 19.3.0 |
| Desarrollo | `@types/react-dom` | `^19.3.0` | 19.3.0 |
| Desarrollo | `@types/node` | `^22.20.2` | 22.20.2 |

**Total: 8 dependencias directas** (2 de ejecución + 6 de desarrollo).
⛔ Ninguna librería de estilos, de componentes, de iconos, de routing ni de
testing.

### 3.2 Entorno en el que se validó

| Herramienta | Versión |
| ----------- | ------- |
| Node.js | v24.11.0 |
| npm | 11.6.1 |

*(Dato de entorno, no una decisión de arquitectura.)*

---

## 4. Estructura

### 4.1 Estructura entregada en SPEC-00

```
GymFit/
├── .gitignore
├── index.html
├── package.json
├── package-lock.json
├── tsconfig.json           # raíz: referencias
├── tsconfig.app.json       # TS estricto para src/
├── tsconfig.node.json      # TS para archivos de build
├── vite.config.ts
└── src/
    ├── main.tsx            # arranque de React + StrictMode
    ├── App.tsx             # pantalla temporal de verificación
    ├── App.css
    ├── vite-env.d.ts
    └── styles/
        ├── theme.css       # tokens de la identidad visual
        └── global.css      # reset ligero + estilos base
```

### 4.2 Evolución posterior (no forma parte de SPEC-00)

- **Bloque 1**: `src/styles/global.css` se renombró a **`base.css`** (para
  coincidir con la capa "Reset / base" de SPEC-02 §1.5), `src/App.css`
  (scaffolding) se **eliminó**, y `App.tsx` pasó a ser el armazón de la
  aplicación. La **estructura de archivos** quedó **ratificada en SPEC-02 §15.1
  (decisión 1)**.
- **Bloques 1 y 2**: se añadieron los componentes de SPEC-02 §5.3
  (`Header`, `Footer`, `Nav`, `SkipLink`, `Button`, `Icon`), la página
  `src/pages/Home/` y `src/data/`.

### 4.3 Estructura actual (verificada en el repositorio)

```
src/
├── components/<ComponentName>/   # .tsx + .css co-localizados
├── data/                         # datos estáticos tipados
├── pages/Home/                   # página Inicio
├── styles/                       # theme.css · base.css · layout.css
├── App.tsx
├── main.tsx
└── vite-env.d.ts
```

---

## 5. Configuración de TypeScript

Se estableció una configuración **estricta en tres archivos**:

| Archivo | Contenido |
| ------- | --------- |
| `tsconfig.json` | Sin archivos propios: solo **referencias** a los dos proyectos |
| `tsconfig.app.json` | Código de `src/`: `strict`, `noUnusedLocals`, `noUnusedParameters`, `noFallthroughCasesInSwitch`, `noUncheckedSideEffectImports`, `noEmit`, `isolatedModules`, `verbatimModuleSyntax`, `moduleDetection: force`, `jsx: react-jsx`, `moduleResolution: bundler`, `types: ["vite/client"]` |
| `tsconfig.node.json` | Archivos de build (`vite.config.ts`): `types: ["node"]` |

Notas:

- **`noEmit: true`**: TypeScript **solo comprueba tipos**; el bundler es Vite.
- La separación en dos proyectos evita que el código de aplicación vea los
  tipos de Node y viceversa.
- El rigor se activó **desde el principio** (objetivo de aprendizaje del
  proyecto: es más fácil mantenerlo que introducirlo después).

---

## 6. Scripts

| Script | Comando | Función |
| ------ | ------- | ------- |
| `npm run dev` | `vite` | Servidor de desarrollo |
| `npm run build` | `tsc -b && vite build` | Comprobación de tipos + build de producción |
| `npm run preview` | `vite preview` | Sirve el resultado del build |
| `npm run typecheck` | `tsc -b --noEmit` | Solo comprobación de tipos |

---

## 7. Tokens e identidad visual

SPEC-00 estableció un **único punto de tokens** en `src/styles/theme.css`, con la
justificación registrada de que **un cambio de marca sea un cambio en un solo
archivo**.

- Los **5 colores** de la identidad los aprobó el responsable en SPEC-01
  (§8.1) y SPEC-00 los materializó como variables.
- El sistema de tokens se **amplió y renombró después** a la convención
  **`--gf-`** en SPEC-02 §2 y §15.1; la reconciliación efectiva se hizo en el
  Bloque 1 (**C-02**, ya resuelta).
- Convenciones de nombres vigentes: prefijo **`--gf-`** en tokens, **`gf-`** en
  clases y **BEM-lite** (SPEC-02 §1.6).

---

## 8. HTML de entrada

`index.html` establecido en SPEC-00:

| Elemento | Valor |
| -------- | ----- |
| `lang` | `es` |
| `meta viewport` | `width=device-width, initial-scale=1.0` |
| `meta description` | "Web corporativa de gimnasio." (provisional) |
| `meta theme-color` | `#050505` |
| `title` | `GymFit` (nombre **provisional**: **P-06**) |
| Punto de montaje | `<div id="root">` |
| Entrada | `<script type="module" src="/src/main.tsx">` |

`main.tsx` monta React con **`StrictMode`** y **comprueba que `#root` existe**
(lanza un error si no, evitando un fallo silencioso bajo `strict`).

---

## 9. Validación realizada en SPEC-00

| Comprobación | Resultado |
| ------------ | --------- |
| `npm run typecheck` | ✅ Sin errores |
| `npm run build` | ✅ Correcto (**18 módulos**) |
| Servidor de desarrollo | ✅ `http://localhost:5173/` con respuesta **200** |
| Transformación de módulos | ✅ `main.tsx`, `App.tsx` y los CSS responden 200 |
| Vulnerabilidades (`npm audit`) | ✅ **0** |

---

## 10. Decisiones registradas

### 10.1 Tomadas en SPEC-00

1. **Stack**: React + TypeScript + Vite, sin backend ni base de datos.
2. **TypeScript estricto** desde el inicio, en tres archivos.
3. **Tokens de identidad centralizados** en un solo archivo.
4. **Dependencias mínimas**: solo las imprescindibles (8 directas).
5. **`#root` verificado** en el arranque, sin fallos silenciosos.

### 10.2 Explícitamente **no** tomadas en SPEC-00

- Librería o estrategia de estilos → cerrada después en SPEC-02.
- Routing → **sigue pendiente** (**P-01**); ⛔ no se instala React Router.
- Sistema de componentes y estructura de carpetas → cerrados después en
  SPEC-02 §5 y §15.1.

---

## 11. Filosofía de arquitectura

Registrada como principio del proyecto y vigente:

1. **Arquitectura simple y mantenible**, sin sobrearquitecturar.
2. **CSS propio** y **capa base propia**: ⛔ sin Bootstrap, sin Tailwind, sin
   CSS-in-JS y sin librerías externas de componentes (ratificado en SPEC-02
   §15.1; la ambigüedad original de "bootstrap simple" se resolvió como
   **capa base propia** — **C-01**).
3. **Sin dependencias innecesarias**: cada una debe justificarse.
4. **Los datos, separados de la presentación**: contenido estático tipado en
   `src/data/` (SPEC-01 **R-07**, SPEC-02 §5.6.6).
5. **Un único punto de tokens** para la identidad visual.
6. **El proyecto es de aprendizaje y portfolio**: se prioriza entender y
   mantener por encima de la comodidad a corto plazo.

---

## 12. Convenciones aplicables

| Convención | Valor | Origen |
| ---------- | ----- | ------ |
| Prefijo de tokens CSS | `--gf-` | SPEC-02 §1.6 |
| Prefijo de clases CSS | `gf-` | SPEC-02 §1.6 |
| Nomenclatura de clases | BEM-lite (`.gf-card`, `.gf-card__media`, `.gf-card--pricing`) | SPEC-02 §1.6 |
| Estructura de componentes | `src/components/<ComponentName>/` con `.tsx` + `.css` | SPEC-02 §15.1 |
| Datos estáticos | `src/data/` (un archivo por página + `navigation.ts`) | SPEC-02 §15.1 y SPEC-03 §15 |
| Estilos globales | `src/styles/` por capas: tokens → base → layout | SPEC-02 §1.5 |
| Breakpoints | Solo `768px` y `1024px` | SPEC-02 §3.1 |
| Idioma del proyecto | Español (documentación, código y web) | `README.md` |

---

## 13. Estado actual y relación con las demás SPEC

| SPEC | Relación con SPEC-00 |
| ---- | -------------------- |
| SPEC-01 | Definió **qué** web se construye. No cambió el stack. |
| SPEC-02 | Definió **cómo se ve**. Amplió los tokens de SPEC-00 y ratificó la estructura de archivos. |
| SPEC-03 | Definió la página **Inicio**. No cambia el stack. |
| Bloques 1 y 2 | Construyeron sobre esta base: fundaciones, componentes globales, `Icon` y el Hero. |

**Verificaciones vigentes de la base:**

- El proyecto **compila** (`npm run typecheck`, `npm run build`) y **arranca**
  (`npm run dev`).
- El CSS compilado **no contiene** ningún `--color-`, `--radius-` ni
  `--font-sans`: la migración a `--gf-` está completa (**C-02** resuelta).
- El **lockfile no ha cambiado** desde SPEC-00: sigue habiendo **8**
  dependencias directas.

---

## 14. Criterios de aceptación (verificados)

- [x] El proyecto usa **React + TypeScript + Vite**.
- [x] `npm run typecheck` termina **sin errores**.
- [x] `npm run build` termina **correctamente**.
- [x] El servidor de desarrollo **arranca** y responde 200.
- [x] La configuración de TypeScript es **estricta**.
- [x] Los tokens de identidad viven en **un único archivo**.
- [x] ⛔ **No hay backend**, ni base de datos, ni API propia.
- [x] ⛔ **No hay autenticación**, ni usuarios, ni roles.
- [x] ⛔ **No hay librerías de UI**, ni Bootstrap, ni Tailwind, ni CSS-in-JS.
- [x] ⛔ **No hay routing** instalado.
- [x] Las dependencias directas son **8** y todas están justificadas.
- [x] Existe este **documento** que registra la SPEC-00 (antes solo en el índice).

---

## 15. Historial de cambios

| Fecha | Cambio |
| ----- | ------ |
| 2026-09-10 | **SPEC-00 ejecutada y validada**, registrada únicamente en `docs/specs/README.md` (sin archivo propio). |
| 2026-09-10 | **Reconstrucción documental** para cerrar **C-04**: se crea este archivo a partir de la información ya aprobada (índice, SPEC-01, SPEC-02 y verificación del repositorio). **No se ha modificado `src/`, ni dependencias, ni configuración.** Estado: ✅ DONE. |
