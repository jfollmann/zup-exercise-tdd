import { fizzBuzz } from '@/domain'

describe('Fizz Buss Spec', () => {
  test('Call function with a correct params', () => {
    const result = fizzBuzz(0)

    expect(result).toEqual([])
  })

  test('Call function without size throw error', () => {
    const fn = fizzBuzz

    expect(() => fn(undefined as any)).toThrow(new Error())
  })

  test('Check if multiples of 3 return "Fizz" word', () => {
    const result = fizzBuzz(3)

    expect(result).toEqual(['1', '2', 'Fizz'])
  })

  test('Check if multiples of 5 return "Buzz" word', () => {
    const result = fizzBuzz(5)

    expect(result).toEqual([
      '1', '2', 'Fizz',
      '4', 'Buzz'
    ])
  })

  test('Check if multiples of 3 and 5 return "FizzBuzz" word', () => {
    const result = fizzBuzz(15)

    expect(result).toEqual([
      '1', '2', 'Fizz',
      '4', 'Buzz', 'Fizz',
      '7', '8', 'Fizz',
      'Buzz', '11', 'Fizz',
      '13', '14', 'FizzBuzz'])
  })

  test('Check if result is correct', () => {
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
