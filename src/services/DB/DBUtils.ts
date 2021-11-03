import { DB_NAME } from '../../config'
import { DB_SCHEMA } from '../../config'

class DBUtils {
  DBExist = () => !!localStorage.getItem(DB_NAME)
  initDB = () => localStorage.setItem(DB_NAME, JSON.stringify(DB_SCHEMA))
  getDB = () => (this.DBExist() ? localStorage.getItem(DB_NAME) : null)
  getDbSpace = () => {
    const data = this.getDB()
    const memoryUsed =
      data && Number(((data.length * 16) / (8 * 1024)).toFixed(2))
    const spaceLeft = data && `${memoryUsed ? 5120 - memoryUsed : '5MB'}`

    return { memoryUsed, spaceLeft }
  }
}

export default DBUtils
