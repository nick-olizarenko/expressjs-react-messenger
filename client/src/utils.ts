export const dateToLocaleString = (date: Date | string) => {
  date = new Date(date)

  return date.toLocaleString()
}
