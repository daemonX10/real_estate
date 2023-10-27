import express from 'express';
const router = express.Router();
import { createUser } from '../controllers/userController.js';

router.post("/register", createUser);


export {router as userRoutes}