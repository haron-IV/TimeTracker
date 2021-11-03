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
  boxShadow: palette.shadows.box2,
  width: ENTRY_DESCRIPTION_FIELD_WIDTH,
  height: ENTRY_DESCRIPTION_FIELD_HEIGHT,
  backgroundColor: palette.primary.light,
})

const EntryDescriptionField = () => {
  return <TextArea />
}

export default EntryDescriptionField
