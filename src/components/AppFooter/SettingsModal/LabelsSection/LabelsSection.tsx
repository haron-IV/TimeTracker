import { LabelItem } from 'components/Labels/AddNewLabel' //TODO: move it to shared
import { useState } from 'react'
import { BsTrash } from 'react-icons/bs'
import { DB } from 'services'
import { Label, LabelProps } from 'shared/types'
import { useToggle } from 'shared/utils/hooks'
import { DeleteButton, LabelsWrapper } from './LabelsSection.style'

const db = new DB()

type LabelPropsWithDelete = Omit<LabelProps, 'onClick'> & {
  setLabels: (labels: Label[]) => void
}

const LabelComp = ({ labelName, id, setLabels }: LabelPropsWithDelete) => {
  const [clicked, toggleClicked] = useToggle()

  const deleteLabel = () => {
    id && db.deleteLabel(id)
    setLabels(db.getLabels())
  }

  return (
    <>
      {clicked ? (
        <DeleteButton onClick={deleteLabel}>
          <BsTrash />
        </DeleteButton>
      ) : (
        <LabelItem {...{ labelName, id }} key={id} onClick={toggleClicked} />
      )}
    </>
  )
}

const LabelsSection = () => {
  const [labels, setLabels] = useState(db.getLabels())

  return (
    <LabelsWrapper>
      {labels.map(({ name, id }) => (
        <LabelComp labelName={name} id={id} key={id} setLabels={setLabels} />
      ))}
    </LabelsWrapper>
  )
}

export default LabelsSection
