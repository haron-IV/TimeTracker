import { MouseEvent, PropsWithChildren, useRef, useState } from 'react'
import { useThrottle } from 'rooks'
import { BaseButton, ButtonWrapper } from './Button.style'
import { ButtonProps } from './Button.types'

type MouseMoveEvent =
  | MouseEvent<HTMLButtonElement, globalThis.MouseEvent>
  | MouseEvent<HTMLButtonElement, MouseEvent<Element, globalThis.MouseEvent>>

const MOUSE_OFFSET = 10

const Button = ({
  disabled,
  disabledTooltip,
  ...props
}: PropsWithChildren<ButtonProps>) => {
  const buttonRef = useRef<HTMLButtonElement>(null)
  const tooltipRef = useRef<HTMLSpanElement>(null)
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [throttledSetPosition] = useThrottle(setPosition, 30)

  const onMouseMove = (e: MouseMoveEvent) =>
    throttledSetPosition({
      x: e.clientX - (tooltipRef.current?.offsetWidth || 0),
      y: e.clientY - (tooltipRef.current?.offsetHeight || 0) - MOUSE_OFFSET,
    })

  return (
    <ButtonWrapper position={position}>
      <BaseButton
        {...props}
        isDisabled={disabled}
        onMouseMove={onMouseMove}
        ref={buttonRef}
      >
        {props.children}
      </BaseButton>

      {disabled && <span ref={tooltipRef}>{disabledTooltip}</span>}
    </ButtonWrapper>
  )
}

export default Button
