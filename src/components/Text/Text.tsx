import { classes } from '../../utils/style'
import styles from './Text.module.css'

interface ITextProps {
  children: React.ReactNode
  size: 's' | 'm' | 'l' | 'xl'
  as?: 'span' | 'p' | 'strong'
  align?: 'start' | 'center' | 'auto'
  weight?: 'regular' | 'medium' | 'bold' | 'auto'
  className?: string
}

export const Text = (props: ITextProps) => {
  const {
    children,
    size = 'm',
    as: Component = 'span',
    align = 'auto',
    weight = 'auto',
    className,
  } = props

  return (
    <Component
      className={classes(styles.text, className)}
      data-align={align}
      data-size={size}
      data-weight={weight}
    >
      {children}
    </Component>
  )
}
