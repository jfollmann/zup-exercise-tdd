# **ZUP - Exercício proposto de TDD**

[![CI](https://github.com/jfollmann/zup-exercise-tdd/actions/workflows/ci.yml/badge.svg)](https://github.com/jfollmann/zup-exercise-tdd/actions/workflows/ci.yml)
[![Coverage Status](https://coveralls.io/repos/github/jfollmann/zup-exercise-tdd/badge.svg?branch=main)](https://coveralls.io/github/jfollmann/zup-exercise-tdd?branch=main)

## Exercícios

### FizzBuzz
- Escreva uma função que retorno um array com números entre 1 e N.
- Multiplos de 3 usar a palavra `Fizz`
- Multiplos de 5 usar a palavra `Buzz`
- Multiplos de 3 e 5 usar a palavra `FizzBuzz`
```
["1", "2", "Fizz", "4", "Buzz", ...]
```

### Número Romano
Implemente o método String convert(int) que recebe um número e o converte para algarismo romanos.
``` 
1 -> I
2 -> II
3 -> III
4 -> IV
5 -> V
9 -> IX
21 -> XXI
50 -> L
100 -> C
500 -> D
1000 -> M
```

## Rodando a aplicação (desenvolvimento)

Para rodar a aplicação em desenvolvimento, primeiro precisamos instalar as dependências:

```bash
$ npm ci
```

Em seguida, executar o build:

```bash
$ npm run build
```

Após isso:

```bash
$ npm run start
```

## Executando os testes

```bash
$ npm run test
```
ou
```bash
$ npm run test:coverage
```
