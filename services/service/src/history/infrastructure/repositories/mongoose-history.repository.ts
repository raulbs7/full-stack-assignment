import { Nullable } from "src/utils";
import { History, IHistoryRepository } from "../../../history";
import HistorySchema from "../schema/mongoose-history.schema";
export class MongooseHistoryRepository implements IHistoryRepository {
  private toDomain(historyDB) {
    return History.fromPrimitives({
      id: historyDB._id,
      currencyCode: historyDB.currencyCode,
      date: historyDB.date,
      open: historyDB.open,
      close: historyDB.close,
      high: historyDB.high,
      low: historyDB.low,
    });
  }

  private fromDomain(history: History) {
    return {
      _id: history.id,
      currencyCode: history.currencyCode,
      date: history.date,
      open: history.open,
      close: history.close,
      high: history.high,
      low: history.low,
    };
  }

  async findHistoryByCodeAndDate(
    code: string,
    date: Date
  ): Promise<Nullable<History>> {
    const history = await HistorySchema.findOne({
      currencyCode: code,
      date: date,
    });
    return history === null ? null : this.toDomain(history);
  }

  async updateHistory(history: History): Promise<void> {
    const document = this.fromDomain(history);
    await HistorySchema.updateOne({ _id: history.id }, { $set: document });
  }

  async createHistory(history: History): Promise<void> {
    const document = this.fromDomain(history);
    await HistorySchema.create(document);
  }
}
