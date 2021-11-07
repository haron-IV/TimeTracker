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
    const timeEntries = [...db.timeEntries, { ...timeEntry, id: this.UUID() }]
    const updatedDB = { ...db, timeEntries }
    this.saveDB(updatedDB)
  }
}

export default DB
