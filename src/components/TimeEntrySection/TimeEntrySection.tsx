import { PropsWithChildren, useEffect } from 'react'
import styled from 'styled-components'
import {
  AddEntryButton,
  EntryDescriptionField,
  EntryTimeField,
  Labels,
} from '..'
import {
  useFieldValues,
  useOnAdd,
  useTimeEntrySection,
  useToggleLabel,
} from './TimeEntrySection.utils'
import { MOCK_LABELS } from 'shared/mocks'
import { ID } from 'shared/types'
import { TIME_ENTRY_SECTION_HEIGHT } from 'config'

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

  return (
    <Section>
      <EntryDescriptionField
        value={timeEntryDescription}
        onChange={setTimeEntryDescription}
      />
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
      <AddEntryButton onClick={onAddEntry} />
    </Section>
  )
}

export default TimeEntrySection
