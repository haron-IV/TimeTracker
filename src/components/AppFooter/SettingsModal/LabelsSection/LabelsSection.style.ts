import { DEFAULT_BORDER_RADIUS, palette, SPACING_REGULAR } from 'config'
import styled from 'styled-components'

export const LabelsWrapper = styled('section')({
  display: 'flex',
  justifyContent: 'space-between',
  flexWrap: 'wrap',
  gap: SPACING_REGULAR,
})

export const ActionButton = styled('button')({
  borderWidth: '0 1px 0 0',
  flexGrow: 1,
  cursor: 'pointer',
  '&:hover': {
    backgroundColor: palette.background.primary,
  },
  '&:last-child': {
    border: 'none',
  },
})

export const ActionButtonWrapper = styled('div')({
  display: 'flex',
  justifyContent: 'space-between',
  padding: 0,
  border: '1px solid',
  borderRadius: DEFAULT_BORDER_RADIUS,
})
