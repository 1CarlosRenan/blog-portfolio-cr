import { classes } from '../../utils/style'
import styles from './Icon.module.css'
import { ReactComponent as ArrowLeft } from './svg/arrow-left.svg'
import { ReactComponent as ArrowRight } from './svg/arrow-right.svg'
import { ReactComponent as Check } from './svg/check.svg'
import { ReactComponent as ChevronRight } from './svg/chevron-right.svg'
import { ReactComponent as Close } from './svg/close.svg'
import { ReactComponent as Copy } from './svg/copy.svg'
import { ReactComponent as Error } from './svg/error.svg'
import { ReactComponent as Figma } from './svg/figma.svg'
import { ReactComponent as Github } from './svg/github.svg'
import { ReactComponent as Link } from './svg/link.svg'
import { ReactComponent as Linkedin } from './svg/linkedin.svg'
import { ReactComponent as Menu } from './svg/menu.svg'
import { ReactComponent as Pause } from './svg/pause.svg'
import { ReactComponent as Play } from './svg/play.svg'
import { ReactComponent as Send } from './svg/send.svg'
import { ReactComponent as Twitter } from './svg/twitter.svg'

export const icons = {
  arrowLeft: ArrowLeft,
  arrowRight: ArrowRight,
  check: Check,
  chevronRight: ChevronRight,
  close: Close,
  copy: Copy,
  error: Error,
  figma: Figma,
  github: Github,
  link: Link,
  linkedin: Linkedin,
  menu: Menu,
  pause: Pause,
  play: Play,
  send: Send,
  twitter: Twitter,
}

export type IconType =
  | 'arrowLeft'
  | 'arrowRight'
  | 'check'
  | 'chevronRight'
  | 'close'
  | 'copy'
  | 'error'
  | 'figma'
  | 'github'
  | 'link'
  | 'linkedin'
  | 'menu'
  | 'pause'
  | 'play'
  | 'send'
  | 'twitter'

export interface IIconProps {
  icon: IconType
  className?: string
}

export const Icon = (props: IIconProps) => {
  const { icon, className } = props
  const IconComponent = icons[icon]

  return (
    <IconComponent aria-hidden className={classes(styles.icon, className)} />
  )
}
