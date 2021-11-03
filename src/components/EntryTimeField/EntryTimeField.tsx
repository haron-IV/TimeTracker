import styled from 'styled-components'
import { palette, TIME_FIELD_MARGIN, TIME_FIELD_WIDTH } from '../../config'

const TimeField = styled('input')({
  width: TIME_FIELD_WIDTH,
  margin: `0 ${TIME_FIELD_MARGIN}px`,
  padding: TIME_FIELD_MARGIN,
  outline: `1px solid ${palette.primary.dark}`,
  color: palette.text.dark,
})

const EntryTimeField = () => {
  return (
    <form>
      <TimeField name="hours" placeholder="hours" type="number" />
      :
      <TimeField name="minutes" placeholder="minutes" type="number" />
    </form>
  )
}

export default EntryTimeField
