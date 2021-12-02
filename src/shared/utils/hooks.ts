import { useState } from 'react'

export const useToggle = () => {
  const [open, setOpen] = useState(false)
  const toggleOpen = () => setOpen(open => !open)

  return { open, toggleOpen }
}
