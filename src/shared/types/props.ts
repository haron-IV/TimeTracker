import { MouseEventHandler } from 'react'
import { ID } from './index'

export type ChangeEvent<T> = React.ChangeEvent<{ value: T }>
export type setTimeFunc = (value: number) => void
export interface LabelProps {
  labelName?: string
  onClick: MouseEventHandler<HTMLButtonElement> & ((id: string) => void)
  id?: ID
  active?: boolean
}
export type Color = 'primary' | 'text' | string
