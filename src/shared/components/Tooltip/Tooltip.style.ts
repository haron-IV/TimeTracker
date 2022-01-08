import {
  DEFAULT_BORDER_RADIUS,
  palette,
  SPACING_MID,
  SPACING_SMALL,
  transition,
} from 'config'
import { Position } from 'shared/types'
import styled from 'styled-components'

export const TooltipWrapper = styled('div')({
  '&:hover span': {
    opacity: 1,
  },
})

interface BaseTooltipProps {
  position: Position
}
export const BaseTooltip = styled('span')<BaseTooltipProps>(({ position }) => ({
  position: 'fixed',
  left: 0,
  top: 0,
  opacity: 0,
  transform: `translate(${position.x}px, ${position.y}px)`,
  transition: `opacity ease-in-out ${transition.time.long}ms, transform linear ${transition.time.instant}ms`,
  backgroundColor: palette.text.secondary,
  color: palette.text.text,
  padding: `${SPACING_SMALL}px ${SPACING_MID}px ${SPACING_MID}px`,
  borderRadius: DEFAULT_BORDER_RADIUS,
  margin: SPACING_SMALL,
  clipPath:
    'polygon(0% 0%, 100% 0%, 100% 70%, 56% 70%, 50% 100%, 40% 70%, 0 70%)',
}))
