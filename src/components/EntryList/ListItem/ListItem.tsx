import styled from 'styled-components'
import { EntryTimeField, Labels } from '../..'
import {
  DEFAULT_BORDER_RADIUS,
  ENTRY_DESCRIPTION_FIELD_WIDTH,
  ENTRY_LIST_ITEM_PADDING,
  palette,
  TIME_MULTIPLY_RATIO,
  ENTRY_LIST_ITEM_MARGIN,
} from '../../../config'
import { BsFillTrashFill } from 'react-icons/bs'
import { MOCK_LABELS } from 'shared/mocks'
import { TimeEntry } from 'services/DB'
import { Label } from 'components/TimeEntrySection/TimeEntrySection.utils'

const Item = styled('li')({
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

const EntryDescription = styled('textarea')({
  backgroundColor: palette.primary.light,
  outline: `1px solid ${palette.accent.accent}`,
  border: 'none',
  padding: 10,
  width: ENTRY_DESCRIPTION_FIELD_WIDTH,
  borderRadius: DEFAULT_BORDER_RADIUS,
})

interface ListItemProps extends TimeEntry {
  labels: Label[]
}

//TODO: refactorize it

const ListItem = ({
  entryTimeHours,
  entryTimeMinutes,
  selectedLabels,
  timeEntryDescription,
  labels,
}: ListItemProps) => {
  const calculateTimeEntry = (hours: number, minutes: number) => {
    const scaledTime = minutes / TIME_MULTIPLY_RATIO

    return `${hours}.${scaledTime}`
  }

  return (
    <Item>
      <EntryDescription>{timeEntryDescription}</EntryDescription>
      <Labels labels={labels} />
      <EntryTimeField
        hours={entryTimeHours}
        minutes={entryTimeMinutes}
        setHours={() => {}}
        setMinutes={() => {}}
      />
      <div>
        Scaled time: {calculateTimeEntry(entryTimeHours, entryTimeMinutes)}
      </div>
      <button style={{ height: '100%', padding: '30px 10px' }}>
        <BsFillTrashFill color="accent" />
      </button>
    </Item>
  )
}

export default ListItem
