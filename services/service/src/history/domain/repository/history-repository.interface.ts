import { Nullable } from "src/utils";
import { History } from "../models/history";

export interface IHistoryRepository {
  findHistoryByCodeAndDate(
    code: string,
    date: Date
  ): Promise<Nullable<History>>;
  updateHistory(history: History): Promise<void>;
  createHistory(history: History): Promise<void>;
}
