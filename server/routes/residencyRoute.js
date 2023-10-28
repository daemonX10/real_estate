import express from 'express';
const router = express.Router();
// eslint-disable-next-line
import { createResidency ,getAllResidencies } from '../controllers/residencyController.js';

router.post("/create",createResidency)
router.post("/getresd",getAllResidencies )


export { router as residencyRoutes }