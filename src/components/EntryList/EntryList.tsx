import styled from 'styled-components'
import {
  ENTRY_LIST_MARGIN_TOP,
  ENTRY_LIST_PADDING_TOP,
  palette,
} from '../../config'
import ListItem from './ListItem'

const EntryListSection = styled('section')({
  borderTop: `1px solid ${palette.divider}`,
  width: '100%',
  marginTop: ENTRY_LIST_MARGIN_TOP,
})

const List = styled('ul')({
  listStyleType: 'none',
  margin: 0,
  padding: `${ENTRY_LIST_PADDING_TOP}px 0 0 0`,
})

const EntryList = () => {
  return (
    <EntryListSection>
      <List>
        <ListItem />
      </List>
    </EntryListSection>
  )
}

export default EntryList
