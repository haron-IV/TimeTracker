import { palette } from 'config'
import { darken, lighten } from 'polished'
import { Color } from 'shared/types'
import { getColor } from 'shared/utils'
import styled from 'styled-components'

type Size = string | number

export interface TextAreaProps {
  resizable?: boolean
  color: Color
  error?: string
  width?: Size
  height?: Size
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
