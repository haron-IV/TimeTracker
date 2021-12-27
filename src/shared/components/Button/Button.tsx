import { PropsWithChildren } from 'react'
import { BaseButton, ButtonWrapper } from './Button.style'
import { ButtonProps } from './Button.types'

// TODO: here you can implement position of tooltip
const Button = ({
  disabledTooltip,
  ...props
}: PropsWithChildren<ButtonProps>) => {
  return (
    <ButtonWrapper>
      <BaseButton {...props}>{props.children}</BaseButton>
      {props.disabled && <span>{disabledTooltip}</span>}
    </ButtonWrapper>
  )
}

export default Button
