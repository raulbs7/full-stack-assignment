import { HistoryApi } from "./../../utils/models/history-api.interface";
import { IHistoryRepository } from "../domain";
import { History } from "../domain";
import { MongooseHistoryRepository } from "../infrastructure";

export class UpdateHistoryCurrency {
  private historyRepository: IHistoryRepository;
  constructor({ historyRepository = new MongooseHistoryRepository() }) {
    this.historyRepository = historyRepository;
  }

  async execute(code: string, date: string, data: HistoryApi) {
    const history = await this.historyRepository.findHistoryByCodeAndDate(
      code,
      new Date(date)
    );
    
    if (history) {
      await this.historyRepository.updateHistory(history);
      return history;
    }

    const newHistory = History.create({
      currencyCode: code,
      date: date,
      open: data["1. open"],
      high: data["2. high"],
      low: data["3. low"],
      close: data["4. close"],
    });
    await this.historyRepository.createHistory(newHistory as History);
    return newHistory;
  }
}
