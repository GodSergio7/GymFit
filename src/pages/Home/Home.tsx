import Hero from './Hero'

/**
 * Página **Inicio** (SPEC-01 §3 y §4.1).
 *
 * Secciones aprobadas para Inicio, en el orden de SPEC-01 §4.1:
 *
 *   1. Hero                              ← implementado (Bloque 2)
 *   2. Propuesta de valor / beneficios
 *   3. Servicios y clases destacadas
 *   4. Entrenadores
 *   5. Galería
 *   6. Tarifas destacadas
 *   7. Ubicación
 *   8. CTA final
 *
 * **Solo la sección 1 está implementada.** Las 7 restantes llegan en bloques
 * posteriores: no se ha creado estructura vacía para ellas ni contenido
 * ficticio, y su polaridad (oscura o clara) se decidirá antes de implementarlas
 * (SPEC-02 §15.1, decisión 6).
 *
 * El `h1` de la página lo aporta el Hero; `main` lo aporta `App`.
 */
export default function Home() {
  return <Hero />
}
