import { DB_NAME } from '../../config'
import { DB_SCHEMA } from '../../config/DBSchema'

class DBUtils {
  DBExist = () => !!localStorage.getItem(DB_NAME)
  initDB = () => localStorage.setItem(DB_NAME, JSON.stringify(DB_SCHEMA))
  getDB = () => (this.DBExist() ? localStorage.getItem(DB_NAME) : null)
}

export default DBUtils
