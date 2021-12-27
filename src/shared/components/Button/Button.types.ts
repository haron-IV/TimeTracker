import { ButtonHTMLAttributes, MouseEventHandler } from 'react'
import { Color } from 'shared/types'

export interface ButtonProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'onMouseMove'> {
  variant?: 'contained' | 'outlined'
  color: Color
  onClick?: MouseEventHandler<HTMLButtonElement>
  margin?: string | number
  isDisabled?: boolean
  disabledTooltip?: string
  onMouseMove?: MouseEventHandler<HTMLButtonElement>
}

export interface BaseButtonProps extends Omit<ButtonProps, 'onClick'> {}
