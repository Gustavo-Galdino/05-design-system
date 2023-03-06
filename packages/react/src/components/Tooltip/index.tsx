import * as Tooltip from '@radix-ui/react-tooltip'
import { ComponentProps, ReactNode } from 'react'
import { TooltipContainer, TooltipContent, TooltipTrigger } from './styles'

export interface TooltipProps extends ComponentProps<typeof TooltipContent> {
  trigger: ReactNode
  content: string
}

export function TooltipElement({
  trigger = '',
  content = '',
  ...props
}: TooltipProps) {
  return (
    <Tooltip.Provider>
      <TooltipContainer>
        <TooltipTrigger asChild>{trigger}</TooltipTrigger>

        <Tooltip.Portal>
          <TooltipContent {...props}>
            {content}
            <Tooltip.Arrow />
          </TooltipContent>
        </Tooltip.Portal>
      </TooltipContainer>
    </Tooltip.Provider>
  )
}

TooltipElement.displayName = 'Tooltip'
