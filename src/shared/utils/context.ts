import { createContext, Dispatch, SetStateAction } from 'react'

export const EntryListContext = createContext<{
  updateEntryList: boolean
  setUpdateEntryList: Dispatch<SetStateAction<boolean>>
} | null>(null)

export const LabelsContext = createContext<{
  updateLabels: boolean
  setUpdateLabels: Dispatch<SetStateAction<boolean>>
} | null>(null)
