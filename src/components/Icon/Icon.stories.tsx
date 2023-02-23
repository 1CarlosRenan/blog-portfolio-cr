import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Icon, icons, IconType } from './Icon'

export default {
  title: 'Icon',
}

export const Icons = () => {
  const arr = [
    'arrowLeft',
    'arrowRight',
    'check',
    'chevronRight',
    'close',
    'copy',
    'error',
    'figma',
    'github',
    'link',
    'linkedin',
    'menu',
    'pause',
    'play',
    'send',
    'twitter',
  ]
  console.log(arr)
  return (
    <>
      {arr.map((key: any) => {
        return <Icon key={key} icon={key} />
      })}
    </>
  )
}
