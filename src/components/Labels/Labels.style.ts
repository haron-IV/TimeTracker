import {
  DEFAULT_BORDER_RADIUS,
  LABEL_HEIGHT,
  LABEL_MARGIN,
  LABEL_PADDING,
  LABEL_WIDTH,
  LABEL_WRAPPER_WIDTH,
  palette,
  transition,
  typography,
} from 'config'
import { MouseEventHandler } from 'react'
import { ID } from 'shared/types'
import styled from 'styled-components'

export interface LabelProps {
  labelName?: string
  onClick: MouseEventHandler<HTMLButtonElement> & ((id: string) => void)
  id?: ID
  active?: boolean
}

export const StyledLabel = styled('button')<LabelProps>(({ active }) => ({
  padding: LABEL_PADDING,
  height: LABEL_HEIGHT,
  margin: `0 ${LABEL_MARGIN}px`,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  minWidth: LABEL_WIDTH,
  cursor: 'pointer',
  border: `1px solid ${
    active ? palette.primary.dark : palette.background.paper
  }`,
  backgroundColor: active ? palette.primary.dark : palette.background.paper,
  color: active ? palette.text.text : palette.text.dark,
  borderRadius: DEFAULT_BORDER_RADIUS,
  boxShadow: palette.shadows.box1,
  fontWeight: active
    ? typography.fontWeight.bold
    : typography.fontWeight.medium,
  transition: `all ease-in-out ${transition.time.instant}ms`,
  '&:hover': {
    boxShadow: palette.shadows.box0,
    border: `1px solid ${palette.accent.accent}`,
  },
}))

export const LabelWrapper = styled('div')({
  display: 'flex',
  width: LABEL_WRAPPER_WIDTH,
  flexWrap: 'wrap',
})