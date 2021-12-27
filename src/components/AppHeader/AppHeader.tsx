import { H1, Input } from 'shared/components'
import { MINUTES_LIMIT, HEADER_TIME_INPUT_WIDTH } from '../../config'
import {
  Header,
  TimeCalculatorWrapper,
  TimeFieldWrapper,
  TimeOutput,
} from './AppHeader.style'
import { useTimeCalculator } from './AppHeader.utils'

const TimeCalculator = () => {
  const { minutes, error, handleChange, scaledTime } = useTimeCalculator()

  return (
    <TimeCalculatorWrapper>
      <TimeFieldWrapper>
        <p>Scale your time to TimeSheet time</p>
        <Input
          color="text"
          name="minutes"
          placeholder="minutes"
          type="number"
          value={minutes || ''}
          onChange={e => handleChange(e.target.value)}
          max={MINUTES_LIMIT + 2}
          error={error}
          width={HEADER_TIME_INPUT_WIDTH}
        />
        <TimeOutput>{scaledTime === 100 ? '1 hour' : scaledTime}</TimeOutput>
      </TimeFieldWrapper>
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
