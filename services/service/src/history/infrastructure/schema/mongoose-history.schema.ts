import { model, Schema } from "mongoose";

const HistorySchema = new Schema(
  {
    currencyCode: String,
    date: Date,
    open: Number,
    high: Number,
    low: Number,
    close: Number,
  },
  {
    timestamps: true,
  }
);

export default model("History", HistorySchema);
