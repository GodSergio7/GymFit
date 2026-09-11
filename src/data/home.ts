/**
 * Contenido del Hero de la página Inicio.
 *
 * ⚠️ CONTENIDO PROVISIONAL DE DESARROLLO.
 *
 * Ninguna SPEC define todavía el copy definitivo de la Home y el proyecto no
 * tiene datos reales del gimnasio (SPEC-01 §11.3, P-06). Por eso:
 *   - el texto vive aquí, tipado, y no incrustado en el componente
 *     (SPEC-01 §11.2 R-07 y SPEC-02 §5.6.6: los componentes no conocen el copy);
 *   - es deliberadamente genérico y **no afirma nada verificable del negocio**:
 *     ni cifras, ni servicios, ni precios, ni superioridad;
 *   - se marca como contenido de desarrollo en la propia interfaz (`devNote`).
 *
 * Al aprobar el copy real: se sustituyen `title` y `lead`, y se retira
 * `devNote` junto con su párrafo en `Hero.tsx`.
 */
export const HERO_CONTENT = {
  /** Titular del Hero. Único `h1` de la página (SPEC-01 §8.5). */
  title: 'Entrena con propósito',
  /** Texto de apoyo. Debe complementar el titular sin ser un bloque largo. */
  lead: 'Un espacio para entrenar en serio.',
  /** Marca visible de contenido de desarrollo. Se retira con el copy definitivo. */
  devNote: 'Contenido de desarrollo: copy provisional pendiente de aprobación.',
} as const

/**
 * Encabezado del bloque **Beneficios / propuesta de valor** (bloque 2 de Inicio).
 *
 * ⚠️ COPY PROVISIONAL DE DESARROLLO (SPEC-03 §15.2, H-18).
 *
 * Vive aquí y no en el componente porque los componentes no conocen copy
 * (SPEC-02 §5.6.6, SPEC-01 R-07), igual que `HERO_CONTENT`. El `h2` de bloque no
 * aparece en la tabla de SPEC-03 §15.1 porque esa tabla enumera el contenido
 * variable de cada bloque; el título del bloque es el mismo caso que el `h1` del
 * Hero, que sí vive en `HERO_CONTENT`.
 *
 * Al aprobar el copy real: se sustituyen `title` y `text` (SPEC-01 §11.3, P-06).
 */
export const BENEFITS_CONTENT = {
  /** Título del bloque. Se renderiza como `h2` (SPEC-03 §2.3 y §16.2). */
  title: 'Por qué GymFit',
  /** Texto de apoyo del encabezado. Opcional para `SectionHeading`. */
  text: 'Cuatro razones para entrenar aquí.',
} as const

/**
 * Un argumento de la propuesta de valor.
 *
 * El bloque usa **exactamente 4** elementos (SPEC-03 §4, H-06) y cada uno se
 * renderiza como `h3` + descripción de 1–2 frases.
 */
export type Benefit = {
  /** Título corto y escaneable. Se renderiza como `h3`. */
  title: string
  /** Descripción de 1–2 frases. */
  description: string
}

/**
 * Los 4 beneficios de Inicio (bloque 2).
 *
 * ⚠️ COPY PROVISIONAL DE DESARROLLO (SPEC-03 §15.2, H-18; pendiente de **P-06**).
 *
 * Son deliberadamente genéricos y **no afirman nada verificable del negocio**:
 * ni cifras, ni precios, ni servicios, ni instalaciones, ni años de experiencia,
 * ni nombres. Formulan la actitud del gimnasio, no hechos sobre él. Cuando
 * existan datos reales se sustituyen los cuatro elementos, manteniendo la cifra
 * de 4 (H-06).
 */
export const BENEFITS: Benefit[] = [
  {
    title: 'Propósito',
    description:
      'Entrenar con una intención clara: saber qué se busca antes de empezar.',
  },
  {
    title: 'Constancia',
    description:
      'Lo que sostiene un resultado es repetir. Se entrena para durar, no para una semana.',
  },
  {
    title: 'Sin ruido',
    description:
      'Sin adornos ni promesas que no se puedan sostener: solo el trabajo que haces.',
  },
  {
    title: 'Progreso',
    description:
      'Cada sesión cuenta como un paso. La mejora se mide con el tiempo, no en un día.',
  },
]
