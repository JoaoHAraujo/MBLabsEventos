import { Ticket } from "../entities/Ticket";
import { FindManyOptions, FindOneOptions, getRepository, Repository } from "typeorm";

class TicketRepository {
    private ticketRepository: Repository<Ticket> = getRepository(Ticket);

    async findTickets(opt: FindManyOptions<Ticket>) {
        const tickets = await this.ticketRepository.find(opt);
        return tickets;
    }

    async findOne(opt: FindOneOptions<Ticket>) {
        const tickets = await this.ticketRepository.findOne(opt);
        return tickets;
    }

    async save(ticket: Ticket): Promise<Ticket> {
        return await this.ticketRepository.save(ticket);
    }
}

export default new TicketRepository();