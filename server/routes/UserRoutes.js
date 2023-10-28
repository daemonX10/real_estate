import express from 'express';
const router = express.Router();
import { bookVisit, cancelBooking, createUser, getAllBookings, getAllFav, toFav } from '../controllers/userController.js';

router.post("/register", createUser);
router.post("/bookvisit/:id", bookVisit )
router.post("/allBookings", getAllBookings)
router.post('/removeBooking/:id',cancelBooking);
router.post('/toFav/:rid',toFav);
router.post('/allFav',getAllFav);


export {router as userRoutes}