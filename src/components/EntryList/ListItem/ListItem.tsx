import styled from 'styled-components'
import { EntryTimeField, Labels } from '../..'
import {
  DEFAULT_BORDER_RADIUS,
  ENTRY_DESCRIPTION_FIELD_WIDTH,
  ENTRY_LIST_ITEM_PADDING,
  palette,
} from '../../../config'
import { BsFillTrashFill } from 'react-icons/bs'

const Item = styled('li')({
  padding: ENTRY_LIST_ITEM_PADDING,
  color: palette.text.secondary,
  borderRadius: DEFAULT_BORDER_RADIUS,
  backgroundColor: palette.background.paper,
  boxShadow: palette.shadows.box1,
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
})

const EntryDescription = styled('textarea')({
  backgroundColor: palette.primary.light,
  outline: `1px solid ${palette.accent.accent}`,
  border: 'none',
  padding: 10,
  width: ENTRY_DESCRIPTION_FIELD_WIDTH,
  borderRadius: DEFAULT_BORDER_RADIUS,
})

const ListItem = () => {
  return (
    <Item>
      <EntryDescription>elo</EntryDescription>
      <Labels />
      <EntryTimeField />
      <button style={{ height: '100%', padding: '30px 10px' }}>
        <BsFillTrashFill color="accent" />
      </button>
    </Item>
  )
}

export default ListItem
