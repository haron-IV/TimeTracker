import { InputHTMLAttributes } from 'react'
import { Color } from 'shared/types'
import { Input as BaseInput, InputWrapper } from './Input.style'

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  color: Color
  margin?: string | number
  error?: string
}
const Input = ({ color, margin, width, error, ...props }: InputProps) => {
  return (
    <InputWrapper
      placeholder={props.placeholder}
      color={color}
      error={error}
      margin={margin}
      width={width}
    >
      <BaseInput {...props} color={color} error={error} />
      <label>{props.placeholder}</label>
      <span>{error}</span>
    </InputWrapper>
  )
}

export default Input
