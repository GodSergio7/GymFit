import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App'

/* Orden de carga de las capas de estilos (SPEC-02 §1.5):
   1. theme.css  → tokens (capa 1: primitivos + capa 2: semánticos)
   2. base.css   → reset / base
   3. layout.css → primitivas de layout
   Los estilos de cada componente los importa el propio componente. */
import './styles/theme.css'
import './styles/base.css'
import './styles/layout.css'

const container = document.getElementById('root')

if (!container) {
  throw new Error('No se encontró el elemento #root en index.html')
}

createRoot(container).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
