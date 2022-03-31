export const fizzBuzz = (size: number): any => {
  const response = []
  for (let i = 1; i <= size; i++) {
    let content = i.toString()
    if (i % 15 === 0) {
      content = 'FizzBuzz'
    } else if (i % 3 === 0) {
      content = 'Fizz'
    } else if (i % 5 === 0) {
      content = 'Buzz'
    }
    response.push(content)
  }
  return response
}
