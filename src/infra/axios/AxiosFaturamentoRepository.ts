import axios from "axios";
import type { IFaturamento } from "../../domain/entities/IFaturamento";
import type { IFaturamentoRepository } from "../../domain/repositories/IFaturamentoRepository";

export class AxiosFaturamentoRepository implements IFaturamentoRepository {
  async getAll(): Promise<IFaturamento[]> {
    const { data } = await axios.get<IFaturamento[]>(
      "http://localhost:3000/faturamento"
    );
    return data;
  }
}
