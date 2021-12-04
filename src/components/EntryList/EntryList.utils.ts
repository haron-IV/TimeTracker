import { useContext, useEffect, useState } from 'react'
import { DB, TimeEntry, DBUtils } from 'services'
import { addLeadingZero, EntryListContext } from 'shared/utils'

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

  return { entriesFromDay, labels, targetDate, setTargetDate }
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
