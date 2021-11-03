import styled from 'styled-components'
import {
  LABEL_HEIGHT,
  LABEL_MARGIN,
  LABEL_PADDING,
  LABEL_WIDTH,
  LABEL_WRAPPER_WIDTH,
} from '../../config'

interface LabelProps {
  labelName: string
}

const StyledLabel = styled('div')({
  padding: LABEL_PADDING,
  height: LABEL_HEIGHT,
  margin: `0 ${LABEL_MARGIN}px`,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  minWidth: LABEL_WIDTH,
})

const Label = ({ labelName }: LabelProps) => {
  return <StyledLabel>{labelName}</StyledLabel>
}

const LabelWrapper = styled('div')({
  display: 'flex',
  width: LABEL_WRAPPER_WIDTH,
  flexWrap: 'wrap',
})

const Labels = () => {
  return (
    <LabelWrapper>
      {[1, 2, 3, 4, 5].map(item => (
        <Label labelName={`Label ${item}`} />
      ))}
    </LabelWrapper>
  )
}

export default Labels
