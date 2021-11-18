import { MINUTES_LIMIT, TIME_MULTIPLY_RATIO } from 'config'
import { useState } from 'react'

const MINUTES_LIMIT_LOCAL = MINUTES_LIMIT + 1

export const useTimeCalculator = () => {
  const [minutes, setMinutes] = useState(0)
  const [error, setError] = useState('')

  const scaledTime = Number((minutes / TIME_MULTIPLY_RATIO).toFixed(2))

  const handleChange = (value: string) => {
    const val = Number(value)

    if (val > MINUTES_LIMIT_LOCAL) {
      setError(`Max value: ${MINUTES_LIMIT_LOCAL}`)
    } else {
      setMinutes(val)
      setError('')
    }
  }

  return { minutes, error, handleChange, scaledTime }
}
