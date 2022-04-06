const { test, expect } = require("@jest/globals");
const Calculator = require('./calculator.js');

describe('addition', () => {
  const sum1 = new Calculator(10, 11);
  test('test 1', () => {
    expect(sum1.add()).toBe(21);
  })

  const sum2 = new Calculator(-10, 11);
  test('test 2', () => {
    expect(sum2.add()).toBe(1);
  })

  const sum3 = new Calculator(11, -15);
  test('test 3', () => {
    expect(sum3.add()).toBe(-4);
  })
})

describe('subtract', () => {
  const res1 = new Calculator(5, 3);
  test('test 1', () => {
    expect(res1.subtract()).toBe(2);
  })

  const res2 = new Calculator(5, -3);
  test('test 2', () => {
    expect(res2.subtract()).toBe(8);
  })

  const res3 = new Calculator(-3, -5);
  test('test 3', () => {
    expect(res3.subtract()).toBe(2);
  })
})

describe('multiplication', () => {
  const mult1 = new Calculator(10, 3);
  test('test 1', () => {
    expect(mult1.multiply()).toBe(30);
  })

  const mult2 = new  Calculator(10, -2);
  test('test 2', () => {
    expect(mult2.multiply()).toBe(-20);
  })

  const mult3 = new Calculator(-5, 5);
  test('test 3', () => {
    expect(mult3.multiply()).toBe(-25);
  })
})

describe('divide', () => {
  const div1 = new Calculator(10, 5);
  test('test 1', () => {
    expect(div1.divide()).toBe(2);
  })

  const div2 = new Calculator(-15, 3);
  test('test 2', () => {
    expect(div2.divide()).toBe(-5);
  })

  const div3 = new Calculator(300, 1.5);
  test('test 3', () => {
    expect(div3.divide()).toBe(200);
  })
})

