import { FibonacciUseCase } from "../../application/use-cases/FibonacciUseCase";

export class FibonacciController {
  private fibonacciUseCase: FibonacciUseCase;

  constructor() {
    this.fibonacciUseCase = new FibonacciUseCase();
  }

  handle(num: number): void {
    const result = this.fibonacciUseCase.execute(num);
    console.log(result);
  }
}
