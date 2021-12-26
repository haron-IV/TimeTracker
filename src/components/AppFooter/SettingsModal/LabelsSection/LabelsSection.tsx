import { useContext, useState } from 'react'
import {
  BsArrowReturnLeft,
  BsCheck2,
  BsPencil,
  BsTrash,
  BsX,
} from 'react-icons/bs'
import { DB } from 'services'
import { Label, LabelProps } from 'shared/types'
import { LabelsContext } from 'shared/utils'
import { useToggle } from 'shared/utils/hooks'
import { LabelItem } from '../../../Labels/AddNewLabel'
import {
  ActionButton,
  ActionButtonWrapper,
  EditLabelNameWrapper,
  Input,
  LabelItemWrapper,
  LabelsWrapper,
} from './LabelsSection.style'

const db = new DB()

type LabelPropsWithDelete = Omit<LabelProps, 'onClick'> & {
  setLabels: (labels: Label[]) => void
}

//TODO: this component could be used as global label component

const LabelComp = ({ labelName, id, setLabels }: LabelPropsWithDelete) => {
  const { setUpdateLabels } = useContext(LabelsContext) || {}
  const [clicked, toggleClicked] = useToggle()
  const [editClicked, toggleEditClicked] = useToggle()
  const [newLabelName, setNewLabelName] = useState(labelName)
  const deleteLabel = () => {
    id && db.deleteLabel(id)
    setLabels(db.getLabels())
    setUpdateLabels?.(true)
  }
  const updateLabel = () => {
    newLabelName && id && db.editLabel(newLabelName, id)
    setLabels(db.getLabels())
    toggleClicked()
    toggleEditClicked()
    setUpdateLabels?.(true)
  }

  return (
    <>
      {clicked && !editClicked && (
        <ActionButtonWrapper>
          <ActionButton onClick={deleteLabel}>
            <BsTrash />
          </ActionButton>
          <ActionButton onClick={toggleEditClicked}>
            <BsPencil />
          </ActionButton>
          <ActionButton onClick={toggleClicked}>
            <BsArrowReturnLeft />
          </ActionButton>
        </ActionButtonWrapper>
      )}

      {editClicked && (
        <EditLabelNameWrapper>
          <Input
            color="primary"
            type="text"
            onChange={e => setNewLabelName(e.target.value)}
            value={newLabelName}
          />

          <ActionButton onClick={updateLabel}>
            <BsCheck2 />
          </ActionButton>
          <ActionButton onClick={toggleEditClicked}>
            <BsX />
          </ActionButton>
        </EditLabelNameWrapper>
      )}

      <LabelItemWrapper clicked={clicked}>
        <LabelItem {...{ labelName, id }} key={id} onClick={toggleClicked} />
      </LabelItemWrapper>
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
