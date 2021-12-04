import { SPACING_MID } from 'config'
import { useRef, useState } from 'react'
import { BsArrowReturnLeft, BsPencil, BsTrash } from 'react-icons/bs'
import { DB } from 'services'
import { Label, LabelProps } from 'shared/types'
import { useToggle } from 'shared/utils/hooks'
import { LabelItem } from '../../../Labels/AddNewLabel'
import {
  ActionButton,
  ActionButtonWrapper,
  LabelItemWrapper,
  LabelsWrapper,
} from './LabelsSection.style'

const db = new DB()

type LabelPropsWithDelete = Omit<LabelProps, 'onClick'> & {
  setLabels: (labels: Label[]) => void
}

const LabelComp = ({ labelName, id, setLabels }: LabelPropsWithDelete) => {
  const [clicked, toggleClicked] = useToggle()
  const labelRef = useRef<HTMLDivElement>(null)
  const width = labelRef.current?.offsetWidth
  const height = labelRef.current?.offsetHeight
  const deleteLabel = () => {
    id && db.deleteLabel(id)
    setLabels(db.getLabels())
  }

  return (
    <>
      {clicked && (
        <ActionButtonWrapper
          width={width && width - SPACING_MID}
          height={height}
        >
          <ActionButton onClick={deleteLabel}>
            <BsTrash />
          </ActionButton>
          <ActionButton>
            <BsPencil />
          </ActionButton>
          <ActionButton onClick={toggleClicked}>
            <BsArrowReturnLeft />
          </ActionButton>
        </ActionButtonWrapper>
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
