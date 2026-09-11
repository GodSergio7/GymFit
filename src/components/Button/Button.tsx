import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react'
import './Button.css'

type Variant = 'primary' | 'secondary' | 'text'
type Size = 'md' | 'lg'

type BaseProps = {
  variant?: Variant
  size?: Size
  className?: string
  children: ReactNode
}

type ButtonAsLinkProps = BaseProps & {
  href: string
} & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href' | 'className' | 'children'>

type ButtonAsActionProps = BaseProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'className' | 'children' | 'type'>

export type ButtonProps = ButtonAsLinkProps | ButtonAsActionProps

/**
 * Button (SPEC-02 §6).
 *
 * Es **polimórfico** porque esa distinción es un requisito de accesibilidad
 * (SPEC-01 §8.6.1: "enlaces para navegar, botones para actuar"):
 *   - con `href`  → renderiza `<a>` (navega)
 *   - sin `href`  → renderiza `<button type="button">` (actúa)
 *
 * Variantes: `primary` (acción principal, amarilla), `secondary` (contorno) y
 * `text` (acción de menor importancia).
 *
 * `type` no se acepta como prop a propósito: siempre es `button`, de modo que
 * un botón de acción nunca envíe un formulario por accidente.
 */
export default function Button({
  variant = 'primary',
  size = 'md',
  className,
  children,
  ...rest
}: ButtonProps) {
  const classes = ['gf-btn', `gf-btn--${variant}`, `gf-btn--${size}`, className]
    .filter(Boolean)
    .join(' ')

  if ('href' in rest) {
    const anchorProps = rest as AnchorHTMLAttributes<HTMLAnchorElement>
    return (
      <a className={classes} {...anchorProps}>
        {children}
      </a>
    )
  }

  const buttonProps = rest as ButtonHTMLAttributes<HTMLButtonElement>
  return (
    <button className={classes} type="button" {...buttonProps}>
      {children}
    </button>
  )
}
