import { Router } from "express";

// Imported routes
import { router as userRoutes } from "./user";
import { router as eventRoutes } from "./event";
import { router as ticketRoutes } from "./ticket";

const router = Router();

router.get("/", function (req, res) {
  res.status(200).send('<h1 style="text-align: center">App Online!</h1>');
});



router.use('/user', userRoutes);
router.use('/event', eventRoutes);
router.use('/ticket', ticketRoutes)

export default router;
