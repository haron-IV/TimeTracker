import { PropsWithChildren } from 'react'
import { BsCaretDown } from 'react-icons/bs'
import { useToggle } from 'shared/utils/hooks'
import {
  CollapseContent,
  CollapseHeader,
  CollapseWrapper,
} from './Collapse.style'

interface CollapseProps {
  title: string
}

const Collapse = ({ children, title }: PropsWithChildren<CollapseProps>) => {
  const [open, toggleOpen] = useToggle()

  return (
    <CollapseWrapper>
      <CollapseHeader onClick={toggleOpen} open={open}>
        <BsCaretDown />
        {title}
      </CollapseHeader>

      {open && <CollapseContent>{children}</CollapseContent>}
    </CollapseWrapper>
  )
}

export default Collapse
