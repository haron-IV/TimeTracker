import { useContext, useEffect, useState } from 'react'
import { DB } from 'services'
import { EntryListContext } from 'shared/utils'
import styled from 'styled-components'
import {
  ENTRY_LIST_MARGIN_TOP,
  ENTRY_LIST_PADDING_TOP,
  APP_HEADER_HEIGHT,
  TIME_ENTRY_SECTION_HEIGHT,
  palette,
} from '../../config'
import ListItem from './ListItem'

const db = new DB()

const EntryListSection = styled('section')({
  borderTop: `1px solid ${palette.divider}`,
  width: '100%',
  marginTop: ENTRY_LIST_MARGIN_TOP,
  overflowY: 'auto',
  height: `calc(100vh - ${APP_HEADER_HEIGHT + TIME_ENTRY_SECTION_HEIGHT}px)`,
})

const List = styled('ul')({
  listStyleType: 'none',
  margin: 0,
  padding: `${ENTRY_LIST_PADDING_TOP}px 0 0 0`,
})

const EntryList = () => {
  const ctx = useContext(EntryListContext)
  const [timeEntryItems, setTimeEntryItems] = useState(db.getTimeEntries())

  useEffect(() => {
    if (!ctx?.updateEntryList) return
    setTimeEntryItems(db.getTimeEntries())
    ctx.setUpdateEntryList(false)
  }, [ctx?.updateEntryList])

  return (
    <EntryListSection>
      <List>
        {timeEntryItems.map(item => (
          <ListItem {...item} labels={db.getLabels()} />
        ))}
      </List>
    </EntryListSection>
  )
}

export default EntryList
