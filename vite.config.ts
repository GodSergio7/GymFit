import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Configuración mínima: sin alias, sin proxy y sin plugins adicionales.
// Cualquier añadido aquí debería justificarse en una SPEC.
export default defineConfig({
  plugins: [react()],
})
