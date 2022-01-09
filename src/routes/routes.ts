import { Router } from "express";

// Imported routes
import { router as userRoutes } from "./user";

const router = Router();

router.get("/", function (req, res) {
  res.status(200).send('<h1 style="text-align: center">App Online!</h1>');
});



router.use('/user', userRoutes);

export default router;
