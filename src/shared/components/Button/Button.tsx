import { MouseEvent, PropsWithChildren, useRef, useState } from 'react'
import { BaseButton, ButtonWrapper } from './Button.style'
import { ButtonProps } from './Button.types'
import { useThrottle } from 'rooks'

//TODO: refactorize this component
type MouseMoveEvent =
  | MouseEvent<HTMLButtonElement, globalThis.MouseEvent>
  | MouseEvent<HTMLButtonElement, MouseEvent<Element, globalThis.MouseEvent>>

const Button = ({
  disabled,
  disabledTooltip,
  ...props
}: PropsWithChildren<ButtonProps>) => {
  const ref = useRef<HTMLButtonElement>(null)
  const tooltipRef = useRef<HTMLSpanElement>(null)
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [throttledSetPosition] = useThrottle(setPosition, 30)

  const onMouseMove = (e: MouseMoveEvent) => {
    throttledSetPosition({
      x: e.clientX - (tooltipRef.current?.offsetWidth || 0),
      y: e.clientY - (tooltipRef.current?.offsetHeight || 0) - 10,
    })
  }

  return (
    <ButtonWrapper position={position}>
      <BaseButton
        {...props}
        isDisabled={disabled}
        onMouseMove={onMouseMove}
        ref={ref}
      >
        {props.children}
      </BaseButton>

      {disabled && <span ref={tooltipRef}>{disabledTooltip}</span>}
    </ButtonWrapper>
  )
}

export default Button
