import { useContext, useEffect, useState } from 'react'
import { DB } from 'services'
import { TimeEntry } from 'services/DB'
import { EntryListContext } from 'shared/utils'

const db = new DB()

const getEntriesFromDay = (timeEntryItems: TimeEntry[], date: string) =>
  timeEntryItems.filter(({ date: d }) => d === date)

export const useEntryList = (date?: string) => {
  const ctx = useContext(EntryListContext)
  const [timeEntryItems, setTimeEntryItems] = useState(db.getTimeEntries())
  const [targetDate, setTargetDate] = useState(date || DB.getDate())
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
  const date = new Date(currentDate)

  return (incrementValue: number) => {
    const targetDate = `${date.getFullYear()}-${date.getMonth() + 1}-${
      date.getDate() + incrementValue
    }` //TODO: similar pattern is in DButils - make it reusable
    setDateFunc(targetDate)
  }
}
