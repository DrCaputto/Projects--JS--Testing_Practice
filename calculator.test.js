const calculator = require('./calculator')

it('Addition of positive numbers: ', () =>
    expect(calculator.add(4,6)).toBe(10)
)

it('Addition of negative numbers: ', () =>
    expect(calculator.add(-4,-6)).toBe(-10)
)

it('Subtraction (+/+): ', () =>
    expect(calculator.subtract(4,2)).toBe(2)
)

it('Subtraction (-/+): ', () =>
    expect(calculator.subtract(-4,2)).toBe(-6)
)

it('Subtraction (+/-): ', () =>
    expect(calculator.subtract(4,-2)).toBe(6)
)

it('Subtraction (-/-): ', () =>
    expect(calculator.subtract(-4,-2)).toBe(-2)
)

it('Multiplication (+/+): ', () =>
    expect(calculator.multiply(4,2)).toBe(8)
)

it('Multiplication (+/-): ', () =>
    expect(calculator.multiply(4,-2)).toBe(-8)
)

it('Multiplication (-/+): ', () =>
    expect(calculator.multiply(-4,2)).toBe(-8)
)

it('Multiplication (-/-): ', () =>
    expect(calculator.multiply(-4,-2)).toBe(8)
)

it('Devision (>+0/>+0): ', () =>
    expect(calculator.devide(4,2)).toBe(2)
)

it('Devision (>+0/+0<): ', () =>
    expect(calculator.devide(4,-2)).toBe(-2)
)

it('Devision (>+0/0): ', () =>
    expect(calculator.devide(4,0)).toBe(Infinity)
)

it('Devision (0/>0 || <0): ', () =>
    expect(calculator.devide(0,2)).toBe(0)
)