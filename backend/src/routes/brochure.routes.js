import { Router } from "express";
import { verifyJWT } from "../middlewares/auth.middlewares.js";
import { deleteBrochure, dowloadBrochure, getBrochures } from "../controllers/brochure.controllers.js";
import { upload } from "../middlewares/multer.middlewares.js";


const router = Router();

router.route('/add').post(verifyJWT,upload.single('document'),dowloadBrochure)
router.route('/:id').delete(verifyJWT,deleteBrochure)
router.route('/').get(getBrochures)

export default router;
