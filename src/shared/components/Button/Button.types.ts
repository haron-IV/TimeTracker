import { ButtonHTMLAttributes, MouseEventHandler } from 'react'
import { Color } from 'shared/types'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'contained' | 'outlined'
  color: Color
  onClick?: MouseEventHandler<HTMLButtonElement>
  margin?: string | number
}

export interface BaseButtonProps extends Omit<ButtonProps, 'onClick'> {}
