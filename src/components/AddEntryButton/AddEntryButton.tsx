import { Button } from 'shared/components'
import { TimeEntryErrors } from 'shared/types'

interface AddEntryButtonProps {
  onClick: () => void
  errors: TimeEntryErrors
}

const AddEntryButton = ({ onClick, errors }: AddEntryButtonProps) => {
  const disabled = Boolean(errors.timeEntryDescription || errors.timeEntry)
  const disabledMessage = errors.timeEntryDescription || errors.timeEntry

  return (
    <Button
      color="primary"
      onClick={() => onClick()}
      disabled={disabled}
      disabledTooltip={disabledMessage}
    >
      Add
    </Button>
  )
}

export default AddEntryButton
