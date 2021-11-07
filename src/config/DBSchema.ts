import { Label } from 'components/TimeEntrySection/TimeEntrySection.utils' //TODO: it should be shared as well
import { TimeEntry } from 'services/DB'

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
