import { ChangeEvent } from 'shared/types'
import styled from 'styled-components'
import {
  ENTRY_DESCRIPTION_FIELD_HEIGHT,
  ENTRY_DESCRIPTION_FIELD_WIDTH,
  palette,
} from '../../config'

const TextArea = styled('textarea')({
  border: `1px solid ${palette.accent.accent}`,
  outline: `1px solid ${palette.accent.accent}`,
  padding: '0.5rem',
  color: palette.text.dark,
  boxShadow: palette.shadows.box1,
  width: ENTRY_DESCRIPTION_FIELD_WIDTH,
  height: ENTRY_DESCRIPTION_FIELD_HEIGHT,
  backgroundColor: palette.primary.light,
})

interface EntryDescriptionFieldProps {
  value: string
  onChange: (value: string) => void
}

const EntryDescriptionField = ({
  value,
  onChange,
}: EntryDescriptionFieldProps) => (
  <TextArea
    onChange={(e: ChangeEvent<string>) => onChange(e.target.value)}
    defaultValue={value}
  />
)

export default EntryDescriptionField
