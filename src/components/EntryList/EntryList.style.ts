import {
  APP_HEADER_HEIGHT,
  DEFAULT_BORDER_RADIUS,
  DEFAULT_BUTTON_PADDING_X,
  DEFAULT_BUTTON_PADDING_Y,
  ENTRY_LIST_MARGIN_TOP,
  ENTRY_LIST_PADDING_TOP,
  palette,
  SPACING_REGULAR,
  SPACING_SMALL,
  TIME_ENTRY_SECTION_HEIGHT,
  transition,
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

interface ButtonProps {
  side: 'left' | 'right'
}

export const Button = styled('button')<ButtonProps>(({ side }) => ({
  padding: `${DEFAULT_BUTTON_PADDING_Y}px ${DEFAULT_BUTTON_PADDING_X}px`,
  border: 'none',
  backgroundColor: palette.primary.light,
  transition: `background-color ease-in-out ${transition.time.fast}ms, box-shadow ease-out ${transition.time.instant}`,
  borderRadius: DEFAULT_BORDER_RADIUS,
  marginTop: `${SPACING_SMALL}px`,
  marginRight: side === 'left' ? `${SPACING_REGULAR}px` : 0,
  marginLeft: side === 'right' ? `${SPACING_REGULAR}px` : 0,
  cursor: 'pointer',
  boxShadow: palette.shadows.box1,
  '&:hover': {
    backgroundColor: palette.primary.primary,
  },
  '&:active': {
    boxShadow: palette.shadows.box0,
  },
}))

export const DateWrapper = styled('div')({
  fontSize: typography.fontSize.regular,
})
