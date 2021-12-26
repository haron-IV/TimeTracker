import { TimeField } from 'components'
import { ErrorIndicator, H1, Input } from 'shared/components'
import { MINUTES_LIMIT } from '../../config'
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
          width={95}
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
