module.exports = class Counter {
    #_value = 0;

    get value() {
        return this.#_value;
    }

    /**
     * @param {number} value 
     */
    set value(value) {
        if (value < 0) {
            throw new Error("Value cannot be less than 0")
        }

        this.#_value = value;
    }

    increment() {
        this.value++;
    }

    decrement() {
        this.value--;
    }
}
