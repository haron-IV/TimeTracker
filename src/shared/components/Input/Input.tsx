import { InputHTMLAttributes } from 'react'
import { Color } from 'shared/types'
import { Input as BaseInput, InputWrapper } from './Input.style'

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  color: Color
  margin?: string | number
  error?: string
  withoutLabel?: boolean
}
const Input = ({
  color,
  margin,
  width,
  error,
  withoutLabel,
  ...props
}: InputProps) => {
  return (
    <InputWrapper
      placeholder={props.placeholder}
      color={color}
      error={error}
      margin={margin}
      width={width}
      withoutLabel={withoutLabel}
    >
      <BaseInput {...props} color={color} error={error} />
      <label>{props.placeholder}</label>
      <span>{error}</span>
    </InputWrapper>
  )
}

export default Input
