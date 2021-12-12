import {
  DEFAULT_BORDER_RADIUS,
  ENTRY_DESCRIPTION_FIELD_WIDTH,
  ENTRY_LIST_ITEM_MARGIN,
  ENTRY_LIST_ITEM_PADDING,
  palette,
} from 'config'
import styled from 'styled-components'

export const Item = styled('li')({
  padding: ENTRY_LIST_ITEM_PADDING,
  color: palette.text.secondary,
  borderRadius: DEFAULT_BORDER_RADIUS,
  backgroundColor: palette.background.paper,
  boxShadow: palette.shadows.box1,
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: ENTRY_LIST_ITEM_MARGIN,
})

export const EntryDescription = styled('textarea')({
  backgroundColor: palette.primary.light,
  outline: `1px solid ${palette.accent.accent}`,
  border: 'none',
  padding: 10,
  width: ENTRY_DESCRIPTION_FIELD_WIDTH,
  borderRadius: DEFAULT_BORDER_RADIUS,
})

export const ActionsWrapper = styled('div')({
  display: 'flex',
  flexDirection: 'column',
})
