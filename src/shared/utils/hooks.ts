import { useState } from 'react'

type UseToggleReturnType = [boolean, () => void]

export const useToggle = (initialValue?: boolean): UseToggleReturnType => {
  const [open, setOpen] = useState(!!initialValue)
  const toggleOpen = () => setOpen(open => !open)

  return [open, toggleOpen]
}
