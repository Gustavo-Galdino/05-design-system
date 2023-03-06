import { styled } from '../../styles'
import * as Toast from '@radix-ui/react-toast'

export const ToastContainer = styled(Toast.Root, {
  backgroundColor: '$gray800',
  color: '$gray100',
  borderRadius: '$sm',
  padding: '$3 $5',

  width: 360,
})

export const Header = styled('header', {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
})

export const ToastDescription = styled(Toast.Description, {
  fontSize: '$sm',
  color: '$gray200',
  marginTop: 4,
})

export const ToastViewport = styled(Toast.Viewport, {
  listStyle: 'none',
})
