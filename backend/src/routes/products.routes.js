import {Router} from "express"
import {
    addProduct,
    getAllProducts
} from "../controllers/product.controllers.js";
import { verifyJWT } from "../middlewares/auth.middlewares.js";

const router = Router()

router.route('/add').post(verifyJWT,addProduct)
router.route('/').get(verifyJWT,getAllProducts)

export default router;
