interface ICalculator {
    add(a: number, b: number): number;
    subtract(a: number, b: number): number;
    multiply(a: number, b: number): number;
    divide(a: number, b: number): number | string;
}

class Calculator implements ICalculator {
    add(a: number, b: number): number {
        this.validateInput(a, b);
        return a + b;
    }

    subtract(a: number, b: number): number {
        this.validateInput(a, b);
        return a - b;
    }

    multiply(a: number, b: number): number {
        this.validateInput(a, b);
        return a * b;
    }

    divide(a: number, b: number): number | string {
        this.validateInput(a, b);
        if (b === 0) {
            return "Error: Tried to divide by zero";
        }
        return a / b;
    }

    private validateInput(...args: number[]): void {
        for (const arg of args) {
            if (typeof arg !== "number" || isNaN(arg)) {
                throw new Error("Invalid input: Enter numbers only");
            }
        }
    }
}

const calculator = new Calculator();
console.log(calculator.add(5, 3));
console.log(calculator.subtract(5, 3));
console.log(calculator.multiply(5, 3));
console.log(calculator.divide(5, 0));
console.log(calculator.divide(5, 3));
