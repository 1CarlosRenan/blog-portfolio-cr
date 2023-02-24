import { ComponentStory } from '@storybook/react'

import { Text } from './Text'

export default {
  title: 'Text',
}

const Template: ComponentStory<typeof Text> = args => <Text {...args} />

export const sizeXL = Template.bind({})
sizeXL.args = {
  size: 'xl',
  children: 'XLarge',
}

export const sizeL = Template.bind({})
sizeL.args = {
  size: 'l',
  children: 'Large',
}
