import { createContext } from 'react'

export const EntryListContext = createContext<{
  updateEntryList: boolean
  setUpdateEntryList: React.Dispatch<React.SetStateAction<boolean>>
} | null>(null)

export const LabelsContext = createContext<{
  updateLabels: boolean
  setUpdateLabels: React.Dispatch<React.SetStateAction<boolean>>
} | null>(null)
