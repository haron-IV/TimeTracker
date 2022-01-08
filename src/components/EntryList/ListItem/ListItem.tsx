import { DISABLED_ENTRY_LIST_ITEMS_TEXT, SPACING_SMALL } from 'config'
import { BsCheckLg, BsFillPencilFill, BsFillTrashFill } from 'react-icons/bs'
import { TimeEntry } from 'services'
import { Button, TextArea, Tooltip } from 'shared/components'
import { Label } from 'shared/types'
import { EntryTimeField, Labels } from '../../index'
import { ActionsWrapper, Item } from './ListItem.style'
import {
  calculateTimeEntry,
  getSelectedLabels,
  useDeleteEntry,
  useEdit,
} from './ListItem.utils'

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
  const deleteEntry = useDeleteEntry(id)
  const { disabled, toggleEditing } = useEdit(id)

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
