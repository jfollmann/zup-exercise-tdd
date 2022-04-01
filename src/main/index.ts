import './config/module-alias'

import { convertToRoman, fizzBuzz } from '@/domain'

{
  console.log('---- FizzBuzz ----')
  const inputs = [10, 20, 30]
  inputs.forEach(input => {
    console.log({ input, output: fizzBuzz(input) })
  })
}

{
  console.log('---- Roman Numbers ----')
  const inputs = [12, 23, 49, 54, 180, 230, 501, 1003]
  inputs.forEach(input => {
    console.log({ input, output: convertToRoman(input) })
  })
}
