export class FaturamentoPorEstadoUseCase {
  execute(): { [key: string]: string } {
    const estados = {
      SP: 67836.43,
      RJ: 36678.66,
      MG: 29229.88,
      ES: 27165.48,
      Outros: 19849.53,
    };

    const totalFaturamento = Object.values(estados).reduce(
      (acc, val) => acc + val,
      0
    );

    const percentuais: { [key: string]: string } = {};

    Object.entries(estados).forEach(([estado, valor]) => {
      const percentual = ((valor / totalFaturamento) * 100).toFixed(2);
      percentuais[estado] = `${percentual}%`;
    });

    return percentuais;
  }
}
