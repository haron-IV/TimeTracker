import { validation } from 'config'
import { useCallback, useContext, useEffect, useRef, useState } from 'react'
import { DB } from 'services'
import { ID, Label } from 'shared/types'
import { EntryListContext } from 'shared/utils'

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
  const [labels, setLabels] = useState<Label[]>(db.getLabels())
  const [selectedLabels, setSelectedLabels] = useState<SelectedLabels>([])
  const [entryTimeHours, setEntryTimeHours] = useState(0)
  const [entryTimeMinutes, setEntryTimeMinutes] = useState(0)

  return {
    timeEntryDescription,
    setTimeEntryDescription,
    labels,
    setLabels,
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

interface Errors {
  timeEntryDescription?: string
  timeEntry?: string
}

export const useOnAdd = (props: UseOnAddProps) => {
  const ctx = useContext(EntryListContext)
  const [errors, setErrors] = useState<Errors>({
    timeEntryDescription: undefined,
    timeEntry: undefined,
  })

  //TODO: refactorize it -- do it better it doesn't work correctly
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
  }, [props.timeEntryDescription, props.entryTimeHours, props.entryTimeMinutes])

  return {
    onEntryAdd: () => {
      validate()
      if (errors && (errors.timeEntry || errors.timeEntryDescription)) return
      ctx?.setUpdateEntryList(true)
      db.addTimeEntry(props)
    },
    errors,
  }
}

export const useUpdateLabels = (setLabels: (labels: Label[]) => void) => {
  const [updateLabels, setUpdateLabels] = useState(false)

  useEffect(() => {
    if (updateLabels) setLabels(db.getLabels())
    setUpdateLabels(false)
  }, [updateLabels, setLabels])

  return { updateLabels, setUpdateLabels }
}
