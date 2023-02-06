import { History } from "../models/history";

export interface IHistoryRepository {
  findHistoryByCode(code: string): Promise<History[]>;
}
