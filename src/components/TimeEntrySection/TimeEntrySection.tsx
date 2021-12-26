import styled from 'styled-components'
import { useEffect, useState } from 'react'
import {
  ENTRY_DESCRIPTION_FIELD_HEIGHT,
  ENTRY_DESCRIPTION_FIELD_WIDTH,
  TIME_ENTRY_SECTION_HEIGHT,
} from 'config'
import { ErrorIndicator, TextArea } from 'shared/components'
import { AddEntryButton, EntryTimeField, Labels } from '../index'
import {
  useFieldValues,
  useOnAdd,
  useToggleLabel,
  useUpdateLabels,
} from './TimeEntrySection.utils'
import { DB } from 'services'
import { ChangeEvent } from 'shared/types'

const db = new DB()

const Section = styled('section')({
  display: 'flex',
  justifyContent: 'space-between',
  height: TIME_ENTRY_SECTION_HEIGHT,
})

interface TimeEntrySectionProps {
  updateEntryList: boolean
}

const TimeEntrySection = ({ updateEntryList }: TimeEntrySectionProps) => {
  const {
    timeEntryDescription,
    setTimeEntryDescription,
    selectedLabels,
    setSelectedLabels,
    entryTimeHours,
    setEntryTimeHours,
    entryTimeMinutes,
    setEntryTimeMinutes,
  } = useFieldValues()

  const toggleLabel = useToggleLabel(selectedLabels, setSelectedLabels)
  const { onEntryAdd, errors } = useOnAdd({
    timeEntryDescription,
    selectedLabels,
    entryTimeHours,
    entryTimeMinutes,
  })

  useEffect(() => {
    if (!updateEntryList) return
    setTimeEntryDescription('')
    setSelectedLabels([])
    setEntryTimeMinutes(0)
    setEntryTimeHours(0)
  }, [
    updateEntryList,
    setTimeEntryDescription,
    setSelectedLabels,
    setEntryTimeMinutes,
    setEntryTimeHours,
  ])
  const [labels, setLabels] = useState(db.getLabels())
  useUpdateLabels(setLabels)
  const handleChange = (e: ChangeEvent<string>) => {
    setTimeEntryDescription(e.target.value)
  }

  return (
    <Section>
      <div>
        <TextArea
          width={ENTRY_DESCRIPTION_FIELD_WIDTH}
          height={ENTRY_DESCRIPTION_FIELD_HEIGHT}
          color="primary"
          value={timeEntryDescription}
          onChange={handleChange}
          error={errors.timeEntryDescription}
        />
      </div>

      <Labels
        labels={labels}
        selectedLabels={selectedLabels}
        onClick={toggleLabel}
      />

      <EntryTimeField
        hours={entryTimeHours}
        minutes={entryTimeMinutes}
        setHours={setEntryTimeHours}
        setMinutes={setEntryTimeMinutes}
      />
      <ErrorIndicator error={errors?.timeEntry}>
        {errors?.timeEntry}
      </ErrorIndicator>

      <AddEntryButton onClick={onEntryAdd} />
    </Section>
  )
}

export default TimeEntrySection
