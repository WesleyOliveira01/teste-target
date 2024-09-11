export class FibonacciUseCase {
  execute(num: number): string {
    let fibSequence: number[] = [0, 1];
    let nextFib = 1;

    while (nextFib <= num) {
      fibSequence.push(nextFib);
      nextFib =
        fibSequence[fibSequence.length - 1] +
        fibSequence[fibSequence.length - 2];
    }

    if (fibSequence.includes(num)) {
      return `${num} pertence à sequência de Fibonacci.`;
    } else {
      return `${num} NÃO pertence à sequência de Fibonacci.`;
    }
  }
}
