import { useContext, useEffect, useState } from 'react'
import { DB, TimeEntry, DBUtils } from 'services'
import {
  EntryListContext,
  addLeadingZero,
  daysInMonth,
  getScaledMinutes,
} from 'shared/utils'

const db = new DB()

const getEntriesFromDay = (timeEntryItems: TimeEntry[], date: string) =>
  timeEntryItems.filter(({ date: d }) => d === date)

export const useEntryList = (date?: string) => {
  const ctx = useContext(EntryListContext)
  const [timeEntryItems, setTimeEntryItems] = useState(db.getTimeEntries())
  const [targetDate, setTargetDate] = useState(date || DB.getDate().dateString)
  const labels = db.getLabels()

  useEffect(() => {
    if (!ctx?.updateEntryList) return
    setTimeEntryItems(db.getTimeEntries())
    ctx.setUpdateEntryList(false)
  }, [ctx?.updateEntryList])

  const entriesFromDay = getEntriesFromDay(timeEntryItems, targetDate)
  const summedTimeFromDay = sumUpEntriesTime(entriesFromDay)
  const summedTimeFromDayScaled = sumUpEntriesTime(entriesFromDay, true)

  return {
    entriesFromDay,
    labels,
    targetDate,
    summedTimeFromDay,
    summedTimeFromDayScaled,
    setTargetDate,
  }
}
const sumUpEntriesTime = (entries: TimeEntry[], scaled: boolean = false) => {
  const { hours, minutes } = entries.reduce(
    (acc, curr) => {
      let hours = acc.hours + curr.entryTimeHours
      let minutes = acc.minutes + curr.entryTimeMinutes

      if (minutes >= 60) {
        hours++
        const restMinutes = minutes % 60
        minutes = restMinutes
      }

      return { hours, minutes }
    },
    { hours: 0, minutes: 0 }
  )

  return scaled
    ? {
        hours: addLeadingZero(hours),
        minutes: addLeadingZero(Number(`${getScaledMinutes(minutes)}`)),
      }
    : {
        hours: addLeadingZero(hours),
        minutes: addLeadingZero(minutes),
      }
}

export const useChangeDate = (
  setDateFunc: (date: string) => void,
  currentDate: string
) => {
  return (incrementValue: number) => {
    const {
      dateObj: { day, month, year },
    } = DBUtils.getDate(currentDate)
    const daysOfMonth = daysInMonth(month, year)
    let date = ''

    switch (true) {
      case day === 1 && month !== 1 && incrementValue < 0: {
        date = `${year}-${addLeadingZero(month - 1)}-${addLeadingZero(
          daysInMonth(month - 1, year)
        )}`
        break
      }
      case day >= daysOfMonth && month !== 12 && incrementValue > 0: {
        date = `${year}-${addLeadingZero(month + 1)}-01`
        break
      }
      case day === daysInMonth(12, year) &&
        month === 12 &&
        incrementValue < 0: {
        date = `${year}-12-${day - 1}`
        break
      }
      case day === daysInMonth(12, year) &&
        month === 12 &&
        incrementValue > 0: {
        date = `${year + 1}-01-01`
        break
      }
      case day === 1 && month === 1 && incrementValue < 0: {
        date = `${year - 1}-12-${daysInMonth(12, year - 1)}`
        break
      }
      default: {
        date = `${year}-${addLeadingZero(month)}-${addLeadingZero(
          day + incrementValue
        )}`
      }
    }

    setDateFunc(date)
  }
}
