type RomanNumbers = { key: string, value: number }

const convertToRoman = (value: number): string => {
  if (value === undefined) {
    throw new Error('Invalid value')
  }

  const map: RomanNumbers[] = [
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
  test('should return throw if input is invalid', () => {
    const fn = convertToRoman

    expect(() => fn(undefined as any)).toThrow(new Error('Invalid value'))
  })

  test('should return I if input is 1', () => {
    const result = convertToRoman(1)

    expect(result).toEqual('I')
  })

  test('should return II if input is 2', () => {
    const result = convertToRoman(2)

    expect(result).toEqual('II')
  })

  test('should return III if input is 3', () => {
    const result = convertToRoman(3)

    expect(result).toEqual('III')
  })

  test('should return IV if input is 4', () => {
    const result = convertToRoman(4)

    expect(result).toEqual('IV')
  })
})
