import type { NavItem } from '../../data/navigation'
import './Nav.css'

/** Disposición de la lista. `row` es la de por defecto (horizontal). */
export type NavLayout = 'row' | 'stacked'

type NavProps = {
  items: NavItem[]
  /**
   * Nombre accesible del bloque de navegación. Es obligatorio porque la página
   * tiene más de un `nav` (cabecera y pie) y deben poder distinguirse
   * (SPEC-01 §8.8.3).
   */
  label: string
  /**
   * `stacked` apila los elementos en columna. Lo usa el panel móvil de la
   * cabecera, que debe mostrarlos en columna (SPEC-02 §3.4). La variante la
   * resuelve el propio componente en `Nav.css`, sin que nadie lo estile desde
   * fuera (SPEC-02 §1.5.3 y §1.7, mecanismo 1: modificador de clase).
   */
  layout?: NavLayout
  className?: string
}

/**
 * Lista de navegación reutilizable: se usa en la cabecera y en el pie
 * (SPEC-02 §5.3).
 */
export default function Nav({ items, label, layout = 'row', className }: NavProps) {
  const classes = ['gf-nav', layout === 'stacked' ? 'gf-nav--stacked' : null, className]
    .filter(Boolean)
    .join(' ')

  return (
    <nav className={classes} aria-label={label}>
      <ul className="gf-nav__list">
        {items.map((item) => (
          <li key={item.path}>
            {/* Sin `aria-current="page"`: mientras P-01 (routing) siga pendiente
                no hay forma de saber qué página está activa, y marcarlo sería
                inventar el estado. El estilo ya está preparado en Nav.css. */}
            <a className="gf-nav__link" href={item.path}>
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
