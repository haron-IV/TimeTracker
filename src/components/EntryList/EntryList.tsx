import { BsArrowLeftCircle, BsArrowRightCircle } from 'react-icons/bs'
import {
  Button,
  ControlsWrapper,
  DateWrapper,
  EntryListSection,
  List,
} from './EntryList.style'
import { useChangeDate, useEntryList } from './EntryList.utils'
import ListItem from './ListItem'

const EntryList = () => {
  const { entriesFromDay, labels, targetDate, setTargetDate } = useEntryList()
  const setDate = useChangeDate(setTargetDate, targetDate)

  return (
    <EntryListSection>
      <div>
        <b>Selected date:</b>
        <ControlsWrapper>
          <Button onClick={() => setDate(-1)} side="left">
            <BsArrowLeftCircle />
          </Button>
          {/* FIXME: there is a bug with empty entry after changing the date */}
          <DateWrapper>{targetDate}</DateWrapper>
          <Button onClick={() => setDate(1)} side="right">
            <BsArrowRightCircle />
          </Button>
        </ControlsWrapper>
      </div>
      <List>
        {entriesFromDay.map(item => (
          <ListItem {...item} labels={labels} />
        ))}
      </List>
    </EntryListSection>
  )
}

export default EntryList
