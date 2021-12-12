import { Button } from 'shared/components'

interface AddEntryButtonProps {
  onClick: () => void
}

// TODO: add validation (fe. if there is no time )
const AddEntryButton = ({ onClick }: AddEntryButtonProps) => {
  return (
    <Button color="primary" onClick={() => onClick()}>
      Add
    </Button>
  )
}

export default AddEntryButton
