import { palette, transition } from 'config'
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
  disabled?: boolean
}

export const TextArea = styled('textarea')<TextAreaProps>(
  ({ resizable, color, error, width, height, disabled = false }) => ({
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
    transition: `all ease-in-out ${transition.time.fast}ms`,
    cursor: disabled ? 'not-allowed' : 'default',

    '&: hover': {
      ...(disabled && {
        backgroundColor: getColor(color, undefined, disabled),
        borderColor: darken(0.2, getColor(color, undefined, disabled)),
      }),
    },
  })
)
