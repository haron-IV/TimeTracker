interface AddEntryButtonProps {
  onClick: () => void
}

// TODO: add validation (fe. if there is no time )
const AddEntryButton = ({ onClick }: AddEntryButtonProps) => {
  return <button onClick={() => onClick()}>Add</button>
}

export default AddEntryButton
