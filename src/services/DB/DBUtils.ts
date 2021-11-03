import { DB_NAME } from '../../config'
import { DB_SCHEMA } from '../../config'

const DB_AVAILABILITY = 5120

//TODO: move to utils
const toPercentage = (value: number, from: number) =>
  Number(((value / from) * 100).toFixed(2))

class DBUtils {
  DBExist = () => !!localStorage.getItem(DB_NAME)
  initDB = () => localStorage.setItem(DB_NAME, JSON.stringify(DB_SCHEMA))
  getDB = () => (this.DBExist() ? localStorage.getItem(DB_NAME) : null)
  getDbSpace = () => {
    const data = this.getDB()
    const memoryUsed = data
      ? Number(((data.length * 16) / (8 * 1024)).toFixed(2))
      : 0
    const spaceLeft = data && memoryUsed ? DB_AVAILABILITY - memoryUsed : 0

    const dbSpace = {
      used: {
        kb: `${memoryUsed} KB`,
        percentage: `${toPercentage(memoryUsed, DB_AVAILABILITY)}%`,
      },
      left: {
        kb: `${spaceLeft} KB`,
        percentage: `${toPercentage(spaceLeft, DB_AVAILABILITY)}%`,
      },
    }

    return dbSpace
  }
}

export default DBUtils
