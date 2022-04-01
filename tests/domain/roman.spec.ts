const convertToRoman = (value: number): string => {
  return 'I'
}

describe('Roman Numbers Spec', () => {
  test('Call function with correct params', () => {
    const result = convertToRoman(1)

    expect(result).toEqual('I')
  })
})
