import type { IFaturamento } from "../entities/IFaturamento";

export interface IFaturamentoRepository {
  getAll(): Promise<IFaturamento[]>;
}
