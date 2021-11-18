import { ID } from 'shared/types'

export interface TimeEntry {
  timeEntryDescription: string
  selectedLabels: string[]
  entryTimeHours: number
  entryTimeMinutes: number
  id: ID
  date: string
}

export type AddTimeEntryParams = Omit<TimeEntry, 'id' | 'date'>
