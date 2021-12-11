import { SumupWrapper, TimeOutputWrapper } from './TimeSumup.style'

interface TimeSumupItem {
  hours: string | number
  minutes: string | number
}

interface TimeSumupProps {
  regularTime: TimeSumupItem
  scaledTime: TimeSumupItem
}
const TimeSumup = ({ regularTime, scaledTime }: TimeSumupProps) => {
  const isTimeAvailable =
    regularTime.hours ||
    regularTime.minutes ||
    scaledTime.hours ||
    scaledTime.hours

  return isTimeAvailable ? (
    <SumupWrapper>
      <TimeOutputWrapper>
        <span>regular time:</span>
        {regularTime.hours}:{regularTime.minutes}
      </TimeOutputWrapper>

      <TimeOutputWrapper>
        <span>scaled time:</span>
        {scaledTime.hours}.{scaledTime.minutes}
      </TimeOutputWrapper>
    </SumupWrapper>
  ) : null
}

export default TimeSumup
