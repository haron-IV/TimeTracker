import AppFooter from 'components/AppFooter/AppFooter'
import { DB } from 'services'
import styled from 'styled-components'
import { AppHeader, EntryList, TimeEntrySection } from './components'
import { palette } from './config'
import { Container } from './shared/components'

const AppWrapper = styled('div')({
  backgroundColor: palette.background.primary,
  width: '100vw',
  height: '100vh',
})

const db = new DB()
const spaceInfo = db.getDbSpace()

const App = () => {
  return (
    <AppWrapper>
      <AppHeader />
      <Container>
        <TimeEntrySection />
        <EntryList />
      </Container>
      <AppFooter spaceInfo={spaceInfo} />
    </AppWrapper>
  )
}

export default App
