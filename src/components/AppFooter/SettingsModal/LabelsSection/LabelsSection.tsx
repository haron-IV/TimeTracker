import { LabelItem } from 'components/Labels/AddNewLabel' //TODO: move it to shared
import { SPACING_MID } from 'config'
import { MouseEventHandler, useRef, useState } from 'react'
import { BsArrowReturnLeft, BsPencil, BsTrash } from 'react-icons/bs'
import { DB } from 'services'
import { Label, LabelProps } from 'shared/types'
import { useToggle } from 'shared/utils/hooks'
import {
  ActionButton,
  ActionButtonWrapper,
  LabelsWrapper,
} from './LabelsSection.style'

const db = new DB()

type LabelPropsWithDelete = Omit<LabelProps, 'onClick'> & {
  setLabels: (labels: Label[]) => void
}

const LabelComp = ({ labelName, id, setLabels }: LabelPropsWithDelete) => {
  const [clicked, toggleClicked] = useToggle()
  const labelRef = useRef<HTMLDivElement>(null)

  const deleteLabel = () => {
    id && db.deleteLabel(id)
    setLabels(db.getLabels())
  }

  //TODO: refactorize
  // add renaming for tags

  return (
    <>
      {clicked && (
        <ActionButtonWrapper
          style={{
            maxWidth:
              labelRef.current?.offsetWidth &&
              labelRef.current?.offsetWidth - SPACING_MID,
            width:
              labelRef.current?.offsetWidth &&
              labelRef.current?.offsetWidth - SPACING_MID,
            height: labelRef.current?.offsetHeight,
          }}
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
      <div
        ref={labelRef}
        style={{
          opacity: clicked ? 0 : 1,
          position: clicked ? 'absolute' : 'static',
          zIndex: clicked ? -999 : 'unset',
        }}
      >
        <LabelItem {...{ labelName, id }} key={id} onClick={toggleClicked} />
      </div>
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
