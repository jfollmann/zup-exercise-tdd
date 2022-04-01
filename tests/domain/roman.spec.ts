type RomanNumbers = { key: string, value: number }

const convertToRoman = (value: number): string => {
  if (value === undefined) {
    throw new Error('Invalid value')
  }

  const map: RomanNumbers[] = [
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

  test('should return V if input is 5', () => {
    const result = convertToRoman(5)

    expect(result).toEqual('V')
  })

  test('should return IX if input is 9', () => {
    const result = convertToRoman(9)

    expect(result).toEqual('IX')
  })
  test.todo('should return X if input is 10')
  test.todo('should return XXI if input is 21')
  test.todo('should return L if input is 50')
  test.todo('should return C if input is 100')
  test.todo('should return D if input is 500')
  test.todo('should return M if input is 1000')
})
