import { palette, SPACING_MID, SPACING_REGULAR, typography } from 'config'
import styled, { css, keyframes } from 'styled-components'

export const CollapseWrapper = styled('div')({
  backgroundColor: palette.background.primary,
  margin: `${SPACING_REGULAR}px 0`,
  boxShadow: palette.shadows.box0,
})

interface CollapseHeaderProps {
  open: boolean
}
export const CollapseHeader = styled('header')<CollapseHeaderProps>(
  ({ open }) => ({
    cursor: 'pointer',
    fontSize: typography.fontSize.regular,
    fontWeight: typography.fontWeight.regular,
    display: 'flex',
    alignItems: 'center',
    gap: SPACING_MID,
    padding: SPACING_MID,
    borderBottom: `1px solid  ${palette.divider}`,
    '& svg': {
      transform: `rotate(${open ? '180deg' : '0deg'})`,
    },
  })
)

//FIXME: this animation doesn't work
const collapseKeyframes = keyframes`
  from {
    opacity: 0
  }
  to{ 
    opacity: 1;
  }
`

const collapseAnimation = () => css`
  animation: ${collapseKeyframes};
  animation-duration: 1s;
  animation-timing-function: ease-in-out;
`

export const CollapseContent = styled('div')({
  padding: SPACING_MID,
  animation: `${collapseAnimation}`,
})
