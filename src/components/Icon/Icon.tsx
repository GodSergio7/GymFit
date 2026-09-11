import type { ReactElement } from 'react'
import './Icon.css'

/**
 * Iconos propios del proyecto (SPEC-02 §8.6, decisión P-17).
 *
 * Solo se incluyen los iconos **realmente necesarios** hoy (SPEC-02 §8.6:
 * "el set se mantiene pequeño y coherente"). Actualmente: los dos estados del
 * botón de menú de la cabecera.
 */
export type IconName = 'menu' | 'close'

export type IconSize = 'sm' | 'md' | 'lg'

type IconProps = {
  name: IconName
  /** Tamaño por token. `md` es el valor por defecto. */
  size?: IconSize
  /**
   * Nombre accesible. Si **se omite**, el icono se trata como **decorativo** y
   * se oculta a lectores de pantalla (`aria-hidden`), que es el caso habitual
   * cuando el icono acompaña a un texto o a un control que ya tiene nombre
   * (SPEC-02 §8.6, accesibilidad).
   */
  label?: string
  className?: string
}

/** Trazos sobre la rejilla 24×24, con el trazo de 2 px de SPEC-02 §8.6. */
const PATHS: Record<IconName, ReactElement> = {
  menu: <path d="M4 7h16M4 12h16M4 17h16" />,
  close: <path d="M6 6l12 12M18 6 6 18" />,
}

/**
 * Componente `Icon`: centraliza los SVG propios para no duplicarlos por los
 * componentes (SPEC-02 §8.6).
 *
 * Reglas que cumple:
 *   - SVG **en línea**, sin librería externa y sin emojis;
 *   - rejilla **24×24** con trazo de **2 px** y extremos redondeados;
 *   - **`currentColor`**: hereda el color del texto, así que si el texto cumple
 *     contraste, el icono también;
 *   - tamaño controlado por **tokens** (`--gf-icon-*`) desde `Icon.css`;
 *   - ⛔ **sin `<title>`**: el nombre accesible se resuelve con `aria-label`
 *     y, si no hay etiqueta, el icono es decorativo (SPEC-02 §8.6.4).
 */
export default function Icon({ name, size = 'md', label, className }: IconProps) {
  const isDecorative = label === undefined
  const classes = ['gf-icon', size === 'md' ? null : `gf-icon--${size}`, className]
    .filter(Boolean)
    .join(' ')

  return (
    <svg
      className={classes}
      viewBox="0 0 24 24"
      /* Tamaño intrínseco de reserva; el tamaño real lo fijan los tokens. */
      width="24"
      height="24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      focusable="false"
      aria-hidden={isDecorative ? true : undefined}
      role={isDecorative ? undefined : 'img'}
      aria-label={isDecorative ? undefined : label}
    >
      {PATHS[name]}
    </svg>
  )
}
