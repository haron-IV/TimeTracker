import { TIME_ENTRY_SECTION_HEIGHT } from 'config'
import { ErrorIndicator } from 'shared/components'
import { LabelsContext } from 'shared/utils'
import styled from 'styled-components'
import {
  AddEntryButton,
  EntryDescriptionField,
  EntryTimeField,
  Labels,
} from '../index'
import {
  useFieldValues,
  useOnAdd,
  useToggleLabel,
  useUpdateLabels,
} from './TimeEntrySection.utils'

const Section = styled('section')({
  display: 'flex',
  justifyContent: 'space-between',
  height: TIME_ENTRY_SECTION_HEIGHT,
})

const TimeEntrySection = () => {
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
  const { onEntryAdd, errors } = useOnAdd({
    timeEntryDescription,
    selectedLabels,
    entryTimeHours,
    entryTimeMinutes,
  })

  const { updateLabels, setUpdateLabels } = useUpdateLabels(setLabels)

  return (
    <Section>
      <div>
        <EntryDescriptionField
          value={timeEntryDescription}
          onChange={setTimeEntryDescription}
        />
        <ErrorIndicator error={errors?.timeEntryDescription}>
          {errors?.timeEntryDescription}
        </ErrorIndicator>
      </div>
      <LabelsContext.Provider value={{ updateLabels, setUpdateLabels }}>
        <Labels
          labels={labels}
          selectedLabels={selectedLabels}
          onClick={toggleLabel}
        />
      </LabelsContext.Provider>
      <div>
        <EntryTimeField
          hours={entryTimeHours}
          minutes={entryTimeMinutes}
          setHours={setEntryTimeHours}
          setMinutes={setEntryTimeMinutes}
        />
        <ErrorIndicator error={errors?.timeEntry}>
          {errors?.timeEntry}
        </ErrorIndicator>
      </div>
      <AddEntryButton onClick={onEntryAdd} />
    </Section>
  )
}

export default TimeEntrySection
