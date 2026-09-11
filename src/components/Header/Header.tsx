import { useEffect, useRef, useState } from 'react'
import Button from '../Button/Button'
import Icon from '../Icon/Icon'
import Nav from '../Nav/Nav'
import { CONTACT_PATH, HOME_PATH, PRIMARY_NAV } from '../../data/navigation'
import './Header.css'

/**
 * Media query de escritorio. Coincide con `--bp-md` (768 px) de SPEC-02 §3.1.
 * Se usa solo para *cerrar* el menú si el viewport pasa a escritorio, donde el
 * panel deja de estar colapsado; no sustituye a los breakpoints de CSS.
 */
const DESKTOP_QUERY = '(min-width: 768px)'

/** Identificador del panel, referenciado por `aria-controls` (SPEC-02 §3.4.3). */
const MENU_PANEL_ID = 'gf-menu-panel'

/**
 * Cabecera global (SPEC-01 §4.6, aprobada con R-01) con el **menú móvil
 * aprobado** (SPEC-02 §3.4).
 *
 * - Cabecera **ESTÁTICA**: ⛔ sin `position: fixed` ni `sticky` (SPEC-02 §15.1,
 *   decisión 5).
 * - Desktop: navegación horizontal visible y CTA (SPEC-01 §6.4).
 * - Móvil: navegación **colapsada** (estado inicial cerrado, §3.4.10), botón de
 *   menú con nombre accesible y **panel vertical** debajo de la cabecera.
 *
 * El estado del menú vive aquí porque el botón y el panel forman parte de la
 * propia cabecera (SPEC-02 §5.3: el Header compone el botón de menú).
 */
export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const toggleRef = useRef<HTMLButtonElement>(null)
  const panelRef = useRef<HTMLDivElement>(null)

  /* Teclado: `Escape` cierra y devuelve el foco al botón, y mientras el panel
     está abierto el foco no escapa al contenido de detrás (SPEC-02 §3.4.5-6,
     SPEC-01 §12). */
  useEffect(() => {
    if (!isMenuOpen) return

    const panelLinks = panelRef.current?.querySelectorAll<HTMLElement>('a[href]')

    const focusables: HTMLElement[] = []
    if (toggleRef.current) focusables.push(toggleRef.current)
    panelLinks?.forEach((link) => focusables.push(link))

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsMenuOpen(false)
        toggleRef.current?.focus()
        return
      }

      if (event.key !== 'Tab' || focusables.length === 0) return

      const first = focusables[0]
      const last = focusables[focusables.length - 1]
      const active = document.activeElement

      if (event.shiftKey && (active === first || active === null)) {
        event.preventDefault()
        last.focus()
      } else if (!event.shiftKey && active === last) {
        event.preventDefault()
        first.focus()
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [isMenuOpen])

  /* Bloqueo del desplazamiento del fondo mientras el panel está abierto
     (SPEC-01 §5.4). Solo se aplica mientras el panel es visible, es decir, en
     móvil: en escritorio el panel no está colapsado. */
  useEffect(() => {
    if (!isMenuOpen) return
    if (window.matchMedia(DESKTOP_QUERY).matches) return

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    return () => {
      document.body.style.overflow = previousOverflow
    }
  }, [isMenuOpen])

  /* Si el viewport pasa a escritorio, el panel deja de estar colapsado: se
     cierra el estado para no dejarlo abierto (ni el bloqueo de scroll) sin
     panel visible. No es un comportamiento nuevo de producto: es coherencia
     entre el estado y lo que muestra §3.4. */
  useEffect(() => {
    const mediaQuery = window.matchMedia(DESKTOP_QUERY)
    const handleChange = (event: MediaQueryListEvent) => {
      if (event.matches) setIsMenuOpen(false)
    }

    mediaQuery.addEventListener('change', handleChange)
    return () => mediaQuery.removeEventListener('change', handleChange)
  }, [])

  return (
    <header className="gf-header">
      <div className="gf-container gf-header__inner">
        {/* Marca provisional (P-06): nombre en texto, sin logotipo inventado. */}
        <a className="gf-header__brand" href={HOME_PATH}>
          GymFit
        </a>

        <div className="gf-header__actions">
          <Button href={CONTACT_PATH}>Únete ahora</Button>
        </div>

        {/* Botón de menú: solo móvil. Al mostrar únicamente un icono necesita
            nombre accesible (SPEC-02 §8.6.3). El nombre se mantiene estable y el
            estado lo comunica `aria-expanded`, no el texto del nombre. */}
        <button
          ref={toggleRef}
          type="button"
          className="gf-header__toggle"
          aria-label="Menú"
          aria-expanded={isMenuOpen}
          aria-controls={MENU_PANEL_ID}
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          <Icon name={isMenuOpen ? 'close' : 'menu'} />
        </button>

        {/* Panel vertical. Cerrado por defecto (§3.4.10); en escritorio es la
            propia navegación horizontal de la cabecera. */}
        <div
          ref={panelRef}
          id={MENU_PANEL_ID}
          className="gf-header__panel"
          data-open={isMenuOpen ? 'true' : 'false'}
        >
          <Nav
            items={PRIMARY_NAV}
            label="Navegación principal"
            layout="stacked"
          />
        </div>
      </div>
    </header>
  )
}
