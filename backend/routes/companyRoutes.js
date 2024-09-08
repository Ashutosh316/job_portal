import express from "express"
import isAuthenticated from "../middlewares/isAuth.js";
import { getCompany, getCompanyById, registerCompany, updateCompany } from "../controller/companyController.js";
import { singleUpload } from "../middlewares/mutler.js";

const router = express.Router();

router.route("/register").post(isAuthenticated, registerCompany);
router.route("/get").get(isAuthenticated, getCompany);
router.route("/get/:id").get(isAuthenticated, getCompanyById);
router.route("/update/:id").put(isAuthenticated, singleUpload ,updateCompany);

export default router;