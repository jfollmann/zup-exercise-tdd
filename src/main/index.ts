import './config/module-alias'

import { fizzBuzz } from '@/domain'

console.log('---- FizzBuzz ----')
const itens = [10, 20, 30]
itens.forEach(input => {
  console.log({ input, output: fizzBuzz(input) })
})
