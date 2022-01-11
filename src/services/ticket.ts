import { Event } from "../db/entities/Event";
import { Ticket } from "../db/entities/Ticket";
import { User } from "../db/entities/User";

import ticketRepository from "../db/repositories/ticket";
import EventService from "./event";
import UserService from "./user";

export class TicketService {
  // CHECK IF TICKET EXISTS
  public async ticketExistsByCode(code: string, event_id: string) {
    try {
      const opt = {
        where: { code, event_id },
      };
      const currentTicket = await ticketRepository.findOne(opt);

      return currentTicket;
    } catch (message) {
      throw new Error(message);
    }
  }

  // GENERATE CODE FOR TICKET
  public async generateCode(event: Event) {
    try {
      let codeExists;
      let generatedCode;
      do {
        const { abbreviation, id } = event;
        const randomCode = Math.floor(Math.random() * 90000) + 10000;
        generatedCode = `${abbreviation}-${randomCode}`;

        codeExists = await this.ticketExistsByCode(generatedCode, id);

      } while (!!codeExists);

      return generatedCode;
    } catch ({ message }) {
      throw new Error(message);
    }
  }

  // CREATE NEW TICKET
  public async buyTicket(user: User, event: Event) {
    try {
      const { profile_type } = await UserService.userExists(user);
      const currentEvent = await EventService.eventExists(event);

      // if (NOT COMMON USER)
      if (profile_type != 1) {
        throw new Error("ERRO! -> Usuário sem permissão para essa ação");
      }

      // *** INSERT CODE FOR PAYMENT ***

      // After payment:

      await EventService.soldTicket(currentEvent);
      const randomCode = await this.generateCode(currentEvent);

      const ticket: Ticket = {
        buy_date: new Date(),
        event_id: event.id,
        buyer_id: user.id,
        code: randomCode,
      };

      const { code } = await ticketRepository.save(ticket);

      const { title, description, date, location } = currentEvent;
      return {
        message: "Compra efetuada com sucesso!",
        data: [
          {
            title,
            description,
            date,
            location,
            code,
          },
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
