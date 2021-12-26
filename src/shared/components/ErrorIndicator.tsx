import { palette, TIME_FIELD_MARGIN } from 'config'
import styled from 'styled-components'

interface ErrorIndicatorProps {
  error?: string
}

export const ErrorIndicator = styled('div')<ErrorIndicatorProps>(
  ({ error }) => ({
    color: palette.error,
    fontSize: '0.75rem',
    marginTop: TIME_FIELD_MARGIN,
    marginLeft: TIME_FIELD_MARGIN,
  })
)
