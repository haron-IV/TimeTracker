import styled from 'styled-components'
import { APP_HEADER_HEIGHT, palette } from '../../config'
import { H1 } from '../../shared/components'

const Header = styled('header')({
  height: APP_HEADER_HEIGHT,
  backgroundColor: palette.primary.dark,
  boxShadow: palette.shadows.box2,
  position: 'fixed',
  top: 0,
  width: '100%',
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'center',
  padding: '0 2rem',
})

const AppHeader = () => {
  return (
    <Header>
      <H1>Time Tracker</H1>
    </Header>
  )
}

export default AppHeader
