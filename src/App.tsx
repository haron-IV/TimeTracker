import styled from 'styled-components'
import { AppHeader } from './components'
import { palette } from './config'
import { Container } from './shared/components'

const AppWrapper = styled('div')({
  backgroundColor: palette.background.primary,
  width: '100vw',
  height: '100vh',
})

const App = () => {
  return (
    <AppWrapper>
      <AppHeader />
      <Container>elo</Container>
      {/* 
        
        text area for time entry
        label for time entry
        time for time entry
        list of entries
      */}
    </AppWrapper>
  )
}

export default App
