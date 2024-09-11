import type { IFaturamentoRepository } from "../../domain/repositories/IFaturamentoRepository";

export class FaturamentoDiarioUseCase {
  constructor(private faturamentoRepository: IFaturamentoRepository) {}

  async execute(): Promise<{
    menorValor: number;
    maiorValor: number;
    diasAcimaMedia: number;
  }> {
    const faturamentos = await this.faturamentoRepository.getAll();

    const validDays = faturamentos.filter((day) => day.valor > 0);
    const totalFaturamento = validDays.reduce((acc, day) => acc + day.valor, 0);
    const mediaMensal = totalFaturamento / validDays.length;

    const menorValor = Math.min(...validDays.map((day) => day.valor));
    const maiorValor = Math.max(...validDays.map((day) => day.valor));
    const diasAcimaMedia = validDays.filter(
      (day) => day.valor > mediaMensal
    ).length;

    return {
      menorValor,
      maiorValor,
      diasAcimaMedia,
    };
  }
}
