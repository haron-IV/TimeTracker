import {
  DEFAULT_BORDER_RADIUS,
  LABEL_HEIGHT,
  LABEL_MARGIN,
  LABEL_WIDTH,
  palette,
  SPACING_REGULAR,
  Z_INDEX_REGULAR,
} from 'config'
import { Input as BaseInput } from 'shared/components'
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
  margin: `0 ${LABEL_MARGIN}px`,
  width: LABEL_WIDTH,
  height: LABEL_HEIGHT,
})

export const LabelItemWrapper = styled('div')<{ clicked: boolean }>(
  ({ clicked }) => ({
    opacity: clicked ? 0 : 1,
    position: clicked ? 'absolute' : 'static',
    zIndex: clicked ? -Z_INDEX_REGULAR : 'unset',
  })
)

export const EditLabelNameWrapper = styled('div')({
  display: 'flex',
  justifyContent: 'space-between',
  padding: 0,
  borderRadius: DEFAULT_BORDER_RADIUS,
  width: LABEL_WIDTH,
  maxWidth: LABEL_WIDTH,
  height: LABEL_HEIGHT,
})

export const Input = styled(BaseInput)({
  width: LABEL_WIDTH,
  height: LABEL_HEIGHT,
})
