import {
  palette,
  SPACING_REGULAR,
  TIME_FIELD_MARGIN,
  TIME_FIELD_WIDTH,
} from 'config'
import { darken } from 'polished'
import {
  Input as BaseInput,
  InputProps as BaseInputProps,
} from 'shared/components'
import styled from 'styled-components'

export const TimeField = styled(BaseInput)({
  width: TIME_FIELD_WIDTH,
  margin: `0 ${TIME_FIELD_MARGIN}px`,
})

export const Form = styled('form')({
  display: 'flex',
  justifyContent: 'space-between',
  gap: SPACING_REGULAR,
})

interface InputProps extends BaseInputProps {
  disabled?: boolean
}
export const Input = styled(BaseInput)<InputProps>(({ disabled }) => ({
  ...(disabled && {
    cursor: 'not-allowed',
    '&:hover': {
      backgroundColor: palette.disabled,
      borderColor: darken(0.2, palette.disabled),
    },
  }),
}))
