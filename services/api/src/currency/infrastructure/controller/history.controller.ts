import { Request, Response } from "express";
import { DomainError } from "@app/utils";
import { GetHistoryCurrency } from "@app/currency/application/get-history-currency";

export class HistoryController {
  private getHistoryCurrency = new GetHistoryCurrency({});

  async findHistoryCurrency(req: Request, res: Response) {
    try {
      const currencyHistory = await this.getHistoryCurrency.execute(
        req.params.code
      );
      res.status(200).json({ data: currencyHistory });
    } catch (err) {
      let status = 500;
      if (err instanceof DomainError) {
        status = 400;
      }
      res.status(status).json({ data: err.message });
    }
  }
}
