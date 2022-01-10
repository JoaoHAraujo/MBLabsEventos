import { EventController } from "../controllers/event";
import { Router } from "express";



const router = Router();
const eventController = new EventController();

router.get('/', eventController.getAll);

router.post('/:owner_id', eventController.save);

router.put('/:owner_id/:event_id', eventController.update)

router.delete('/:owner_id/:event_id', eventController.softDelete);


export { router };