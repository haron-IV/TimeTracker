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

// TODO: refactorize

interface InputProps {
  color: Color
}

const getColor = (color: Color) => {
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

export const Input = styled('input')<InputProps>(({ color }) => ({
  border: `2px solid ${palette.divider}`,
  padding: SPACING_REGULAR,
  borderRadius: DEFAULT_BORDER_RADIUS,
  fontSize: typography.fontSize.mid,
  caretColor: getColor(color),
  outline: 'none',
  width: 'inherit',

  '&:focus': {
    border: `2px solid ${getColor(color)}`,
  },

  '&::placeholder': {
    fontWeight: typography.fontWeight.mid,
    color: lighten(0.1, palette.text.secondary),
    transition: `transform ease-in-out ${transition.time.fast}ms`,
  },
}))

interface InputWrapperProps {
  label?: string
  color: Color
  margin?: string | number
  width?: string | number
}

export const InputWrapper = styled.div<InputWrapperProps>`
  position: relative;
  width: ${props =>
    typeof props.width === 'string' ? props.width : `${props.width}px`};
  margin: ${props =>
    typeof props.margin === 'string' ? props.margin : `${props.margin}px`};
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
    color: ${props => getColor(props.color)};
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
