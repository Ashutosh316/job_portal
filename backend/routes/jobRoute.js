import express from "express"
import isAuthenticated from "../middlewares/isAuth.js";
import { getAdminJobs, getAllJobs, getJobById, postJob } from "../controller/jobController.js";

const router = express.Router();
router.route("/post").post(isAuthenticated, postJob);
router.route("/get").get(isAuthenticated, getAllJobs);
router.route("/get/:id").get(isAuthenticated, getJobById);
router.route("/getAdminjobs").get(isAuthenticated, getAdminJobs);



export default router;

