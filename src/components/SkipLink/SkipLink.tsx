import './SkipLink.css'

/**
 * Identificador del contenido principal. Vive aquí para que el SkipLink y el
 * `<main>` de App no puedan desincronizarse.
 */
export const MAIN_CONTENT_ID = 'contenido-principal'

/**
 * Enlace para saltar al contenido principal (SPEC-01 §8.2.2 y §11.4, S-01).
 *
 * Es el primer elemento enfocable de la página. Permanece oculto visualmente
 * hasta que recibe el foco por teclado, y entonces aparece (SPEC-02 §10.2).
 */
export default function SkipLink() {
  return (
    <a className="gf-skip-link" href={`#${MAIN_CONTENT_ID}`}>
      Saltar al contenido principal
    </a>
  )
}
