import { AddTimeEntryParams } from './DB.types'
import { DB_NAME } from '../../config'
import DBUtils from './DBUtils'
import { ID } from 'shared/types'

class DB extends DBUtils {
  dbName = DB_NAME
  constructor() {
    super()
    if (!this.DBExist()) this.initDB()
  }

  addTimeEntry = (timeEntry: AddTimeEntryParams) => {
    const db = this.getDB()
    const { dateString } = DB.getDate()
    const timeEntries = [
      ...db.timeEntries,
      { ...timeEntry, id: this.UUID(), date: dateString },
    ]
    const updatedDB = { ...db, timeEntries }
    this.saveDB(updatedDB)
  }

  getTimeEntries = () => {
    const { timeEntries } = this.getDB()

    return timeEntries
  }

  deleteTimeEntry = (id: ID) => {
    const db = this.getDB()
    const filteredEntries = db.timeEntries.filter(entry => entry.id !== id)
    const updatedDB = { ...db, timeEntries: filteredEntries }
    this.saveDB(updatedDB)
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

  deleteLabel = (id: ID) => {
    const db = this.getDB()
    const filteredLabels = db.cfg.labels.filter(
      ({ id: labelID }) => labelID !== id
    )
    const updatedDB = { ...db, cfg: { ...db.cfg, labels: filteredLabels } }
    this.saveDB(updatedDB)
  }

  editLabel = (newName: string, id: ID) => {
    const db = this.getDB()
    const editedLabels = db.cfg.labels.map(label =>
      label.id === id ? { id, name: newName } : label
    )
    const updatedDB = { ...db, cfg: { ...db.cfg, labels: editedLabels } }
    this.saveDB(updatedDB)
  }
}

export default DB
