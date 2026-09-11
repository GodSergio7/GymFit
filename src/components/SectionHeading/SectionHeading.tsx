import './SectionHeading.css'

export type SectionHeadingProps = {
  /**
   * `id` del `h2`. La sección lo referencia con `aria-labelledby`
   * (SPEC-03 §16.2), así que el encabezado es su nombre accesible.
   */
  id: string
  /** Título del bloque. Se renderiza como `h2` (SPEC-03 §2.3). */
  title: string
  /** Texto de apoyo bajo el título. Opcional (SPEC-03 §14.2). */
  text?: string
  className?: string
}

/**
 * SectionHeading (SPEC-02 §5.3; implementación pedida en SPEC-03 §14.2 y §20).
 *
 * Existe por **accesibilidad**: centraliza la jerarquía de encabezados y obliga a
 * que cada bloque tenga su `h2` con `id`, de modo que la `<section>` pueda
 * anunciarse con `aria-labelledby` sin repetir el patrón en cada bloque.
 *
 * - Es el encabezado **de un bloque de sección**: siempre `h2`. El `h1` es único
 *   y vive en el Hero (SPEC-01 §8.5, SPEC-03 §2.3); los `h3` son de los elementos
 *   internos, no de la sección.
 * - El nivel se elige **por estructura, nunca por tamaño visual** (SPEC-01
 *   §8.5.3): por eso el componente no acepta un nivel variable.
 * - SPEC-02 §5.3 permite además *eyebrow* y enlace; **la Home no los usa**
 *   (SPEC-03 H-19), así que ⛔ no se implementan aquí: se añadirán cuando una
 *   página los necesite de verdad.
 * - No conoce copy: los textos entran por props (SPEC-02 §5.6.6).
 * - No decide su margen exterior: el espaciado lo pone el contenedor
 *   (SPEC-02 §5.6.2). El `div` que agrupa existe solo para que el propio
 *   encabezado controle el ritmo entre su título y su texto de apoyo.
 */
export default function SectionHeading({
  id,
  title,
  text,
  className,
}: SectionHeadingProps) {
  const classes = ['gf-section-heading', className].filter(Boolean).join(' ')

  return (
    <div className={classes}>
      <h2 className="gf-section-heading__title" id={id}>
        {title}
      </h2>

      {text ? <p className="gf-section-heading__text">{text}</p> : null}
    </div>
  )
}
