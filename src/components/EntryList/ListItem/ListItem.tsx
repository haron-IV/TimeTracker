import { SPACING_SMALL } from 'config'
import { useContext } from 'react'
import { BsFillPencilFill, BsFillTrashFill } from 'react-icons/bs'
import { DB, TimeEntry } from 'services'
import { Button, TextArea } from 'shared/components'
import { Label } from 'shared/types'
import { EditEntryContext, EntryListContext } from 'shared/utils'
import { EntryTimeField, Labels } from '../../index'
import { ActionsWrapper, Item } from './ListItem.style'
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
  const { setEditing, editing } = useContext(EditEntryContext) || {}
  const deleteEntry = () => {
    db.deleteTimeEntry(id)
    setUpdateEntryList?.(true)
  }
  const disabled = id !== editing

  return (
    <Item>
      <TextArea
        value={timeEntryDescription}
        color="primary"
        height={75}
        width={400}
        disabled={disabled}
      />
      <Labels
        labels={labels}
        selectedLabels={getSelectedLabels(labels, selectedLabels)}
        disabled={disabled}
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
        <Button
          color="primary"
          margin={`${SPACING_SMALL}px 0 0 0`}
          onClick={() => setEditing?.(id)}
        >
          <BsFillPencilFill />
        </Button>
      </ActionsWrapper>
    </Item>
  )
}

export default ListItem
