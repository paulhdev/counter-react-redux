import { increment, decrement, clean } from './actions';

test('Action: increment', () => {
  let incr = increment(1)
  expect(incr).toEqual({
    type: 'INCREMENT',
    value: 1,
  })
})

test('Action: decrement', () => {
  let decr = decrement(-1)
  expect(decr).toEqual({
    type: 'DECREMENT',
    value: -1,
  })
})

test('Action: clean', () => {
  let cln = clean(0)
  expect(cln).toEqual({
    type: 'CLEAN',
    value: 0,
  })
})