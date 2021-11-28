import {
  DEFAULT_BORDER_RADIUS,
  palette,
  SPACING_BIG,
  SPACING_REGULAR,
  SPACING_SMALL,
  typography,
} from 'config'
import styled from 'styled-components'

export const ModalWrapper = styled('div')({
  width: '100vw',
  height: '100vh',
  position: 'fixed',
  top: 0,
  left: 0,
  backgroundColor: `${palette.text.secondary}d9`,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
})

export const ModalPaper = styled('div')({
  position: 'relative',
  width: 400,
  height: 650,
  backgroundColor: palette.background.paper,
  borderRadius: DEFAULT_BORDER_RADIUS,
  padding: SPACING_REGULAR,
})

export const ModalTitle = styled('header')({
  textAlign: 'center',
  fontSize: typography.fontSize.mid,
  letterSpacing: 2,
  borderBottom: `1px solid ${palette.divider}4f`,
  paddingBottom: SPACING_SMALL,
  marginBottom: SPACING_BIG,
})

export const ModalContent = styled('div')({})

export const ModalFooter = styled('div')({
  position: 'absolute',
  bottom: 0,
  padding: SPACING_REGULAR,
  width: `calc(100% - ${SPACING_REGULAR * 2}px)`,
  justifySelf: 'center',
  borderTop: `1px solid ${palette.divider}4f`,
})
