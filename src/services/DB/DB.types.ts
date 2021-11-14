export interface TimeEntry {
  timeEntryDescription: string
  selectedLabels: string[]
  entryTimeHours: number
  entryTimeMinutes: number
  id: string
  date: string
}

export type AddTimeEntryParams = Omit<TimeEntry, 'id' | 'date'>
