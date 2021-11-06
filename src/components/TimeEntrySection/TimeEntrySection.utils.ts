import { useCallback, useState } from 'react'
import { ID } from 'shared/types'

export interface Label {
  id: ID
  name: string
}

type SelectedLabels = Label['id'][]

export const useToggleLabel = (
  selectedLabels: SelectedLabels,
  setSelectedLabels: React.Dispatch<React.SetStateAction<SelectedLabels>>
) =>
  useCallback(
    (id: ID) => {
      if (selectedLabels.includes(id))
        setSelectedLabels(selectedLabels =>
          selectedLabels.filter(item => item !== id)
        )
      else setSelectedLabels(selectedLabels => [...selectedLabels, id])
    },
    [selectedLabels, setSelectedLabels]
  )

export const useTimeEntrySection = () => {}

export const useFieldValues = () => {
  const [timeEntryDescription, setTimeEntryDescription] = useState('')
  const [labels, setLabels] = useState<Label[]>()
  const [selectedLabels, setSelectedLabels] = useState<SelectedLabels>([])
  const [entryTimeHours, setEntryTimeHours] = useState(0)
  const [entryTimeMinutes, setEntryTimeMinutes] = useState(0)

  return {
    timeEntryDescription,
    setTimeEntryDescription,
    labels,
    setLabels,
    selectedLabels,
    setSelectedLabels,
    entryTimeHours,
    setEntryTimeHours,
    entryTimeMinutes,
    setEntryTimeMinutes,
  }
}
