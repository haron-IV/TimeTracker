import { APP_HEADER_HEIGHT, palette } from 'config'
import styled from 'styled-components'

export const TimeCalculatorWrapper = styled('div')({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  marginRight: 25,
  color: palette.text.text,
})

export const TimeFieldWrapper = styled('div')({
  display: 'flex',
})

export const Header = styled('header')({
  height: APP_HEADER_HEIGHT,
  backgroundColor: palette.primary.dark,
  boxShadow: palette.shadows.box2,
  position: 'fixed',
  top: 0,
  width: '100%',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '0 2rem',
})

export const TimeOutput = styled('div')({
  minWidth: 75,
})
