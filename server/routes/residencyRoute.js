import express from 'express';
const router = express.Router();
// eslint-disable-next-line
import { createResidency, getAllResidencies, getResidency } from '../controllers/residencyController.js';

router.post("/create",createResidency)
router.get("/allres",getAllResidencies )
router.get("/res/:id",getResidency )


export { router as residencyRoutes }