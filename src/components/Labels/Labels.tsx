import { memo, useCallback, useContext } from 'react'
import { ID, Label } from 'shared/types'
import { LabelsContext } from 'shared/utils'
import { AddNewLabel, LabelItem } from './AddNewLabel'
import { LabelWrapper } from './Labels.style'

interface LabelsProps {
  labels?: Label[]
  onClick?: (id: ID) => void
  selectedLabels?: ID[]
  disabled?: boolean
}

const Labels = ({
  labels,
  onClick,
  selectedLabels,
  disabled = false,
}: LabelsProps) => {
  const ctx = useContext(LabelsContext)

  const isLabelSelected = useCallback(
    (id: ID) => !!selectedLabels?.includes(id),
    [selectedLabels]
  )

  console.log('disabled', disabled)

  return (
    <LabelWrapper disabled={disabled}>
      {labels?.map(({ id, name }) => (
        <LabelItem
          labelName={name}
          key={id}
          id={id}
          onClick={() => !disabled && onClick?.(id)}
          active={isLabelSelected(id)}
        />
      ))}
      <AddNewLabel onAdd={!disabled ? ctx?.setUpdateLabels : undefined} />
    </LabelWrapper>
  )
}

export default memo(Labels)
