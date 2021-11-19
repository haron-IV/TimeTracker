import { BsArrowLeftCircle, BsArrowRightCircle } from 'react-icons/bs'
import { EntryListSection, List } from './EntryList.style'
import { useChangeDate, useEntryList } from './EntryList.utils'
import ListItem from './ListItem'

const EntryList = () => {
  const { entriesFromDay, labels, targetDate, setTargetDate } = useEntryList()
  const setDate = useChangeDate(setTargetDate, targetDate)

  //TODO: refactorize this component
  return (
    <EntryListSection>
      <div>
        <b>Selected date:</b>
        <div>
          <button onClick={() => setDate(-1)}>
            <BsArrowLeftCircle />
          </button>
          {/* FIXME: there is a bug with empty entry after changing the date */}
          {targetDate}
          <button onClick={() => setDate(1)}>
            <BsArrowRightCircle />
          </button>
        </div>
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
