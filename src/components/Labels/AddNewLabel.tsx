import { PropsWithChildren, useState } from 'react'
import { BsFillTrashFill, BsPlus } from 'react-icons/bs'
import { DB } from 'services'
import { LabelProps, StyledLabel } from './Labels.style'

const db = new DB()

interface AddNewLabelProps {
  onAdd?: React.Dispatch<React.SetStateAction<boolean>>
}

export const LabelItem = ({
  children,
  ...props
}: PropsWithChildren<LabelProps>) => (
  <StyledLabel {...props}>{children || props.labelName}</StyledLabel>
)

export const AddNewLabel = ({ onAdd }: AddNewLabelProps) => {
  const [isInitiated, setInitiated] = useState(false)
  const [labelName, setLabelName] = useState('')
  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setLabelName(e.target.value)

  const onKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.charCode !== 13) return
    db.addNewLabel(labelName)
    setInitiated(false)
    onAdd && onAdd(true)
    setLabelName('')
  }

  return (
    <>
      <LabelItem active={false} onClick={() => setInitiated(true)}>
        {isInitiated ? (
          <input
            value={labelName}
            onChange={handleOnChange}
            placeholder="label name"
            onKeyPress={onKeyPress}
            autoFocus
          />
        ) : (
          <BsPlus />
        )}
      </LabelItem>
      {isInitiated && (
        <button onClick={() => setInitiated(false)}>
          <BsFillTrashFill />
        </button>
      )}
    </>
  )
}
