import { AddTimeEntryParams } from './DB.types'
import { DB_NAME } from '../../config'
import DBUtils from './DBUtils'

class DB extends DBUtils {
  dbName = DB_NAME
  constructor() {
    super()
    if (!this.DBExist()) this.initDB()
  }

  addTimeEntry = (timeEntry: AddTimeEntryParams) => {
    const db = this.getDB()
    const date = this.getDate()
    const timeEntries = [
      ...db.timeEntries,
      { ...timeEntry, id: this.UUID(), date },
    ]
    const updatedDB = { ...db, timeEntries }
    this.saveDB(updatedDB)
  }

  getTimeEntries = () => {
    const { timeEntries } = this.getDB()

    return timeEntries
  }

  getLabels = () => {
    const {
      cfg: { labels },
    } = this.getDB()

    return labels
  }

  addNewLabel = (name: string) => {
    const db = this.getDB()
    const labels = [...db.cfg.labels, { id: this.UUID(), name }]
    const updatedDB = { ...db, cfg: { ...db.cfg, labels } }
    this.saveDB(updatedDB)
  }
}

export default DB
