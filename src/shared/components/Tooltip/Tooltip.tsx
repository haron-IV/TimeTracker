import { MouseEvent, PropsWithChildren, useRef, useState } from 'react'
import { useThrottle } from 'rooks'
import { BaseTooltip, TooltipWrapper } from './Tooltip.style'

const MOUSE_OFFSET = 15

type MouseMoveEvent = MouseEvent<HTMLDivElement, globalThis.MouseEvent>

interface TooltipProps {
  text?: string
}
const Tooltip = ({ children, text }: PropsWithChildren<TooltipProps>) => {
  const wrapperRef = useRef<HTMLDivElement>(null)
  const tooltipRef = useRef<HTMLSpanElement>(null)
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [throttledSetPosition] = useThrottle(setPosition, 35)

  const onMouseMoveHandler = (e: MouseMoveEvent) => {
    throttledSetPosition({
      x:
        e.clientX -
        (tooltipRef.current?.offsetWidth || 0) / 2 -
        MOUSE_OFFSET / 2,
      y: e.clientY - (tooltipRef.current?.offsetHeight || 0) - MOUSE_OFFSET,
    })
  }

  return (
    <TooltipWrapper onMouseMove={onMouseMoveHandler} ref={wrapperRef}>
      <BaseTooltip ref={tooltipRef} position={position}>
        {text}
      </BaseTooltip>
      {children}
    </TooltipWrapper>
  )
}

export default Tooltip
