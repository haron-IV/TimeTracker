import { PropsWithChildren } from 'react'
import Tooltip from '../Tooltip'
import { BaseButton } from './Button.style'
import { ButtonProps } from './Button.types'

const Button = ({
  disabledTooltip,
  isDisabled = false,
  ...props
}: PropsWithChildren<ButtonProps>) => {
  return (
    <Tooltip show={isDisabled} text={disabledTooltip}>
      <BaseButton isDisabled={isDisabled} {...props}>
        {props.children}
      </BaseButton>
    </Tooltip>
  )
}

export default Button
