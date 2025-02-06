import {Router} from "express"
import {
    addProduct,
    deleteProduct,
    getAllProducts
} from "../controllers/product.controllers.js";
import { upload } from "../middlewares/multer.middlewares.js";
import { verifyJWT } from "../middlewares/auth.middlewares.js";

const router = Router()

router.route('/add').post(verifyJWT,upload.single("productImage"),addProduct)
router.route('/').get(verifyJWT,getAllProducts)
router.route('/:id').delete(verifyJWT,deleteProduct)

export default router;
