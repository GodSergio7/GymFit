import Benefits from './Benefits'
import Hero from './Hero'

/**
 * Página **Inicio** (SPEC-01 §3 y §4.1).
 *
 * Secciones aprobadas para Inicio, en el orden de SPEC-01 §4.1:
 *
 *   1. Hero                              ← implementado (Bloque 2)
 *   2. Propuesta de valor / beneficios   ← implementado (Bloque 3)
 *   3. Servicios y clases destacadas
 *   4. Entrenadores
 *   5. Galería
 *   6. Tarifas destacadas
 *   7. Ubicación
 *   8. CTA final
 *
 * **Las secciones 1 y 2 están implementadas.** Las 6 restantes llegan en bloques
 * posteriores: no se ha creado estructura vacía para ellas ni contenido
 * ficticio. La polaridad de la Home ya está decidida (SPEC-03 H-04) y este orden
 * la respeta: la sección clara de beneficios va pegada al Hero oscuro.
 *
 * El `h1` de la página lo aporta el Hero y los `h2` los aporta `SectionHeading`;
 * `main` lo aporta `App`.
 */
export default function Home() {
  return (
    <>
      <Hero />
      <Benefits />
    </>
  )
}
