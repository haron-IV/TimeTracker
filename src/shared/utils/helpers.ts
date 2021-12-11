import { TIME_MULTIPLY_RATIO } from 'config'

export const addLeadingZero = (date: number) => (date <= 9 ? `0${date}` : date)
export const toPercentage = (value: number, from: number) =>
  Number(((value / from) * 100).toFixed(2))
export const getScaledMinutes = (minutes: number) =>
  Math.round(Number(minutes / TIME_MULTIPLY_RATIO))
export const daysInMonth = (month: number, year: number) =>
  new Date(year, month, 0).getDate()
