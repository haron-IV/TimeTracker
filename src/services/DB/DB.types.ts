export interface TimeEntry {
  timeEntryDescription: string
  selectedLabels: string[]
  entryTimeHours: number
  entryTimeMinutes: number
  id: string
}

export type AddTimeEntryParams = Omit<TimeEntry, 'id'>
