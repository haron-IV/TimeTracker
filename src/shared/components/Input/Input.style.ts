import {
  DEFAULT_BORDER_RADIUS,
  palette,
  SPACING_REGULAR,
  transition,
  typography,
  zIndex,
} from 'config'
import { lighten } from 'polished'
import { getColor } from 'shared/utils'
import styled from 'styled-components'
import { InputProps } from './Input'

interface InputWrapperProps extends InputProps {
  width?: string | number
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
  height: 'inherit',

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
  height: inherit;
  label {
    position: absolute;
    opacity: 0;
    display: flex;
    justify-content: center;
    font-size: ${typography.fontSize.regular};
    z-index: ${zIndex.lvl1};
    left: 20px;
    top: -7px;
    transition: opacity ease-in-out ${transition.time.fast}ms;
    color: ${({ color, error }) => getColor(color, error)};
    ::before {
      top: 7px;
      z-index: ${zIndex.lvl1Negative};
      position: absolute;
      content: '${props => props.placeholder}';
      color: transparent;
      background-color: white;
      padding: 0 ${SPACING_REGULAR}px;
    }
  }
  span {
    color: ${palette.error};
  }
  input:focus ~ label {
    opacity: ${({ withoutLabel }) => (withoutLabel ? 0 : 1)};
  }
  input:focus {
    ::placeholder {
      transform: translateY(-20px) scale(0.7);
    }
  }
`
