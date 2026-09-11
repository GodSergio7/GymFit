import Nav from '../Nav/Nav'
import { PRIMARY_NAV } from '../../data/navigation'
import './Footer.css'

/**
 * Pie de página global (SPEC-01 §4.6, aprobada con R-01).
 *
 * Estructura preparada para: identidad, navegación secundaria, contacto,
 * ubicación, enlaces relevantes e información legal (SPEC-01 §4.6).
 *
 * NO se inventan datos del gimnasio: no hay dirección, teléfono, email ni redes
 * sociales reales (pendiente P-06). Los bloques de contacto, ubicación y legal
 * no se renderizan todavía porque dependen de:
 *   - datos reales del negocio → P-06
 *   - páginas legales (aviso legal, privacidad, cookies) → P-04
 */
export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="gf-footer">
      <div className="gf-container gf-footer__inner">
        <p className="gf-footer__brand">GymFit</p>

        <Nav
          items={PRIMARY_NAV}
          label="Navegación secundaria"
          className="gf-footer__nav"
        />

        <p className="gf-footer__legal">© {year} GymFit</p>
      </div>
    </footer>
  )
}
