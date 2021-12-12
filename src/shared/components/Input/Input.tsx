import { InputHTMLAttributes } from 'react'
import { Color } from 'shared/types'
import { Input as BaseInput, InputWrapper } from './Input.style'

// TODO: refactorize
// TODO add error handling
interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
  color: Color
  margin?: string | number
}
const Input = ({ label, color, margin, width, ...props }: InputProps) => {
  return (
    <InputWrapper label={label} color={color} margin={margin} width={width}>
      <BaseInput {...props} color={color} />
      <label>{label}</label>
    </InputWrapper>
  )
}

export default Input
