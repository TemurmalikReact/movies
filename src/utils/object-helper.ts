export const toFixed = (obj: number) => {
  return (Math.round(Math.round(obj * 100) / 10) / 10).toFixed(1)
}
