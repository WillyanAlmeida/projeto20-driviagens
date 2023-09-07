import { Router } from "express"

import allRouter from "./all.routes.js";


const router = Router();


router.use(allRouter);


export default router;