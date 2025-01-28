import {Router} from "express"
import {
    loginUser,
    logOutUser,
    registerUser,
    getCurrentUser
} from "../controllers/user.controllers.js";
import { verifyJWT } from "../middlewares/auth.middlewares.js";

const router = Router()

router.route('/register').post(registerUser)

router.route('/login').post(loginUser);

router.route('/logout').post(verifyJWT, logOutUser);

router.route('/current-user').get(verifyJWT, getCurrentUser);

export default router;
