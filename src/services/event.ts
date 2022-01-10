import eventRepository from "../db/repositories/event";
import UserService from "./user";
import { Event } from "../db/entities/Event";
import { User } from "../db/entities/User";

export class EventService {

  // CHECKS IF EVENT EXISTS BY ID
  public async eventExists(event: Event) {
    try {
      const opt = {
        where: [{ id: event.id }],
      };
      const currentEvent = await eventRepository.findOne(opt);
      if (!currentEvent) {
        throw new Error("ID de evento inexistente!");
      }
      return currentEvent;
    } catch ({ message }) {
      throw new Error(`ERRO! -> ${message}`);
    }
  }

  // FIND ALL EVENTS
  public async findAll() {
    try {
      const allEvents = await eventRepository.findAll();
      return {
        message: `Foram encontrados ${allEvents.length} eventos`,
        data: allEvents,
      };
    } catch ({ message }) {
      throw new Error(message);
    }
  }

  // CREATE NEW EVENT
  public async createEvent(event: Event, owner: User) {
    try {
      const currentUser = (await UserService.userExists(owner)).profile_type;

      // if (NOT COMPANY)
      if (currentUser != 2) { 
        throw new Error("ERRO! -> Usuário sem permissão para essa ação!");
      }
      event.owner_id = owner.id;
      const createdEvent = await eventRepository.save(event);
      return { message: "Evento criado com sucesso!", data: createdEvent };
    } catch ({ message }) {
      throw new Error(message);
    }
  }

  // UPDATE EVENT
  public async updateEvent(user: User, event: Event) {
    try {
      await UserService.userExists(user);
      const currentEvent = await this.eventExists(event);
      
      if (user.id != currentEvent.owner_id) { // if NOT OWNER
        throw new Error("ERRO! -> Usuário sem permissão para essa ação!");
      }
      
      currentEvent.title = event.title ? event.title : currentEvent.title;

      currentEvent.description = event.description ? event.description : currentEvent.description;

      currentEvent.date = event.date ? event.date : currentEvent.date;

      currentEvent.location = event.location ? event.location : currentEvent.location;

      currentEvent.quantity = event.quantity ? event.quantity : currentEvent.quantity;

      currentEvent.price = event.price ? event.price : currentEvent.price;

      currentEvent.abbreviation = event.abbreviation ? event.abbreviation : currentEvent.abbreviation;


      const updatedEvent = await eventRepository.save(currentEvent)
      return {message:'Evento atualizado com sucesso!', data:updatedEvent};

    } catch ({message}) {
      throw new Error(message)
    }
  }


  // DELETE EVENT
  public async deleteEvent(user: User, event: Event) {
    try {
      await UserService.userExists(user);
      const currentEvent = await this.eventExists(event);

      if (user.id != currentEvent.owner_id) { // if NOT OWNER
        throw new Error("ERRO! -> Usuário sem permissão para essa ação!");
      }
      await eventRepository.delete(event);
      return { message: "Evento apagado com sucesso!", data: currentEvent };
    } catch (message) {
      throw new Error(message);
    }
  }
}

export default new EventService();
