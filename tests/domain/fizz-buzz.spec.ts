import { fizzBuzz } from '@/domain'

describe('Fizz Buss Spec', () => {
  test('should return throw if input is invalid', () => {
    const fn = fizzBuzz

    expect(() => fn(undefined as any)).toThrow(new Error('Invalid size'))
  })

  test('should return empty array if input is 0', () => {
    const result = fizzBuzz(0)

    expect(result).toEqual([])
  })

  test('should return "Fizz" if number is multiple of 3', () => {
    const result = fizzBuzz(3)

    expect(result).toEqual(['1', '2', 'Fizz'])
  })

  test('should return "Buzz" if number is multiple of 5', () => {
    const result = fizzBuzz(5)

    expect(result).toEqual([
      '1', '2', 'Fizz',
      '4', 'Buzz'
    ])
  })

  test('should return "FizzBuzz" if number is multiple of 3 and 5', () => {
    const result = fizzBuzz(15)

    expect(result).toEqual([
      '1', '2', 'Fizz',
      '4', 'Buzz', 'Fizz',
      '7', '8', 'Fizz',
      'Buzz', '11', 'Fizz',
      '13', '14', 'FizzBuzz'])
  })

  test('should return a correct output if input is 30', () => {
    const result = fizzBuzz(30)

    expect(result).toEqual([
      '1', '2', 'Fizz',
      '4', 'Buzz', 'Fizz',
      '7', '8', 'Fizz',
      'Buzz', '11', 'Fizz',
      '13', '14', 'FizzBuzz',
      '16', '17', 'Fizz',
      '19', 'Buzz', 'Fizz',
      '22', '23', 'Fizz',
      'Buzz', '26', 'Fizz',
      '28', '29', 'FizzBuzz'
    ]
    )
  })
})
