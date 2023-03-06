import type { StoryObj, Meta } from '@storybook/react'
import { ToastElement, ToastProps } from '@voodoo-ui/react'

export default {
  title: 'Form/Toast',
  component: ToastElement,
  args: {
    title: 'Title Example',
    description: 'Description exemple.....',
  },
  argTypes: {
    trigger: {
      control: {
        type: null,
      },
    },
  },
} as Meta<ToastProps>

export const Primary: StoryObj<ToastProps> = {}
