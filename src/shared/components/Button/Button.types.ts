import { ButtonHTMLAttributes, MouseEventHandler } from 'react'

export enum Variant {
  contained = 'contained',
  outlined = 'outlined',
}

export enum Color {
  primary = 'primary',
  text = 'text',
}

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'contained' | 'outlined'
  color: 'primary' | 'text' | string
  onClick?: MouseEventHandler<HTMLButtonElement>
  margin?: string | number
}

export interface BaseButtonProps extends Omit<ButtonProps, 'onClick'> {}
