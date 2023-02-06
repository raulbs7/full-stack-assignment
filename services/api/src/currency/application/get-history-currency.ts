import { IHistoryRepository } from "../domain";
import { MongooseHistoryRepository } from "../infrastructure";

export class GetHistoryCurrency {
  private historyCurrency: IHistoryRepository;
  constructor({ historyCurrency = new MongooseHistoryRepository() }) {
    this.historyCurrency = historyCurrency;
  }

  async execute(code: string) {
    return await this.historyCurrency.findHistoryByCode(code);
  }
}
