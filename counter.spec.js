const Counter = require('./counter');

it('should throw an error if decrement is called and value is 0', () => {
    const counter = new Counter();

    /**
     * ☠️
     */
    counter.increment();

    expect(() => counter.decrement()).toThrow('Value cannot be less than 0');
});

it('should decrement value successfully', () => {
    const counter = new Counter();

    expect(counter.value).toBe(0);

    counter.increment();
    counter.increment();

    expect(counter.value).toBe(2);

    counter.decrement();
    counter.decrement();

    expect(counter.value).toBe(0);
});

it('should increment value successfully', () => {
    const counter = new Counter();

    expect(counter.value).toBe(0);

    counter.increment();
    counter.increment();

    expect(counter.value).toBe(2);
});
