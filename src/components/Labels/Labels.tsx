import { Label } from 'components/TimeEntrySection/TimeEntrySection.utils'
import { memo, MouseEventHandler, useCallback } from 'react'
import { ID } from 'shared/types'
import styled from 'styled-components'
import {
  DEFAULT_BORDER_RADIUS,
  LABEL_HEIGHT,
  LABEL_MARGIN,
  LABEL_PADDING,
  LABEL_WIDTH,
  LABEL_WRAPPER_WIDTH,
  palette,
  typography,
} from '../../config'

// TODO: refactorize

interface LabelProps {
  labelName: string
  onClick: MouseEventHandler<HTMLButtonElement> & ((id: string) => void)
  id: ID
  active: boolean
}

const StyledLabel = styled('button')<LabelProps>(({ active }) => ({
  padding: LABEL_PADDING,
  height: LABEL_HEIGHT,
  margin: `0 ${LABEL_MARGIN}px`,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  minWidth: LABEL_WIDTH,
  cursor: 'pointer',
  border: `1px solid ${
    active ? palette.primary.dark : palette.background.paper
  }`,
  backgroundColor: active ? palette.primary.dark : palette.background.paper,
  color: active ? palette.text.text : palette.text.dark,
  borderRadius: DEFAULT_BORDER_RADIUS,
  boxShadow: palette.shadows.box1,
  fontWeight: active
    ? typography.fontWeight.bold
    : typography.fontWeight.medium,
}))

const LabelItem = (props: LabelProps) => {
  return <StyledLabel {...props}>{props.labelName}</StyledLabel>
}

const LabelWrapper = styled('div')({
  display: 'flex',
  width: LABEL_WRAPPER_WIDTH,
  flexWrap: 'wrap',
})

interface LabelsProps {
  labels?: Label[]
  onClick?: (id: ID) => void
  selectedLabels?: ID[]
}

const Labels = ({ labels, onClick, selectedLabels }: LabelsProps) => {
  const isLabelSelected = useCallback(
    (id: ID) => !!selectedLabels?.includes(id),
    [selectedLabels]
  )
  console.log(selectedLabels)
  return (
    <LabelWrapper>
      {labels?.map(({ id, name }) => (
        <LabelItem
          labelName={name}
          key={id}
          id={id}
          onClick={() => onClick && onClick(id)}
          active={isLabelSelected(id)}
        />
      ))}
    </LabelWrapper>
  )
}

export default memo(Labels)
