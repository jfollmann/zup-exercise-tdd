export const fizzBuzz = (size: number): any => {
  if (size === undefined) {
    throw new Error('')
  }

  const result = Array.from({ length: size + 1 }, (_, i) => {
    if (i === 0) return ''
    if (i % 15 === 0) return 'FizzBuzz'
    if (i % 3 === 0) return 'Fizz'
    if (i % 5 === 0) return 'Buzz'

    return i.toString()
  })

  return result.slice(1)
}
