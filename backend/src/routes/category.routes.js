import {Router} from "express"
import {
    addCategory,
    getCategories
} from "../controllers/category.controllers.js";
import { verifyJWT } from "../middlewares/auth.middlewares.js";

const router = Router()

router.route('/add').post(verifyJWT,addCategory)
router.route('/').get(verifyJWT,getCategories)

export default router;
