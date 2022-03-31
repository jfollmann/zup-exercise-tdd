const fizzBuss = (size: number): any => {
  const response = []

  for (let i = 1; i <= size; i++) {
    let content = i.toString()
    if (i % 3 === 0) { content = 'Fizz' }
    if (i % 5 === 0) { content = 'Buzz' }

    response.push(content)
  }

  return response
}

describe('Fizz Buss Spec', () => {
  test('Call function with a correct params', () => {
    const result = fizzBuss(0)

    expect(result).toEqual([])
  })

  test('Check if multiples of 3 return "Fizz" word', () => {
    const result = fizzBuss(3)

    expect(result).toEqual(['1', '2', 'Fizz'])
  })

  test('Check if multiples of 5 return "Fizz" word', () => {
    const result = fizzBuss(5)

    expect(result).toEqual(['1', '2', 'Fizz', '4', 'Buzz'])
  })
})
