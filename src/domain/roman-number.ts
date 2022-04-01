type RomanNumbers = { key: string, value: number }

export const convertToRoman = (value: number): string => {
  if (value === undefined) {
    throw new Error('Invalid value')
  }

  const map: RomanNumbers[] = [
    { key: 'M', value: 1000 },
    { key: 'CM', value: 900 },
    { key: 'D', value: 500 },
    { key: 'CD', value: 400 },
    { key: 'C', value: 100 },
    { key: 'XC', value: 90 },
    { key: 'L', value: 50 },
    { key: 'XL', value: 40 },
    { key: 'X', value: 10 },
    { key: 'IX', value: 9 },
    { key: 'V', value: 5 },
    { key: 'IV', value: 4 },
    { key: 'I', value: 1 }
  ]

  let result = ''
  map.forEach(({ key, value: mapValue }) => {
    const floor = Math.floor(value / mapValue)

    result += key.repeat(floor)
    value = value % mapValue
  })

  return result
}
