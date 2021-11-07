import { TimeEntry } from 'services/DB'

export const DB_SCHEMA = {
  cfg: {
    labels: [],
  },
  timeEntries: [],
}

export type DBSchema = {
  cfg: {
    labels: string[]
  }
  timeEntries: TimeEntry[]
}
