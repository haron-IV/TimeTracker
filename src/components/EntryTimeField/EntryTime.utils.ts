import { HOURS_LIMIT, MINUTES_LIMIT } from 'config'
import { useState } from 'react'
import { setTimeFunc } from 'shared/types'

export const useEntryTimeField = () => {
  const [error, setError] = useState({ hours: '', minutes: '' })

  const handleChange = (
    value: string,
    limit: number,
    setFunction?: setTimeFunc
  ) => {
    if (!setFunction) return
    const val = Number(value)
    if (val <= limit) {
      setFunction(val)
      limit === HOURS_LIMIT && setError(error => ({ ...error, hours: '' }))
      limit === MINUTES_LIMIT && setError(error => ({ ...error, minutes: '' }))
    } else {
      limit === HOURS_LIMIT &&
        setError(error => ({ ...error, hours: `Max value: ${HOURS_LIMIT}` }))
      limit === MINUTES_LIMIT &&
        setError(error => ({
          ...error,
          minutes: `Max value: ${MINUTES_LIMIT}`,
        }))
    }
  }

  return { error, handleChange }
}
