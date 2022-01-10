import { User } from "../db/entities/User";
import { Request, Response } from "express";
import TicketService from "services/ticket";

export class TicketController {
  async save(req: Request, res: Response) {
    try {
      const user: User = { id: req.params.user_id };
      const event = { id: req.params.event_id };
      const result = await TicketService.buyTicket(user, event);
      return res.json(result);
    } catch ({ message }) {
      return res.status(400).json(message);
    }
  }
}
