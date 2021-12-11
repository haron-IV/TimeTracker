import { SPACING_SMALL, typography } from 'config'
import styled from 'styled-components'

export const SumupWrapper = styled('div')({
  display: 'flex',
  alignItems: 'flex-end',
  flexDirection: 'column',
})

export const TimeOutputWrapper = styled('div')({
  marginBottom: SPACING_SMALL,
  fontSize: typography.fontSize.mid,
  '& span': {
    fontWeight: typography.fontWeight.bold,
    marginRight: SPACING_SMALL,
  },
})
