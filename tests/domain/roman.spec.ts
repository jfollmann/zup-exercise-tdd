type RomanNumbersType = { key: string, value: number }

const convertToRoman = (value: number): string => {
  if (value === undefined) {
    throw new Error('Invalid value')
  }

  const map: RomanNumbersType[] = [
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

describe('Roman Numbers Spec', () => {
  test('Call function with correct params', () => {
    const result = convertToRoman(1)

    expect(result).toEqual('I')
  })

  test('Call function without value throw error', () => {
    const fn = convertToRoman

    expect(() => fn(undefined as any)).toThrow(new Error('Invalid value'))
  })

  test('Call with 3 and return III', () => {
    const result = convertToRoman(3)

    expect(result).toEqual('III')
  })

  test('Call with 4 and return IV', () => {
    const result = convertToRoman(4)

    expect(result).toEqual('IV')
  })
})
