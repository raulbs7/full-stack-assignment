import { History, IHistoryRepository } from "@app/currency/domain";
import { Nullable } from "@app/utils";
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

  async findHistoryByCode(code: string): Promise<History[]> {
    const histories = await HistorySchema.find({ currencyCode: code });
    return histories.map((history) => this.toDomain(history));
  }
}
