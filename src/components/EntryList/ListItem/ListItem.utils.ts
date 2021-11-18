import { TIME_MULTIPLY_RATIO } from 'config'
import { Label } from 'shared/types'

export const calculateTimeEntry = (hours: number, minutes: number) => {
  const scaledTime = Math.floor(minutes / TIME_MULTIPLY_RATIO)

  return `${hours}.${scaledTime}`
}

export const getSelectedLabels = (
  labels: Label[],
  selectedLabels: string[]
) => {
  const filteredLabels: string[] = []
  for (const { id } of labels) {
    const label = selectedLabels.find(selectedLabelId => selectedLabelId === id)
    label && filteredLabels.push(label)
  }

  return filteredLabels
}
