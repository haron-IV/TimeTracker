import { memo, useCallback, useContext } from 'react'
import { ID, Label } from 'shared/types'
import { LabelsContext } from 'shared/utils'
import { AddNewLabel, LabelItem } from './AddNewLabel'
import { LabelWrapper } from './Labels.style'

interface LabelsProps {
  labels?: Label[]
  onClick?: (id: ID) => void
  selectedLabels?: ID[]
}

const Labels = ({ labels, onClick, selectedLabels }: LabelsProps) => {
  const ctx = useContext(LabelsContext)

  const isLabelSelected = useCallback(
    (id: ID) => !!selectedLabels?.includes(id),
    [selectedLabels]
  )

  return (
    <LabelWrapper>
      {labels?.map(({ id, name }) => (
        <LabelItem
          labelName={name}
          key={id}
          id={id}
          onClick={() => onClick && onClick(id)}
          active={isLabelSelected(id)}
        />
      ))}
      <AddNewLabel onAdd={ctx?.setUpdateLabels} />
    </LabelWrapper>
  )
}

export default memo(Labels)
