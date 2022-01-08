import {
  DEFAULT_BORDER_RADIUS,
  palette,
  SPACING_MID,
  SPACING_SMALL,
  transition,
  typography,
} from 'config'
import { lighten } from 'polished'
import styled, { CSSProperties } from 'styled-components'
import { BaseButtonProps } from './Button.types'

const getStyles = (base: CSSProperties, hoverStyles: CSSProperties) => ({
  base,
  pseudo: {
    hover: { ...hoverStyles },
  },
})

const getColor = (color: BaseButtonProps['color']) => {
  switch (color) {
    case 'primary': {
      return getStyles(
        { backgroundColor: palette.primary.primary, color: palette.text.text },
        { backgroundColor: `${lighten(0.05, palette.primary.primary)}` }
      )
    }
    case 'text': {
      return getStyles(
        { backgroundColor: palette.text.secondary, color: palette.text.text },
        { backgroundColor: `${lighten(0.05, palette.text.secondary)}` }
      )
    }
    default: {
      return getStyles(
        { backgroundColor: color, color: palette.text.text },
        { backgroundColor: `${lighten(0.1, color)}` }
      )
    }
  }
}

const getVariant = (
  variant: BaseButtonProps['variant'],
  color: BaseButtonProps['color'],
  disabled: BaseButtonProps['isDisabled']
) => {
  if (disabled)
    return {
      backgroundColor: palette.text.secondary,
      border: `1px solid ${palette.text.secondary}`,
    }

  switch (variant) {
    case 'contained': {
      return {
        base: {
          border: 'none',
          ...getColor(color).base,
        },
        pseudo: {
          hover: {
            ...getColor(color).pseudo.hover,
          },
        },
      }
    }
    case 'outlined': {
      return {
        base: {
          border: `1px solid ${getColor(color).base.backgroundColor}`,
          color: getColor(color).base.backgroundColor,
          backgroundColor: `${lighten(
            0.49,
            getColor(color).base.backgroundColor || ''
          )}`,
        },
        pseudo: {
          hover: {
            backgroundColor: `${lighten(
              0.45,
              getColor(color).base.backgroundColor || ''
            )}`,
          },
        },
      }
    }
    default: {
      return {}
    }
  }
}

export const BaseButton = styled('button')<BaseButtonProps>(
  ({ variant = 'contained', color, margin, isDisabled }) => ({
    padding: `${SPACING_SMALL}px ${SPACING_MID}px`,
    fontSize: typography.fontSize.regular,
    fontWeight: typography.fontWeight.mid,
    letterSpacing: 0.5,
    borderRadius: DEFAULT_BORDER_RADIUS,
    boxShadow: palette.shadows.box0,
    cursor: isDisabled ? 'not-allowed' : 'pointer',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin,
    ...getVariant(variant, color, isDisabled).base,
    transition: `box-shadow ease-in-out ${transition.time.fast}ms, background-color ease-in-out ${transition.time.medium}ms`,
    '&:hover': {
      boxShadow: palette.shadows.box2,
      ...getVariant(variant, color, isDisabled).pseudo?.hover,
    },
    '&:active': {
      transform: 'scale(0.98)',
      boxShadow: palette.shadows.box1,
      // TODO: add animation here
    },
  })
)
