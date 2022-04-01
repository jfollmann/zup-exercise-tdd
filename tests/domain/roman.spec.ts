type RomanNumbers = { key: string, value: number }

const convertToRoman = (value: number): string => {
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

  test('should return VII if input is 7', () => {
    const result = convertToRoman(7)

    expect(result).toEqual('VII')
  })

  test('should return IX if input is 9', () => {
    const result = convertToRoman(9)

    expect(result).toEqual('IX')
  })

  test('should return X if input is 10', () => {
    const result = convertToRoman(10)

    expect(result).toEqual('X')
  })

  test('should return XIII if input is 13', () => {
    const result = convertToRoman(13)

    expect(result).toEqual('XIII')
  })

  test('should return XXI if input is 21', () => {
    const result = convertToRoman(21)

    expect(result).toEqual('XXI')
  })

  test('should return L if input is 50', () => {
    const result = convertToRoman(50)
    expect(result).toEqual('L')
  })

  test('should return L if input is 89', () => {
    const result = convertToRoman(89)
    expect(result).toEqual('LXXXIX')
  })

  test('should return C if input is 100', () => {
    const result = convertToRoman(100)
    expect(result).toEqual('C')
  })

  test('should return D if input is 500', () => {
    const result = convertToRoman(500)
    expect(result).toEqual('D')
  })

  test('should return M if input is 1000', () => {
    const result = convertToRoman(1000)
    expect(result).toEqual('M')
  })
})
