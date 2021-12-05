import { useState } from 'react'
import { DB } from 'services'
import { EntryListContext, LabelsContext } from 'shared/utils'
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
    padding: 0,
    margin: 0,
  },
})

const App = () => {
  const [updateEntryList, setUpdateEntryList] = useState(false)
  const [updateLabels, setUpdateLabels] = useState(false)

  return (
    <AppWrapper>
      <EntryListContext.Provider
        value={{ updateEntryList, setUpdateEntryList }}
      >
        <LabelsContext.Provider value={{ updateLabels, setUpdateLabels }}>
          <GlobalStyle />
          <AppHeader />
          <Container>
            <TimeEntrySection updateEntryList={updateEntryList} />
            <EntryList />
          </Container>
          <AppFooter spaceInfo={spaceInfo} />
        </LabelsContext.Provider>
      </EntryListContext.Provider>
    </AppWrapper>
  )
}

export default App
