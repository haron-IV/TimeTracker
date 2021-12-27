import { palette, SPACING_SMALL } from 'config'
import { ChangeEvent } from 'react'
import {
  BsArrowLeftCircle,
  BsArrowRightCircle,
  BsExclamationOctagon,
} from 'react-icons/bs'
import { Button } from 'shared/components'
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
  )
}

export default EntryList
