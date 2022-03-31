export const fizzBuzz = (size: number): any => {
  return Array.from({ length: size + 1 }, (x, i) => {
    if (i === 0) return ''
    if (i % 15 === 0) return 'FizzBuzz'
    if (i % 3 === 0) return 'Fizz'
    if (i % 5 === 0) return 'Buzz'

    return i.toString()
  }).slice(1)
}
