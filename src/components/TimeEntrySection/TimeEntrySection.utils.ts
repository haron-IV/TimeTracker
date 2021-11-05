import { useState } from 'react'
import { ID } from 'shared/types'

export interface Label {
  id: ID
  name: string
}

export const useTimeEntrySection = () => {
  const [timeEntryDescription, setTimeEntryDescription] = useState('')
  const [labels, setLabels] = useState<Label[]>()
  const [selectedLabels, setSelectedLabels] = useState<Label['id'][]>([])
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
