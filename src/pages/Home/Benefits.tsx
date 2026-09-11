import SectionHeading from '../../components/SectionHeading/SectionHeading'
import { BENEFITS, BENEFITS_CONTENT } from '../../data/home'
import './Benefits.css'

/** El `h2` y la `<section>` comparten este `id` vía `aria-labelledby`. */
const TITLE_ID = 'gf-benefits-title'

/**
 * Bloque 2 de Inicio: **Beneficios / propuesta de valor** (SPEC-01 §4.1;
 * SPEC-03 §4 y §2.1).
 *
 * Decisiones aprobadas que cumple:
 *   - **Polaridad clara** (`gf-section--light`) — es la primera de las dos
 *     secciones claras de la Home y va inmediatamente después del Hero oscuro
 *     (SPEC-03 H-04). No redecide su polaridad ni toca la secuencia
 *     `D · L · D · D · L · D · D · D`.
 *   - **4 elementos** (H-06), sin iconos, **sin `Card`** y **sin CTA**: el bloque
 *     prepara, no convierte (SPEC-01 §6.4.1).
 *   - **Regla superior decorativa** por elemento (`--gf-border`), que sustituye al
 *     contenedor de tarjeta y evita el aspecto de cajas repetidas (SPEC-03 §4).
 *   - **Lista semántica** `ul`/`li` con un `h3` por elemento (SPEC-03 §16.2 y
 *     §16.12), sin saltar niveles.
 *   - **Contenido provisional marcado** con `data-provisional="true"` (H-18).
 *     ⛔ No añade ningún aviso visible: el único de la página es el del Hero
 *     (SPEC-03 §15.2.3).
 *
 * Los textos vienen de `src/data/home.ts` (H-17): el componente no conoce copy
 * (SPEC-02 §5.6.6).
 */
export default function Benefits() {
  return (
    <section
      className="gf-section gf-section--light gf-benefits"
      aria-labelledby={TITLE_ID}
      data-provisional="true"
    >
      <div className="gf-container gf-benefits__inner">
        <SectionHeading
          id={TITLE_ID}
          title={BENEFITS_CONTENT.title}
          text={BENEFITS_CONTENT.text}
        />

        {/* `role="list"`: `list-style: none` hace que Safari/VoiceOver deje de
            anunciar la lista (SPEC-03 §16.12). El rol la conserva. */}
        <ul className="gf-grid gf-benefits__list" role="list">
          {BENEFITS.map((benefit) => (
            <li className="gf-benefits__item" key={benefit.title}>
              <h3 className="gf-benefits__item-title">{benefit.title}</h3>
              <p className="gf-benefits__item-text">{benefit.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
