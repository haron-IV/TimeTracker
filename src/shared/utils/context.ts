import { createContext, Dispatch, SetStateAction } from 'react'
import { TimeEntry } from 'services'

interface EntryListContextProps {
  updateEntryList: boolean
  setUpdateEntryList: Dispatch<SetStateAction<boolean>>
}
export const EntryListContext = createContext<EntryListContextProps | null>(
  null
)

interface LabelsContextProps {
  updateLabels: boolean
  setUpdateLabels: Dispatch<SetStateAction<boolean>>
}
export const LabelsContext = createContext<LabelsContextProps | null>(null)

interface EditEntryContextProps {
  editing: TimeEntry['id'] | null
  setEditing: Dispatch<SetStateAction<TimeEntry['id'] | null>>
}
export const EditEntryContext = createContext<EditEntryContextProps | null>(
  null
)
