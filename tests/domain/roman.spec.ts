const convertToRoman = (value: number): string => {
  if (value === undefined) {
    throw new Error('Invalid value')
  }

  return 'I'.repeat(value)
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
})
