import { classes } from '../../utils/style'
import styles from './Text.module.css'

interface ITextProps {
  children: React.ReactNode
  size: string
  as?: string
  align?: string
  weight?: string
  className?: string
}

export const Text = (props: ITextProps) => {
  const { children, size, as, align, weight, className } = props

  return (
    <p
      className={classes(styles.text, className)}
      data-align={align}
      data-size={size}
      data-weight={weight}>
      {children}
    </p>
  )
}
