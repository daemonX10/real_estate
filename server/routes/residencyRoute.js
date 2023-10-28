import express from 'express';
const router = express.Router();
import { createResidency } from '../controllers/residencyController.js';

router.post("/create",createResidency)


export { router as residencyRoutes }