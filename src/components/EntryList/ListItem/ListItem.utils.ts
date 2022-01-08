import { TIME_MULTIPLY_RATIO } from 'config'
import { useContext } from 'react'
import { DB } from 'services'
import { ID, Label } from 'shared/types'
import { EditEntryContext, EntryListContext } from 'shared/utils'

const db = new DB()

export const calculateTimeEntry = (hours: number, minutes: number) => {
  const scaledTime = Math.round(minutes / TIME_MULTIPLY_RATIO)

  return `${hours}.${scaledTime}`
}

export const getSelectedLabels = (
  labels: Label[],
  selectedLabels: string[]
) => {
  const filteredLabels: string[] = []
  for (const { id } of labels) {
    const label = selectedLabels.find(selectedLabelId => selectedLabelId === id)
    label && filteredLabels.push(label)
  }

  return filteredLabels
}

export const useEdit = (id: ID) => {
  const { setEditing, editing } = useContext(EditEntryContext) || {}
  const toggleEditing = () => {
    setEditing?.(id)
    if (editing === id) setEditing?.(null)
  }
  const disabled = id !== editing

  return { toggleEditing, disabled }
}

export const useDeleteEntry = (id: ID) => {
  const { setUpdateEntryList } = useContext(EntryListContext) || {}

  return () => {
    db.deleteTimeEntry(id)
    setUpdateEntryList?.(true)
  }
}
