import { LabelItem } from 'components/Labels/AddNewLabel'
import {
  LABEL_HEIGHT,
  LABEL_MARGIN,
  LABEL_PADDING,
  LABEL_WIDTH,
  SPACING_REGULAR,
} from 'config'
import { BsTrash } from 'react-icons/bs'
import { DB } from 'services'
import { LabelProps } from 'shared/types'
import { useToggle } from 'shared/utils/hooks'
import styled from 'styled-components'

const db = new DB()

//TODO:
// Refactorize
// Add logic to remove labels
// Add are you sure to delete

const LabelsWrapper = styled('section')({
  display: 'flex',
  justifyContent: 'space-between',
  flexWrap: 'wrap',
  gap: SPACING_REGULAR,
})

const DeleteButton = styled('button')({
  padding: LABEL_PADDING,
  height: LABEL_HEIGHT,
  minWidth: LABEL_WIDTH,
  margin: `0 ${LABEL_MARGIN}px`,
})

const Label = ({ labelName, id }: Omit<LabelProps, 'onClick'>) => {
  const [clicked, toggleClicked] = useToggle()

  return (
    <>
      {clicked ? (
        <DeleteButton>
          <BsTrash />
        </DeleteButton>
      ) : (
        <LabelItem {...{ labelName, id }} key={id} onClick={toggleClicked} />
      )}
    </>
  )
}

const LabelsSection = () => {
  const labels = db.getLabels()

  return (
    <LabelsWrapper>
      {labels.map(({ name, id }) => (
        <Label labelName={name} id={id} key={id} />
      ))}
    </LabelsWrapper>
  )
}

export default LabelsSection
