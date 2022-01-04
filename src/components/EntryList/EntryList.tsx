import { palette, SPACING_SMALL } from 'config'
import { ChangeEvent, useState } from 'react'
import {
  BsArrowLeftCircle,
  BsArrowRightCircle,
  BsExclamationOctagon,
} from 'react-icons/bs'
import { TimeEntry } from 'services'
import { Button } from 'shared/components'
import { EditEntryContext } from 'shared/utils'
import {
  ControlsWrapper,
  DateField,
  EmptyList,
  EntryListSection,
  List,
} from './EntryList.style'
import { useChangeDate, useEntryList } from './EntryList.utils'
import ListItem from './ListItem'
import TimeSumup from './TimeSumup'

type ChangeEv = ChangeEvent<HTMLInputElement>

const EntryList = () => {
  const [editing, setEditing] = useState<TimeEntry['id'] | null>(null)
  const {
    entriesFromDay,
    labels,
    targetDate,
    summedTimeFromDay,
    summedTimeFromDayScaled,
    setTargetDate,
  } = useEntryList()
  const setDate = useChangeDate(setTargetDate, targetDate)
  const onDateChange = (e: ChangeEv) => setTargetDate(e.target.value)

  return (
    <EditEntryContext.Provider value={{ editing, setEditing }}>
      <EntryListSection>
        <div>
          <b>Selected date:</b>
          <ControlsWrapper>
            <Button
              onClick={() => setDate(-1)}
              color="primary"
              variant="outlined"
              margin={SPACING_SMALL}
            >
              <BsArrowLeftCircle size={13} />
            </Button>
            <DateField type="date" value={targetDate} onChange={onDateChange} />
            <Button
              onClick={() => setDate(1)}
              color="primary"
              variant="outlined"
              margin={SPACING_SMALL}
            >
              <BsArrowRightCircle size={13} />
            </Button>
          </ControlsWrapper>
          <TimeSumup
            regularTime={summedTimeFromDay}
            scaledTime={summedTimeFromDayScaled}
          />
        </div>
        <List>
          {entriesFromDay.map(item => (
            <ListItem key={item.id} {...item} labels={labels} />
          ))}
          {entriesFromDay.length === 0 && (
            <EmptyList>
              <h1>No time entries</h1>
              <BsExclamationOctagon size={100} color={palette.accent.accent} />
            </EmptyList>
          )}
        </List>
      </EntryListSection>
    </EditEntryContext.Provider>
  )
}

export default EntryList
