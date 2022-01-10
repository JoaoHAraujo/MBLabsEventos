import { Ticket } from "../entities/Ticket";
import { getRepository, Repository } from "typeorm";

class TicketRepository {
    private ticketRepository: Repository<Ticket> = getRepository(Ticket);

    async findTickets(opt: Object) {
        const allTickets = await this.ticketRepository.find(opt);
        return allTickets;
    }

    async save(ticket: Ticket): Promise<Ticket> {
        return await this.ticketRepository.save(ticket);
    }
}