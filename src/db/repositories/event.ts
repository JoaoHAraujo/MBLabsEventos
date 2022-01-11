import { FindOneOptions, getRepository, Repository } from "typeorm";
import { Event } from "../entities/Event";

class EventRepository {
  private eventRepository: Repository<Event> = getRepository(Event);

  async findOne(opt: FindOneOptions<Event>): Promise<Event> {
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

  async decrementQuantity(event: Event) {
    await this.eventRepository
      .createQueryBuilder("event")
      .update(Event)
      .set({ quantity: () => "quantity - 1" })
      .where("event.id = :id", { id: event.id })
      .execute();
  }
}

export default new EventRepository();
