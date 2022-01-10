import { getRepository, Repository } from "typeorm";
import { Event } from "../entities/Event";


class EventRepository {
    private eventRepository: Repository<Event> = getRepository(Event);

    async findOne(opt: Object): Promise<Event> {
        const existentEvent = await this.eventRepository.findOne(opt);
        return existentEvent;
      }

    async findAll() {
        const allEvents = await this.eventRepository.find();
        return allEvents;
    }

    async save(event: Event): Promise<Event> {
        return await this.eventRepository.save(event);
    }

    async delete(event: Event) {
        await this.eventRepository.softDelete(event);
    }
}


export default new EventRepository();