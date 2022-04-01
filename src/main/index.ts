import './config/module-alias'

import { fizzBuzz } from '@/domain'

console.log('-- FizzBuzz --')
console.log({ input: 10, output: fizzBuzz(10) })
