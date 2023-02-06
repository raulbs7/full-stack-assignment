import { Types } from "mongoose";
import { IncorrectCurrencyError } from "../errors";

export class History {
  private _id: Types.ObjectId;
  private _currencyCode: string;
  private _date: Date;
  private _open: Number;
  private _close: Number;
  private _high: Number;
  private _low: Number;

  private constructor({ id, currencyCode, date, open, high, low, close }) {
    this._id = id;
    this._currencyCode = currencyCode;
    this._date = date;
    this._open = open;
    this._close = close;
    this._high = high;
    this._low = low;
  }

  static fromPrimitives({ id, currencyCode, date, open, high, low, close }) {
    return new History({
      id: id,
      currencyCode: currencyCode,
      date: date,
      open: open,
      close: close,
      high: high,
      low: low,
    });
  }

  static create({
    id = new Types.ObjectId(),
    currencyCode,
    date,
    open,
    high,
    low,
    close,
  }) {
    if (!currencyCode) {
      return IncorrectCurrencyError.withCode(currencyCode);
    }

    return new History({
      id: id,
      currencyCode: currencyCode,
      date: date,
      open: open,
      close: close,
      high: high,
      low: low,
    });
  }

  get id(): Types.ObjectId {
    return this._id;
  }

  get currencyCode(): string {
    return this._currencyCode;
  }

  get date(): Date {
    return this._date;
  }

  get open(): Number {
    return this._open;
  }

  get close(): Number {
    return this._close;
  }

  get high(): Number {
    return this._high;
  }

  get low(): Number {
    return this._low;
  }
}
