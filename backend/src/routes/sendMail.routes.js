import {Router} from "express"
import { verifyJWT } from "../middlewares/auth.middlewares.js";
import {sendMail} from "../controllers/sendmail.controllers.js"
const router = Router()

router.route('/sendmail').post(sendMail)

export default router;