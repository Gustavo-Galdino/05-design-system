import * as Tooltip from '@radix-ui/react-tooltip'
import { styled } from '../../styles'

export const TooltipContainer = styled(Tooltip.Root, {})

export const TooltipTrigger = styled(Tooltip.Trigger, {
  display: 'inline-block',
})

export const TooltipContent = styled(Tooltip.Content, {
  backgroundColor: '$gray900',
  color: '$gray100',
  fontSize: '$sm',
  lineHeight: '$short',
  padding: '$3 $4',
  borderRadius: '$sm',
})
