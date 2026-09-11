import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import SkipLink, { MAIN_CONTENT_ID } from './components/SkipLink/SkipLink'
import Home from './pages/Home/Home'

/**
 * Armazón de la aplicación (SPEC-01 §4.6).
 *
 * Cabecera y pie son elementos globales (R-01) y el contenido va en medio. El
 * `<main>` lleva el identificador al que apunta el SkipLink; `tabIndex={-1}`
 * permite que el foco se mueva realmente al contenido al usar el enlace
 * (SPEC-01 §8.2.2).
 *
 * ⚠️ Solo existe la página **Inicio**. El routing sigue pendiente (SPEC-01
 * §11.2-11.3, P-01): ⛔ no se ha instalado React Router ni se simula navegación
 * con `window.location`, así que la Home es lo único que se renderiza.
 */
export default function App() {
  return (
    <>
      <SkipLink />
      <Header />

      <main id={MAIN_CONTENT_ID} className="gf-main" tabIndex={-1}>
        <Home />
      </main>

      <Footer />
    </>
  )
}
