import * as Toast from '@radix-ui/react-toast'
import { X } from 'phosphor-react'
import { ComponentProps, useState } from 'react'
import { Heading } from '../Heading'
import { Text } from '../Text'
import {
  Header,
  ToastContainer,
  ToastDescription,
  ToastViewport,
} from './styles'

export interface ToastProps extends ComponentProps<typeof Toast.Root> {
  title: string
  description: string
}

export function ToastElement({ title, description, ...props }: ToastProps) {
  const [open, setOpen] = useState(false)

  return (
    <Toast.Provider>
      <button onClick={() => setOpen(!open)}>Click to open toast</button>
      <ToastContainer open={open} {...props}>
        <Header>
          <Toast.Title asChild>
            <Heading size={'sm'}>{title}</Heading>
          </Toast.Title>
          <Toast.Close asChild>
            <X size={24} weight="bold" onClick={() => setOpen(!open)} />
          </Toast.Close>
        </Header>

        <ToastDescription asChild>
          <Text size={'sm'}>{description}</Text>
        </ToastDescription>
      </ToastContainer>

      <ToastViewport />
    </Toast.Provider>
  )
}

ToastElement.displayName = 'Toast'
