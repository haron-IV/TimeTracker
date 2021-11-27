import { useState } from 'react'
import { DB } from 'services'
import { EntryListContext } from 'shared/utils'
import styled, { createGlobalStyle } from 'styled-components'
import { AppFooter, AppHeader, EntryList, TimeEntrySection } from './components'
import { palette } from './config'
import { Container } from './shared/components'

const db = new DB()
const spaceInfo = db.getDbSpace()

const AppWrapper = styled('div')({
  backgroundColor: palette.background.primary,
  width: '100vw',
  height: '100vh',
})

const GlobalStyle = createGlobalStyle({
  html: {
    fontSize: 10,
    fontFamily: 'Roboto, sans-serif',
    overflow: 'hidden',
  },
  '*': {
    boxSizing: 'border-box',
  },
})

const App = () => {
  const [updateEntryList, setUpdateEntryList] = useState(false)

  return (
    <AppWrapper>
      <GlobalStyle />
      <AppHeader />
      <Container>
        <EntryListContext.Provider
          value={{ updateEntryList, setUpdateEntryList }}
        >
          <TimeEntrySection updateEntryList={updateEntryList} />
          <EntryList />
        </EntryListContext.Provider>
      </Container>
      <AppFooter spaceInfo={spaceInfo} />
    </AppWrapper>
  )
}

export default App
