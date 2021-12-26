import {
  ENTRY_DESCRIPTION_FIELD_HEIGHT,
  ENTRY_DESCRIPTION_FIELD_WIDTH,
  palette,
} from 'config'
import { darken, lighten } from 'polished'
import { Color } from 'shared/types'
import styled from 'styled-components'

type Size = string | number

export interface TextAreaProps {
  resizable?: boolean
  color: Color
  error?: string
  width?: Size
  height?: Size
}

const getColor = (color: Color, error?: string) => {
  if (error) return palette.error

  switch (color) {
    case 'primary': {
      return palette.primary.primary
    }
    case 'text': {
      return palette.text.dark
    }
    default: {
      return color
    }
  }
}

export const TextArea = styled('textarea')<TextAreaProps>(
  ({ resizable, color, error, width, height }) => ({
    width: width ? width : 'inherit',
    height: height ? height : 'inherit',
    resize: resizable ? 'both' : 'none',
    border: 'none',
    borderBottom: `2px solid ${error ? palette.error : getColor(color)}`,
    outline: 'none',
    padding: '0.5rem',
    color: getColor(color),
    boxShadow: palette.shadows.box1,
    backgroundColor: lighten(0.4, getColor(color)),
    caretColor: darken(0.5, getColor(color)),
  })
)
