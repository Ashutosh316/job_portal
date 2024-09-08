import express from "express"
import { login, logout, register, updateProfile } from "../controller/userController.js";
import isAuthenticated from "../middlewares/isAuth.js";
import { singleUpload } from "../middlewares/mutler.js";


const router = express.Router();

router.route("/register").post(singleUpload,register);
router.route("/login").post(login);
router.route("/logout").get(logout);
router.route("/profile/update").post(isAuthenticated,singleUpload,updateProfile)

export default router;