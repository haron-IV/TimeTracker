import { PropsWithChildren } from 'react'
import styled from 'styled-components'

const Section = styled('section')({
  display: 'flex',
  justifyContent: 'space-between',
})

interface TimeEntrySectionProps extends PropsWithChildren<{}> {}

const TimeEntrySection = ({ children }: TimeEntrySectionProps) => {
  return <Section>{children}</Section>
}

export default TimeEntrySection
