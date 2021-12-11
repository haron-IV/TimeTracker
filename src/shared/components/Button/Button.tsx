import { PropsWithChildren } from 'react'
import { BaseButton } from './Button.style'
import { ButtonProps } from './Button.types'

const Button = (props: PropsWithChildren<ButtonProps>) => {
  return <BaseButton {...props}>{props.children}</BaseButton>
}

export default Button
