import readline from "readline";
import { FibonacciUseCase } from "../../application/use-cases/FibonacciUseCase";
import { FaturamentoDiarioUseCase } from "../../application/use-cases/FaturamentoDiarioUseCase";
import { FaturamentoPorEstadoUseCase } from "../../application/use-cases/FaturamentoPorEstadoUseCase";
import { InverterStringUseCase } from "../../application/use-cases/InverterStringUseCase";
import { AxiosFaturamentoRepository } from "../../infra/axios/AxiosFaturamentoRepository";

export class MenuCLI {
  private rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  start() {
    this.showMenu();
  }

  private showMenu() {
    console.log(`
Escolha a questão:
1 - Fibonacci (Digite um número)
2 - Faturamento diário (Maior, menor e dias acima da média)
3 - Percentual de faturamento por estado
4 - Inverter string (Digite uma string)
5 - Encerrar execução
`);

    this.rl.question("Escolha a opção (1-5): ", async (choice: string) => {
      switch (choice) {
        case "1":
          this.handleFibonacci();
          break;

        case "2":
          await this.handleFaturamentoDiario();
          break;

        case "3":
          this.handleFaturamentoPorEstado();
          break;

        case "4":
          this.handleInverterString();
          break;

        case "5":
          console.log("Encerrando a execução.");
          this.rl.close();
          break;

        default:
          console.log("Opção inválida.");
          this.showMenu();
          break;
      }
    });
  }

  private handleFibonacci() {
    this.rl.question(
      "Digite um número para verificar se pertence à sequência de Fibonacci: ",
      (num: string) => {
        const fibonacciUseCase = new FibonacciUseCase();
        console.log(fibonacciUseCase.execute(parseInt(num)));
        this.showMenu();
      }
    );
  }

  private async handleFaturamentoDiario() {
    const repository = new AxiosFaturamentoRepository();
    const faturamentoDiarioUseCase = new FaturamentoDiarioUseCase(repository);
    const result = await faturamentoDiarioUseCase.execute();
    console.table(result);
    this.showMenu();
  }

  private handleFaturamentoPorEstado() {
    const faturamentoPorEstadoUseCase = new FaturamentoPorEstadoUseCase();
    const percentuais = faturamentoPorEstadoUseCase.execute();
    console.table(percentuais);
    this.showMenu();
  }

  private handleInverterString() {
    this.rl.question("Digite uma string para inverter: ", (str: string) => {
      const inverterStringUseCase = new InverterStringUseCase();
      console.log(inverterStringUseCase.execute(str));
      this.showMenu();
    });
  }
}
