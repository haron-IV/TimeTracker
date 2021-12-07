import { TIME_MULTIPLY_RATIO } from 'config'

export const addLeadingZero = (date: number) => (date <= 9 ? `0${date}` : date)
export const toPercentage = (value: number, from: number) =>
  Number(((value / from) * 100).toFixed(2))
export const getScaledMinutes = (minutes: number) =>
  Number((minutes / TIME_MULTIPLY_RATIO).toFixed(2))
