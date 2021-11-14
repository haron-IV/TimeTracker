import AppFooter from 'components/AppFooter/AppFooter'
import { useEffect, useState } from 'react'
import { DB } from 'services'
import { EntryListContext } from 'shared/utils'
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
  const [updateEntryList, setUpdateEntryList] = useState(false)

  return (
    <AppWrapper>
      <AppHeader />
      <Container>
        <EntryListContext.Provider
          value={{ updateEntryList, setUpdateEntryList }}
        >
          <TimeEntrySection />
          <EntryList />
        </EntryListContext.Provider>
      </Container>
      <AppFooter spaceInfo={spaceInfo} />
    </AppWrapper>
  )
}

export default App
