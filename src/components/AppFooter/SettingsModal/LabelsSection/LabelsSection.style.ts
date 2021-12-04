import {
  DEFAULT_BORDER_RADIUS,
  palette,
  SPACING_REGULAR,
  Z_INDEX_REGULAR,
} from 'config'
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

interface ActionButtonWrapperProps {
  width?: number
  height?: number
}
export const ActionButtonWrapper = styled('div')<ActionButtonWrapperProps>(
  ({ width, height }) => ({
    display: 'flex',
    justifyContent: 'space-between',
    padding: 0,
    border: '1px solid',
    borderRadius: DEFAULT_BORDER_RADIUS,
    maxWidth: width,
    width,
    height,
  })
)

export const LabelItemWrapper = styled('div')<{ clicked: boolean }>(
  ({ clicked }) => ({
    opacity: clicked ? 0 : 1,
    position: clicked ? 'absolute' : 'static',
    zIndex: clicked ? -Z_INDEX_REGULAR : 'unset',
  })
)
