import { User } from "../db/entities/User";
import { Request, Response } from "express";
import EventService from "../services/event";

export class EventController {
  async save(req: Request, res: Response) {
    try {
      const owner: User = { id: req.params.owner_id };

      const currentEvent = req.body;

      const result = await EventService.createEvent(currentEvent, owner);
      return res.json(result);
    } catch ({ message }) {
      return res.status(400).json(message);
    }
  }

  async getAll(req: Request, res: Response) {
    try {
      const result = await EventService.findAll();
      return res.json(result);
    } catch ({ message }) {
      return res.status(400).json(message);
    }
  }

  async update(req: Request, res: Response) {
    try {
      const user = { id: req.params.owner_id };
      const event_id = req.params.event_id;
      const { title, desciption, date, location, quantity, price, abbreviation } = req.body;
      const event = {id: event_id, title, desciption, date, location, quantity, price, abbreviation}
      

      const result = await EventService.updateEvent(user, event);

      return res.json(result);
    } catch ({ message }) {
      return res.status(400).json(message);
    }
  }

  async softDelete(req: Request, res: Response) {
    try {
      const user = { id: req.params.owner_id };
      const event = { id: req.params.event_id };
      const result = await EventService.deleteEvent(user, event);

      return res.json(result);
    } catch ({ message }) {
      return res.status(400).json(message);
    }
  }
}
