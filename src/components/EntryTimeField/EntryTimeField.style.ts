import { SPACING_REGULAR, TIME_FIELD_MARGIN, TIME_FIELD_WIDTH } from 'config'
import { Input } from 'shared/components'
import styled from 'styled-components'

export const TimeField = styled(Input)({
  width: TIME_FIELD_WIDTH,
  margin: `0 ${TIME_FIELD_MARGIN}px`,
})

export const Form = styled('form')({
  display: 'flex',
  justifyContent: 'space-between',
  gap: SPACING_REGULAR,
})
