import { TicketController } from "../controllers/ticket";
import { Router } from "express";




const router = Router();
const ticketController = new TicketController();

router.post('/:user/:event', ticketController.save);

