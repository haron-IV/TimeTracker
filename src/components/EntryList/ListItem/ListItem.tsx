import { DISABLED_ENTRY_LIST_ITEMS_TEXT, SPACING_SMALL } from 'config'
import { useContext } from 'react'
import { BsCheckLg, BsFillPencilFill, BsFillTrashFill } from 'react-icons/bs'
import { DB, TimeEntry } from 'services'
import { Button, TextArea, Tooltip } from 'shared/components'

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
  const toggleEditing = () => {
    setEditing?.(id)
    if (editing === id) setEditing?.(null)
  }
  const disabled = id !== editing

  return (
    <Item>
      <Tooltip show={disabled} text={DISABLED_ENTRY_LIST_ITEMS_TEXT}>
        <TextArea
          value={timeEntryDescription}
          color="primary"
          height={75}
          width={400}
          disabled={disabled}
        />
      </Tooltip>
      <Tooltip show={disabled} text={DISABLED_ENTRY_LIST_ITEMS_TEXT}>
        <Labels
          labels={labels}
          selectedLabels={getSelectedLabels(labels, selectedLabels)}
          disabled={disabled}
        />
      </Tooltip>
      <Tooltip show={disabled} text={DISABLED_ENTRY_LIST_ITEMS_TEXT}>
        <EntryTimeField
          hours={entryTimeHours}
          minutes={entryTimeMinutes}
          disabled={disabled}
        />
      </Tooltip>
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
          onClick={toggleEditing}
        >
          {disabled ? <BsFillPencilFill /> : <BsCheckLg />}
        </Button>
      </ActionsWrapper>
    </Item>
  )
}

export default ListItem
