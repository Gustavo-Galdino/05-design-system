import type { StoryObj, Meta } from '@storybook/react'
import { Text, TooltipElement, TooltipProps } from '@voodoo-ui/react'

export default {
  title: 'Form/Tooltip',
  component: TooltipElement,
  args: {
    trigger: <Text>Hover Here</Text>,
    content: 'Example content',
  },
  argTypes: {
    trigger: {
      control: {
        type: null,
      },
    },
  },
} as Meta<TooltipProps>

export const Primary: StoryObj<TooltipProps> = {
  args: {},
}
