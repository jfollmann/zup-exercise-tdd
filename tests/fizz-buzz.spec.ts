import { fizzBuzz } from '@/fizzBuzz'

describe('Fizz Buss Spec', () => {
  test('Call function with a correct params', () => {
    const result = fizzBuzz(0)

    expect(result).toEqual([])
  })

  test('Check if multiples of 3 return "Fizz" word', () => {
    const result = fizzBuzz(3)

    expect(result).toEqual(['1', '2', 'Fizz'])
  })

  test('Check if multiples of 5 return "Buzz" word', () => {
    const result = fizzBuzz(5)

    expect(result).toEqual(['1', '2', 'Fizz', '4', 'Buzz'])
  })

  test('Check if multiples of 3 and 5 return "FizzBuzz" word', () => {
    const result = fizzBuzz(15)

    expect(result).toEqual(['1', '2', 'Fizz', '4', 'Buzz', 'Fizz', '7', '8', 'Fizz', 'Buzz', '11', 'Fizz', '13', '14', 'FizzBuzz'])
  })
})
