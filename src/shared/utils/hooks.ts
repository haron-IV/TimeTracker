import { useState } from 'react'

export const useModal = () => {
  const [open, setOpen] = useState(false)
  const toggleModal = () => setOpen(open => !open)

  return { open, toggleModal }
}
