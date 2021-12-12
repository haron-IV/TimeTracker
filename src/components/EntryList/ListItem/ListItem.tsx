import { SPACING_SMALL } from 'config'
import { useContext } from 'react'
import { BsFillPencilFill, BsFillTrashFill } from 'react-icons/bs'
import { DB, TimeEntry } from 'services'
import { Button } from 'shared/components'
import { Label } from 'shared/types'
import { EntryListContext } from 'shared/utils'
import { EntryTimeField, Labels } from '../../index'
import { ActionsWrapper, EntryDescription, Item } from './ListItem.style'
import { calculateTimeEntry, getSelectedLabels } from './ListItem.utils'

const db = new DB()

interface ListItemProps extends TimeEntry {
  labels: Label[]
}

const ListItem = ({
  entryTimeHours,
  entryTimeMinutes,
  selectedLabels,
  timeEntryDescription,
  labels,
  id,
}: ListItemProps) => {
  const { setUpdateEntryList } = useContext(EntryListContext) || {}
  const deleteEntry = () => {
    db.deleteTimeEntry(id)
    setUpdateEntryList?.(true)
  }

  return (
    <Item>
      <EntryDescription defaultValue={timeEntryDescription} />
      <Labels
        labels={labels}
        selectedLabels={getSelectedLabels(labels, selectedLabels)}
      />
      <EntryTimeField hours={entryTimeHours} minutes={entryTimeMinutes} />
      <div>
        Scaled time: {calculateTimeEntry(entryTimeHours, entryTimeMinutes)}
      </div>

      <ActionsWrapper>
        <Button
          onClick={deleteEntry}
          color="primary"
          margin={`${SPACING_SMALL}px 0 0 0`}
        >
          <BsFillTrashFill />
        </Button>
        <Button color="primary" margin={`${SPACING_SMALL}px 0 0 0`}>
          <BsFillPencilFill />
        </Button>
      </ActionsWrapper>
    </Item>
  )
}

export default ListItem
