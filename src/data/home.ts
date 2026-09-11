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
