import './config/module-alias'

import { fizzBuzz } from '@/domain'

console.log('-- FizzBuzz --')
console.log({ input: 10, output: fizzBuzz(10) })
console.log({ input: 20, output: fizzBuzz(20) })
console.log({ input: 30, output: fizzBuzz(30) })
