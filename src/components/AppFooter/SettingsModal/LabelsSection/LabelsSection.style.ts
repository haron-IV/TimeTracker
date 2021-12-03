import {
  LABEL_HEIGHT,
  LABEL_MARGIN,
  LABEL_PADDING,
  LABEL_WIDTH,
  SPACING_REGULAR,
} from 'config'
import styled from 'styled-components'

export const LabelsWrapper = styled('section')({
  display: 'flex',
  justifyContent: 'space-between',
  flexWrap: 'wrap',
  gap: SPACING_REGULAR,
})

export const DeleteButton = styled('button')({
  padding: LABEL_PADDING,
  height: LABEL_HEIGHT,
  minWidth: LABEL_WIDTH,
  margin: `0 ${LABEL_MARGIN}px`,
})
