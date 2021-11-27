import { FOOTER_HEIGHT, FOOTER_PADDING, palette } from 'config'
import styled from 'styled-components'

export const Footer = styled('footer')({
  position: 'fixed',
  bottom: 0,
  left: 0,
  backgroundColor: palette.background.paper,
  width: '100vw',
  maxHeight: FOOTER_HEIGHT,
  padding: FOOTER_PADDING,
  borderTop: `1px solid ${palette.divider}`,
  display: 'flex',
  justifyContent: 'flex-end',
  alignItems: 'center',
  gap: 10,
})
