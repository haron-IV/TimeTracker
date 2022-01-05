import { ChangeEventHandler } from 'react'
import { ErrorIndicator } from '../index'
import {
  TextArea as BaseTextArea,
  TextAreaProps as BaseTextAreaProps,
} from './TextArea.styled'

export interface TextAreaProps extends BaseTextAreaProps {
  value: string
  onChange?: ChangeEventHandler<HTMLTextAreaElement>
}
const TextArea = (props: TextAreaProps) => {
  return (
    // TODO: add tooltip here based on a props
    <>
      <BaseTextArea {...props} />
      <ErrorIndicator error={props.error}>{props.error}</ErrorIndicator>
    </>
  )
}

export default TextArea
