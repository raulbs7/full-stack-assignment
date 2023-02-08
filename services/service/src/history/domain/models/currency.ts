import { Types } from "mongoose";
import {
  CurrencyAlreadySubscribedError,
  CurrencyNotSubscribedError,
  IncorrectCurrencyError,
} from "../errors";

export class Currency {
  private _id: Types.ObjectId;
  private _code: string;
  private _hasSubscription: boolean;

  private constructor({ id, code, hasSubscription }) {
    this._id = id;
    this._code = code;
    this._hasSubscription = hasSubscription;
  }

  static fromPrimitives({ id, code, hasSubscription }) {
    return new Currency({
      id: id,
      code: code,
      hasSubscription: hasSubscription,
    });
  }

  static create({ id = new Types.ObjectId(), code, hasSubscription = true }) {
    if (!code) {
      return IncorrectCurrencyError.withCode(code);
    }

    return new Currency({
      id: id,
      code: code,
      hasSubscription: hasSubscription,
    });
  }

  get id(): Types.ObjectId {
    return this._id;
  }

  get code(): string {
    return this._code;
  }

  get hasSubscription(): boolean {
    return this._hasSubscription;
  }

  subscribe() {
    if (this.hasSubscription) {
      return CurrencyAlreadySubscribedError.withCode(this._code);
    }

    this._hasSubscription = true;
  }

  unsubscribe() {
    if (!this.hasSubscription) {
      return CurrencyNotSubscribedError.withCode(this._code);
    }

    this._hasSubscription = false;
  }
}
