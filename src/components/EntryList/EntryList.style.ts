import {
  APP_HEADER_HEIGHT,
  ENTRY_LIST_MARGIN_TOP,
  ENTRY_LIST_PADDING_TOP,
  palette,
  TIME_ENTRY_SECTION_HEIGHT,
  typography,
} from 'config'
import styled from 'styled-components'

export const EntryListSection = styled('section')({
  borderTop: `1px solid ${palette.divider}`,
  width: '100%',
  marginTop: ENTRY_LIST_MARGIN_TOP,
  overflowY: 'auto',
  height: `calc(100vh - ${APP_HEADER_HEIGHT + TIME_ENTRY_SECTION_HEIGHT}px)`,
})

export const List = styled('ul')({
  listStyleType: 'none',
  margin: 0,
  padding: `${ENTRY_LIST_PADDING_TOP}px 0 0 0`,
})

export const ControlsWrapper = styled('div')({
  display: 'flex',
  alignItems: 'center',
})

export const DateField = styled('input')({
  fontSize: typography.fontSize.regular,
})

export const EmptyList = styled('div')({
  width: '100%',
  height: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
})
