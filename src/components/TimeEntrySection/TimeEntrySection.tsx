import { PropsWithChildren, useEffect, useState } from 'react'
import styled from 'styled-components'
import {
  AddEntryButton,
  EntryDescriptionField,
  EntryTimeField,
  Labels,
} from '..'
import {
  LabelsContext,
  useFieldValues,
  useOnAdd,
  useTimeEntrySection,
  useToggleLabel,
} from './TimeEntrySection.utils'
import { MOCK_LABELS } from 'shared/mocks'
import { ID } from 'shared/types'
import { TIME_ENTRY_SECTION_HEIGHT } from 'config'
import { DB } from 'services'

const db = new DB()

const Section = styled('section')({
  display: 'flex',
  justifyContent: 'space-between',
  height: TIME_ENTRY_SECTION_HEIGHT,
})

// TODO: refactorize

interface TimeEntrySectionProps extends PropsWithChildren<{}> {}

const TimeEntrySection = ({ children }: TimeEntrySectionProps) => {
  const {
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
  } = useFieldValues()

  const toggleLabel = useToggleLabel(selectedLabels, setSelectedLabels)
  const onAddEntry = useOnAdd({
    timeEntryDescription,
    selectedLabels,
    entryTimeHours,
    entryTimeMinutes,
  })
  const [updateLabels, setUpdateLabels] = useState(false)

  useEffect(() => {
    if (updateLabels) setLabels(db.getLabels())
    setUpdateLabels(false)
  }, [updateLabels])

  return (
    <Section>
      <EntryDescriptionField
        value={timeEntryDescription}
        onChange={setTimeEntryDescription}
      />
      <LabelsContext.Provider value={{ updateLabels, setUpdateLabels }}>
        <Labels
          labels={labels}
          selectedLabels={selectedLabels}
          onClick={toggleLabel}
        />
      </LabelsContext.Provider>
      <EntryTimeField
        hours={entryTimeHours}
        minutes={entryTimeMinutes}
        setHours={setEntryTimeHours}
        setMinutes={setEntryTimeMinutes}
      />
      <AddEntryButton onClick={onAddEntry} />
    </Section>
  )
}

export default TimeEntrySection
