import { PropsWithChildren, useEffect } from 'react'
import styled from 'styled-components'
import {
  AddEntryButton,
  EntryDescriptionField,
  EntryTimeField,
  Labels,
} from '..'
import { useTimeEntrySection } from './TimeEntrySection.utils'
import { MOCK_LABELS } from 'shared/mocks'
import { ID } from 'shared/types'

const Section = styled('section')({
  display: 'flex',
  justifyContent: 'space-between',
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
  } = useTimeEntrySection()

  const toggleLabel = (id: ID) => {
    if (selectedLabels.includes(id))
      setSelectedLabels(selectedLabels =>
        selectedLabels.filter(item => item !== id)
      )
    else setSelectedLabels(selectedLabels => [...selectedLabels, id])
  }

  useEffect(() => {
    setLabels(MOCK_LABELS)
  }, [])

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
      <AddEntryButton />
    </Section>
  )
}

export default TimeEntrySection
