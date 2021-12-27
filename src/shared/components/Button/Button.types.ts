import { ButtonHTMLAttributes, MouseEventHandler } from 'react'
import { Color } from 'shared/types'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'contained' | 'outlined'
  color: Color
  onClick?: MouseEventHandler<HTMLButtonElement>
  margin?: string | number
  isDisabled?: boolean
  disabledTooltip?: string
  onMouseMove?: any // TODO: fix this one
}

export interface BaseButtonProps extends Omit<ButtonProps, 'onClick'> {}
