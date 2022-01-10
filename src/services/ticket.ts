import { Event } from "../db/entities/Event";
import { Ticket } from "../db/entities/Ticket";
import { User } from "../db/entities/User";

import ticketRepository from "../db/repositories/ticket";
import EventService from "./event";
import UserService from "./user";

export class TicketService {
  // CHECK IF TICKET EXISTS
  public async ticketExists(ticket: Ticket) {
    try {
      const opt = {
        where: [{ code: ticket.code }],
      };
      const currentTicket = await ticketRepository.findTickets(opt);
      return currentTicket;
    } catch (error) {}
  }

  // GENERATE CODE FOR TICKET
  public async generateCode(ticket: Ticket, event: Event) {
    try {
      let generatedCode = `${event.abbreviation}-${
        Math.floor(Math.random() * 90000) + 10000
      }`;

      ticket.code = generatedCode;
      let teste = await this.ticketExists(ticket)
      if (teste[0]) {
        do {
          ticket.code = `${event.abbreviation}-${
            Math.floor(Math.random() * 90000) + 10000
          }`
        } while (await this.ticketExists(ticket));
      }
      return ticket.code;
    } catch ({ message }) {
      throw new Error(message);
    }
  }

  // CREATE NEW TICKET
  public async buyTicket(user: User, event: Event) {
    try {
      const currentUser = (await UserService.userExists(user)).profile_type;
      await EventService.eventExists(event);

      // if (NOT COMMON USER)
      if (currentUser != 1) {
        throw new Error("ERRO! -> Usuário sem permissão para essa ação");
      }

      // *** INSERT CODE FOR PAYMENT ***

      // After payment:

      await EventService.soldTicket(event);

      const ticket = new Ticket();
      ticket.buy_date = new Date();
      ticket.event_id = event.id;
      ticket.buyer_id = user.id;
      await this.generateCode(ticket, event);

      await ticketRepository.save(ticket);

      return {
        message: "Compra efetuada com sucesso!",
        data: [
          event.title,
          event.description,
          event.date,
          event.location,
          ticket.code,
        ],
      };
    } catch ({ message }) {
      throw new Error(message);
    }
  }

  public async getUsersTickets() {}

  public async getEventTickets() {}
}

export default new TicketService();
