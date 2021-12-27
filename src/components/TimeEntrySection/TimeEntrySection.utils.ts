import { validation } from 'config'
import { useCallback, useContext, useEffect, useRef, useState } from 'react'
import { DB } from 'services'
import { ID, Label, TimeEntryErrors } from 'shared/types'
import { EntryListContext, LabelsContext } from 'shared/utils'

const db = new DB()

type SelectedLabels = Label['id'][]

export const useToggleLabel = (
  selectedLabels: SelectedLabels,
  setSelectedLabels: React.Dispatch<React.SetStateAction<SelectedLabels>>
) =>
  useCallback(
    (id: ID) => {
      if (selectedLabels.includes(id))
        setSelectedLabels(selectedLabels =>
          selectedLabels.filter(item => item !== id)
        )
      else setSelectedLabels(selectedLabels => [...selectedLabels, id])
    },
    [selectedLabels, setSelectedLabels]
  )

export const useFieldValues = () => {
  const [timeEntryDescription, setTimeEntryDescription] = useState('')
  const [selectedLabels, setSelectedLabels] = useState<SelectedLabels>([])
  const [entryTimeHours, setEntryTimeHours] = useState(0)
  const [entryTimeMinutes, setEntryTimeMinutes] = useState(0)

  return {
    timeEntryDescription,
    setTimeEntryDescription,
    selectedLabels,
    setSelectedLabels,
    entryTimeHours,
    setEntryTimeHours,
    entryTimeMinutes,
    setEntryTimeMinutes,
  }
}

interface UseOnAddProps {
  timeEntryDescription: string
  selectedLabels: SelectedLabels
  entryTimeHours: number
  entryTimeMinutes: number
}

const initialErrorsState = {
  timeEntryDescription: undefined,
  timeEntry: undefined,
}

export const useOnAdd = (props: UseOnAddProps) => {
  const ctx = useContext(EntryListContext)
  const [errors, setErrors] = useState<TimeEntryErrors>(initialErrorsState)

  const validate = () => {
    if (!props.timeEntryDescription)
      setErrors(err => ({
        ...err,
        timeEntryDescription: validation.emptyTimeEntryDescription,
      }))
    else
      setErrors(err => ({
        ...err,
        timeEntryDescription: undefined,
      }))
    if (!props.entryTimeHours && !props.entryTimeMinutes)
      setErrors(err => ({
        ...err,
        timeEntry: validation.emptyEntryTime,
      }))
    else
      setErrors(err => ({
        ...err,
        timeEntry: undefined,
      }))
  }

  const initial = useRef(true)

  useEffect(() => {
    !initial.current && validate()
    initial.current = false
  }, [props.entryTimeHours, props.entryTimeMinutes, props.timeEntryDescription])

  return {
    onEntryAdd: () => {
      if (errors && (errors.timeEntry || errors.timeEntryDescription)) return
      ctx?.setUpdateEntryList(true)
      db.addTimeEntry(props)
      setErrors(initialErrorsState)
    },
    errors: errors,
  }
}

export const useUpdateLabels = (setLabels: (labels: Label[]) => void) => {
  const { updateLabels, setUpdateLabels } = useContext(LabelsContext) || {}

  useEffect(() => {
    if (updateLabels) {
      setLabels(db.getLabels())
      setUpdateLabels?.(false)
    }
  }, [updateLabels])
}
