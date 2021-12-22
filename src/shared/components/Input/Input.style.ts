import {
  DEFAULT_BORDER_RADIUS,
  palette,
  SPACING_REGULAR,
  transition,
  typography,
} from 'config'
import { lighten } from 'polished'
import { Color } from 'shared/types'
import styled from 'styled-components'
import { InputProps } from './Input'

interface InputWrapperProps extends InputProps {
  width?: string | number
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

type StyledInputProps = Pick<InputProps, 'color' | 'error'>
export const Input = styled('input')<StyledInputProps>(({ color, error }) => ({
  border: `2px solid ${palette.divider}`,
  padding: SPACING_REGULAR,
  borderRadius: DEFAULT_BORDER_RADIUS,
  fontSize: typography.fontSize.mid,
  caretColor: getColor(color, error),
  outline: 'none',
  width: 'inherit',

  '&:focus': {
    border: `2px solid ${getColor(color, error)}`,
  },

  '&::placeholder': {
    fontWeight: typography.fontWeight.mid,
    color: lighten(0.1, palette.text.secondary),
    transition: `transform ease-in-out ${transition.time.fast}ms`,
  },
}))

export const InputWrapper = styled.div<InputWrapperProps>`
  position: relative;
  width: ${({ width }) => (typeof width === 'string' ? width : `${width}px`)};
  margin: ${({ margin }) =>
    typeof margin === 'string' ? margin : `${margin}px`};
  label {
    position: absolute;
    opacity: 0;
    display: flex;
    justify-content: center;
    font-size: ${typography.fontSize.regular};
    z-index: 2;
    left: 20px;
    top: -7px;
    transition: opacity ease-in-out ${transition.time.fast}ms;
    color: ${({ color, error }) => getColor(color, error)};
    ::before {
      top: 7px;
      z-index: -2;
      position: absolute;
      content: '${props => props.label}';
      color: transparent;
      background-color: white;
      padding: 0 ${SPACING_REGULAR}px;
    }
  }
  span {
    color: ${palette.error};
  }
  input:focus ~ label {
    opacity: 1;
  }
  input:focus {
    position: absolute;
    ::placeholder {
      transform: translateY(-20px) scale(0.7);
    }
  }
`
