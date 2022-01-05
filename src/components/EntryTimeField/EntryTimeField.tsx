import { setTimeFunc } from 'shared/types'
import { HOURS_LIMIT, MINUTES_LIMIT } from '../../config'
import { useEntryTimeField } from './EntryTime.utils'
import { Form, Input } from './EntryTimeField.style'

interface EntryTimeFieldProps {
  hours: number
  minutes: number
  setHours?: setTimeFunc
  setMinutes?: setTimeFunc
  disabled?: boolean
}

const EntryTimeField = ({
  hours,
  minutes,
  setHours,
  setMinutes,
  disabled = false,
}: EntryTimeFieldProps) => {
  const { error, handleChange } = useEntryTimeField()

  return (
    <Form>
      <Input
        color="primary"
        name="hours"
        placeholder="hours"
        type="number"
        value={hours || ''}
        onChange={e => handleChange(e.target.value, HOURS_LIMIT, setHours)}
        max={HOURS_LIMIT}
        error={error.hours}
        width={100}
        disabled={disabled}
      />

      <Input
        color="primary"
        name="minutes"
        placeholder="minutes"
        type="number"
        value={minutes || ''}
        onChange={e => handleChange(e.target.value, MINUTES_LIMIT, setMinutes)}
        error={error.minutes}
        width={100}
        disabled={disabled}
      />
    </Form>
  )
}

export default EntryTimeField
