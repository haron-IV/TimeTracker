import {
  DEFAULT_BORDER_RADIUS,
  palette,
  TIME_FIELD_MARGIN,
  TIME_FIELD_WIDTH,
  transition,
} from 'config'
import styled from 'styled-components'

interface TimeFieldProps {
  error?: string
}

export const TimeField = styled('input')<TimeFieldProps>(({ error }) => ({
  width: TIME_FIELD_WIDTH,
  margin: `0 ${TIME_FIELD_MARGIN}px`,
  padding: TIME_FIELD_MARGIN,
  outline: `1px solid ${error ? palette.error : palette.primary.dark}`,
  border: 'none',
  color: palette.text.dark,
  boxShadow: palette.shadows.box1,
  borderRadius: DEFAULT_BORDER_RADIUS,
}))

interface TimeLabelProps {
  visible: boolean
}

export const TimeLabel = styled('label')<TimeLabelProps>(({ visible }) => ({
  color: palette.text.secondary,
  opacity: visible ? 1 : 0,
  transition: `opacity ease-in-out ${transition.time.fast}ms`,
  marginLeft: DEFAULT_BORDER_RADIUS,
}))

export const FieldWrapper = styled('div')({
  display: 'flex',
  flexDirection: 'column',
})

export const Form = styled('form')({
  display: 'flex',
})
