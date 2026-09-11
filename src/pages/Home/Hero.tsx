import Button from '../../components/Button/Button'
import { HERO_CONTENT } from '../../data/home'
import { CONTACT_PATH } from '../../data/navigation'
import './Hero.css'

/**
 * Sección 1 de Inicio: **Hero** (SPEC-01 §4.1; SPEC-02 §4.5 y §8.5).
 *
 * Cumple las reglas aprobadas de la sección:
 *   - **Fondo oscuro** `#050505`: el Hero siempre es oscuro (SPEC-02 §2.1.3,
 *     regla 1) y sin degradados ni colores añadidos (SPEC-02 §9.4);
 *   - **un único `h1`** en toda la página (SPEC-01 §8.5), con la familia de
 *     titulares a peso 800 (SPEC-02 §2.2.5);
 *   - **funciona sin imagen**: tipografía + CTA (SPEC-02 §4.5.2 y §8.5). ⛔ No se
 *     descargan ni se inventan assets;
 *   - **CTA principal** "Únete ahora" → `/contacto` (SPEC-01 §11.1, P-02), en
 *     variante primaria: amarillo `#F5C400` con texto negro.
 *
 * PREPARADO PARA LA IMAGEN (SPEC-02 §4.5.2 y §8.5): cuando exista un asset real
 * (SPEC-01 P-07) se añade un elemento de media dentro de `.gf-hero__inner` y el
 * contenedor pasa a dos columnas desde `--bp-lg`. No hay que rehacer la
 * estructura ni el contenido.
 */
export default function Hero() {
  return (
    <section className="gf-section gf-hero">
      <div className="gf-container gf-hero__inner">
        <h1 className="gf-hero__title">{HERO_CONTENT.title}</h1>
        <p className="gf-hero__lead">{HERO_CONTENT.lead}</p>

        <div className="gf-cluster gf-hero__actions">
          <Button href={CONTACT_PATH} size="lg">
            Únete ahora
          </Button>

          {/* CTA secundaria "Conoce el gimnasio". Su destino sigue PENDIENTE
              (SPEC-01 §11.2, P-11; la propuesta de SPEC-02 §6.2 → `/nosotros` no
              está aprobada), así que NO se convierte en una navegación
              inventada: se renderiza con el estado deshabilitado que define
              SPEC-02 §6.2. Ver el informe del Bloque 2. */}
          <Button variant="secondary" size="lg" disabled>
            Conoce el gimnasio
          </Button>
        </div>

        {/* Marca visible de contenido provisional (ver `src/data/home.ts`). */}
        <p className="gf-hero__note gf-text-muted">{HERO_CONTENT.devNote}</p>
      </div>
    </section>
  )
}
