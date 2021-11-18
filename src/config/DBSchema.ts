import { TimeEntry } from 'services/DB'
import { Label } from 'shared/types'

export const DB_SCHEMA = {
  cfg: {
    labels: [],
  },
  timeEntries: [],
}

export type DBSchema = {
  cfg: {
    labels: Label[]
  }
  timeEntries: TimeEntry[]
}
