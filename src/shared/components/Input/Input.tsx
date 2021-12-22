import { InputHTMLAttributes } from 'react'
import { Color } from 'shared/types'
import { Input as BaseInput, InputWrapper } from './Input.style'

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
  color: Color
  margin?: string | number
  error?: string
}
const Input = ({
  label,
  color,
  margin,
  width,
  error,
  ...props
}: InputProps) => {
  return (
    <InputWrapper
      label={label}
      color={color}
      error={error}
      margin={margin}
      width={width}
    >
      <BaseInput {...props} color={color} error={error} />
      <label>{label}</label>
      <span>{error}</span>
    </InputWrapper>
  )
}

export default Input
