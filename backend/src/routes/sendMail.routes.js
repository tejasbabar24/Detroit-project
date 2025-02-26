import {Router} from "express"
import { verifyJWT } from "../middlewares/auth.middlewares.js";
import {sendEmail} from "../controllers/sendmail.controllers.js"
const router = Router()

router.route('/sendmail').post(sendEmail)

export default router;