import { DB_NAME } from '../../config'
import DBUtils from './DBUtils'

class DB extends DBUtils {
  dbName = DB_NAME
  constructor() {
    super()
    if (!this.DBExist()) this.initDB()
  }
}

export default DB
