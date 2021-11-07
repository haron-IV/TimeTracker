import { useState } from 'react'
import { ChangeEvent } from 'shared/types'
import styled from 'styled-components'
import {
  palette,
  transition,
  TIME_FIELD_MARGIN,
  TIME_FIELD_WIDTH,
  HOURS_LIMIT,
  MINUTES_LIMIT,
  DEFAULT_BORDER_RADIUS,
} from '../../config'

// TODO: refactorize

interface TimeFieldProps {
  error?: string
}

//TODO: make this component shared
export const TimeField = styled('input')<TimeFieldProps>(({ error }) => ({
  width: TIME_FIELD_WIDTH,
  margin: `0 ${TIME_FIELD_MARGIN}px`,
  padding: TIME_FIELD_MARGIN,
  outline: `1px solid ${error ? palette.error : palette.primary.dark}`,
  border: 'none',
  color: palette.text.dark,
  boxShadow: palette.shadows.box1,
  borderRadius: DEFAULT_BORDER_RADIUS,
}))
interface TimeLabelProps {
  visible: boolean
}
const TimeLabel = styled('label')<TimeLabelProps>(({ visible }) => ({
  color: palette.text.secondary,
  opacity: visible ? 1 : 0,
  transition: `opacity ease-in-out ${transition.time.fast}ms`,
  marginLeft: DEFAULT_BORDER_RADIUS,
}))
const FieldWrapper = styled('div')({
  display: 'flex',
  flexDirection: 'column',
})
const Form = styled('form')({
  display: 'flex',
})
//TODO: make this component shared
export const ErrorIndicator = styled('div')<TimeFieldProps>(({ error }) => ({
  color: palette.error,
  fontSize: '0.75rem',
  marginTop: TIME_FIELD_MARGIN,
  marginLeft: TIME_FIELD_MARGIN,
}))

export type setFunction = (value: number) => void
interface EntryTimeFieldProps {
  hours: number
  minutes: number
  setHours: setFunction
  setMinutes: setFunction
}

const EntryTimeField = ({
  hours,
  minutes,
  setHours,
  setMinutes,
}: EntryTimeFieldProps) => {
  const [error, setError] = useState({ hours: '', minutes: '' })

  const handleChange = (
    value: string,
    setFunction: setFunction,
    limit: number
  ) => {
    const val = Number(value)
    if (val <= limit) {
      setFunction(val)
      limit === HOURS_LIMIT && setError(error => ({ ...error, hours: '' }))
      limit === MINUTES_LIMIT && setError(error => ({ ...error, minutes: '' }))
    } else {
      limit === HOURS_LIMIT &&
        setError(error => ({ ...error, hours: `Max value: ${HOURS_LIMIT}` }))
      limit === MINUTES_LIMIT &&
        setError(error => ({
          ...error,
          minutes: `Max value: ${MINUTES_LIMIT}`,
        }))
    }
  }

  return (
    <Form>
      <FieldWrapper>
        <TimeLabel visible={!!hours}>Hours</TimeLabel>
        <TimeField
          name="hours"
          placeholder="hours"
          type="number"
          value={hours || ''}
          onChange={e => handleChange(e.target.value, setHours, HOURS_LIMIT)}
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
            handleChange(e.target.value, setMinutes, MINUTES_LIMIT)
          }
          error={error.minutes}
        />
        <ErrorIndicator error={error.minutes}>{error.minutes}</ErrorIndicator>
      </FieldWrapper>
    </Form>
  )
}

export default EntryTimeField
