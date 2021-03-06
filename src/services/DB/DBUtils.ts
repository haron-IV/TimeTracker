import { SpaceInfo } from 'shared/types'
import { addLeadingZero, toPercentage } from 'shared/utils'
import { DB_SCHEMA, DBSchema, DB_NAME } from '../../config'

const DB_AVAILABILITY = 5120

class DBUtils {
  DBExist = () => !!localStorage.getItem(DB_NAME)
  initDB = () => localStorage.setItem(DB_NAME, JSON.stringify(DB_SCHEMA))
  getDB = (): DBSchema =>
    JSON.parse(this.DBExist() ? localStorage.getItem(DB_NAME) || '{}' : '{}')
  saveDB = (db: DBSchema) => {
    const dbString = JSON.stringify(db)
    localStorage.setItem(DB_NAME, dbString)
  }
  static getDate = (date?: string) => {
    const d = date ? new Date(date) : new Date()
    const year = d.getFullYear()
    const month = d.getMonth() + 1
    const day = d.getDate()
    const dateString = `${year}-${addLeadingZero(month)}-${addLeadingZero(day)}`
    const dateObj = { year, month, day }

    return { dateString, dateObj }
  }

  getDbSpace = (): SpaceInfo => {
    const data = JSON.stringify(this.getDB())
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

  UUID = () => {
    const baseString = '000'
    const getPart = () =>
      baseString + ((Math.random() * 46656) | 0).toString(36).slice(-3)
    const partOne = getPart()
    const partTwo = getPart()

    return `${partOne}${partTwo}`
  }
}

export default DBUtils
