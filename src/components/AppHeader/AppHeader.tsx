import {
  ErrorIndicator,
  setFunction,
  TimeField,
} from 'components/EntryTimeField/EntryTimeField'
import { useState } from 'react'
import styled from 'styled-components'
import {
  APP_HEADER_HEIGHT,
  TIME_MULTIPLY_RATIO,
  MINUTES_LIMIT,
  palette,
} from '../../config'
import { H1 } from '../../shared/components'

// TODO: refactorize

const Header = styled('header')({
  height: APP_HEADER_HEIGHT,
  backgroundColor: palette.primary.dark,
  boxShadow: palette.shadows.box2,
  position: 'fixed',
  top: 0,
  width: '100%',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '0 2rem',
})

const TimeFieldWrapper = styled('div')({
  display: 'flex',
})
const TimeCalculatorWrapper = styled('div')({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  marginRight: 25,
  color: palette.text.text,
})

const MINUTES_LIMIT_LOCAL = MINUTES_LIMIT + 1

const TimeCalculator = () => {
  const [minutes, setMinutes] = useState(0)
  const [error, setError] = useState('')

  const handleChange = (
    value: string,
    setFunction: setFunction,
    limit: number
  ) => {
    const val = Number(value)

    console.log(val, limit)
    if (val > limit) {
      limit === MINUTES_LIMIT_LOCAL &&
        setError(`Max value: ${MINUTES_LIMIT_LOCAL}`)
    } else {
      setFunction(val)
      setError('')
    }
  }

  const scaledTime = minutes / TIME_MULTIPLY_RATIO

  return (
    <TimeCalculatorWrapper>
      <TimeFieldWrapper>
        <p>Scale your time to TimeSheet time</p>
        <TimeField
          name="minutes"
          placeholder="minutes"
          type="number"
          value={minutes || ''}
          onChange={e =>
            handleChange(e.target.value, setMinutes, MINUTES_LIMIT_LOCAL)
          }
          max={MINUTES_LIMIT + 2}
          error={error}
        />
        <ErrorIndicator error={error}>{error}</ErrorIndicator>
      </TimeFieldWrapper>
      {scaledTime === 100 ? '1 hour' : scaledTime}
    </TimeCalculatorWrapper>
  )
}

const AppHeader = () => {
  return (
    <Header>
      <H1>Time Tracker</H1>
      <TimeCalculator />
    </Header>
  )
}

export default AppHeader
