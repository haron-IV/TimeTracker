import { BsFillPencilFill, BsFillTrashFill } from 'react-icons/bs'
import { TimeEntry } from 'services/DB'
import { Label } from 'shared/types'
import { EntryTimeField, Labels } from '../../index'
import {
  ActionsWrapper,
  Button,
  EntryDescription,
  Item,
} from './ListItem.style'
import { calculateTimeEntry, getSelectedLabels } from './ListItem.utils'

interface ListItemProps extends TimeEntry {
  labels: Label[]
}

const ListItem = ({
  entryTimeHours,
  entryTimeMinutes,
  selectedLabels,
  timeEntryDescription,
  labels,
}: ListItemProps) => {
  return (
    <Item>
      <EntryDescription>{timeEntryDescription}</EntryDescription>
      <Labels
        labels={labels}
        selectedLabels={getSelectedLabels(labels, selectedLabels)}
      />
      <EntryTimeField hours={entryTimeHours} minutes={entryTimeMinutes} />
      <div>
        Scaled time: {calculateTimeEntry(entryTimeHours, entryTimeMinutes)}
      </div>

      <ActionsWrapper>
        <Button>
          <BsFillTrashFill color="accent" />
        </Button>
        <Button>
          <BsFillPencilFill color="accent" />
        </Button>
      </ActionsWrapper>
    </Item>
  )
}

export default ListItem
