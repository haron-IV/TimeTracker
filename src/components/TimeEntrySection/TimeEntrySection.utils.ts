import { useCallback, useContext, useEffect, useState } from 'react'
import { DB } from 'services'
import { ID, Label } from 'shared/types'
import { EntryListContext } from 'shared/utils'

const db = new DB()

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

export const useFieldValues = () => {
  const [timeEntryDescription, setTimeEntryDescription] = useState('')
  const [labels, setLabels] = useState<Label[]>(db.getLabels())
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

interface UseOnAddProps {
  timeEntryDescription: string
  selectedLabels: SelectedLabels
  entryTimeHours: number
  entryTimeMinutes: number
}
export const useOnAdd = (props: UseOnAddProps) => {
  const ctx = useContext(EntryListContext)

  return () => {
    ctx?.setUpdateEntryList(true)
    db.addTimeEntry(props)
  }
}

export const useUpdateLabels = (setLabels: (labels: Label[]) => void) => {
  const [updateLabels, setUpdateLabels] = useState(false)

  useEffect(() => {
    if (updateLabels) setLabels(db.getLabels())
    setUpdateLabels(false)
  }, [updateLabels, setLabels])

  return { updateLabels, setUpdateLabels }
}
