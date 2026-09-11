/**
 * Navegación principal aprobada (SPEC-01 §5.2).
 *
 * ⚠️ P-01 (routing y URLs definitivas) sigue PENDIENTE. Por eso:
 *   - `path` usa las URLs propuestas en SPEC-01 §9.4, que aún no están
 *     congeladas (SPEC-01 §11, R-06).
 *   - NO hay router: los enlaces son `<a href>` nativos, sin `window.location`
 *     ni hacks. Cuando se apruebe P-01 se conectarán sin tocar los componentes.
 *
 * `/contacto` sí está fijada por P-02 (destino del CTA principal).
 *
 * Los datos viven fuera de los componentes para que estos no conozcan el copy
 * (SPEC-02 §5.6.6) y para tener una única fuente de verdad (SPEC-01 §11, R-07).
 */
export type NavItem = {
  /** Texto visible. Coincide con el nombre de página aprobado. */
  label: string
  /** URL de destino (pendiente de congelar hasta que se apruebe P-01). */
  path: string
}

export const HOME_PATH = '/'

/** Destino aprobado del CTA principal (SPEC-01 §11.1, P-02). */
export const CONTACT_PATH = '/contacto'

/** Navegación principal: las 5 páginas aprobadas, en el orden aprobado. */
export const PRIMARY_NAV: NavItem[] = [
  { label: 'Inicio', path: HOME_PATH },
  { label: 'Nosotros', path: '/nosotros' },
  { label: 'Servicios', path: '/servicios' },
  { label: 'Tarifas', path: '/tarifas' },
  { label: 'Contacto', path: CONTACT_PATH },
]
