import { useContext, useEffect, useState } from 'react'
import { DB, TimeEntry, DBUtils } from 'services'
import { addLeadingZero, EntryListContext } from 'shared/utils'
import { getScaledMinutes } from 'shared/utils/helpers'

const db = new DB()

const getEntriesFromDay = (timeEntryItems: TimeEntry[], date: string) =>
  timeEntryItems.filter(({ date: d }) => d === date)

const sumUpEntriesTime = (entries: TimeEntry[], scaled: boolean = false) =>
  entries.reduce(
    (acc, curr) => {
      let hours = `${Number(acc.hours) + curr.entryTimeHours}`
      let minutes = `${Number(acc.minutes) + curr.entryTimeMinutes}`

      if (Number(minutes) >= 60) {
        hours = `${Number(hours) + 1}`
        const restMinutes = scaled
          ? getScaledMinutes(Number(minutes) % 60)
          : Number(minutes) % 60
        minutes = `${addLeadingZero(restMinutes)}`
      }

      return {
        hours,
        minutes,
      }
    },
    { hours: '', minutes: '' }
  )

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

export const useChangeDate = (
  setDateFunc: (date: string) => void,
  currentDate: string
) => {
  return (incrementValue: number) => {
    const {
      dateObj: { day, month, year },
    } = DBUtils.getDate(currentDate)

    setDateFunc(`${year}-${month}-${addLeadingZero(day + incrementValue)}`)
  }
}
