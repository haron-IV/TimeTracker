import { ErrorIndicator } from 'shared/components'
import { setTimeFunc } from 'shared/types'
import { HOURS_LIMIT, MINUTES_LIMIT } from '../../config'
import { useEntryTimeField } from './EntryTime.utils'
import {
  FieldWrapper,
  Form,
  TimeField,
  TimeLabel,
} from './EntryTimeField.style'

interface EntryTimeFieldProps {
  hours: number
  minutes: number
  setHours?: setTimeFunc
  setMinutes?: setTimeFunc
}

const EntryTimeField = ({
  hours,
  minutes,
  setHours,
  setMinutes,
}: EntryTimeFieldProps) => {
  const { error, handleChange } = useEntryTimeField()

  return (
    <Form>
      <FieldWrapper>
        <TimeLabel visible={!!hours}>Hours</TimeLabel>
        <TimeField
          name="hours"
          placeholder="hours"
          type="number"
          value={hours || ''}
          onChange={e => handleChange(e.target.value, HOURS_LIMIT, setHours)}
          max={HOURS_LIMIT}
          error={error.hours}
        />
        <ErrorIndicator error={error.hours}>{error.hours}</ErrorIndicator>
      </FieldWrapper>

      <FieldWrapper>
        <TimeLabel visible={!!minutes}>Minutes</TimeLabel>
        <TimeField
          name="minutes"
          placeholder="minutes"
          type="number"
          value={minutes || ''}
          onChange={e =>
            handleChange(e.target.value, MINUTES_LIMIT, setMinutes)
          }
          error={error.minutes}
        />
        <ErrorIndicator error={error.minutes}>{error.minutes}</ErrorIndicator>
      </FieldWrapper>
    </Form>
  )
}

export default EntryTimeField
