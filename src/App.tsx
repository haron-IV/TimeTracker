import styled from 'styled-components'
import {
  AddEntryButton,
  AppHeader,
  EntryDescriptionField,
  EntryList,
  EntryTimeField,
  Labels,
  TimeEntrySection,
} from './components'
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
      <Container>
        <TimeEntrySection>
          <EntryDescriptionField />
          <Labels />
          <EntryTimeField />
          <AddEntryButton />
        </TimeEntrySection>
        <EntryList />
      </Container>
    </AppWrapper>
  )
}

export default App
