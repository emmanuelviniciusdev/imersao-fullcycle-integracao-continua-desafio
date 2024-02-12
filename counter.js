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

    sayHi(someInput) {
        if (someInput === 10) {
            throw new Error("This cannot be!");
        } else if (someInput === "Hi") {
            console.log("Hello!");
        } else {
            if (someInput) {
                console.log("What did you say?")
            }
        }

        console.log('Hi!');
    }

    sayHello(someInput) {
        if (someInput === 20) {
            throw new Error("This cannot be!");
        } else if (someInput === "Hello") {
            console.log("Hi!");
        } else {
            if (someInput) {
                console.log("What are you talking about?")
            }
        }

        console.log('Hello!');
    }
}
