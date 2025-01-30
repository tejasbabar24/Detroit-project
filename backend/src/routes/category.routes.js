import {Router} from "express"
import {
    addCategory
} from "../controllers/category.controllers.js";
import { verifyJWT } from "../middlewares/auth.middlewares.js";

const router = Router()

router.route('/add').post(verifyJWT,addCategory)

export default router;
