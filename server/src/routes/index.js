import express from "express";
import userRoute from "./user.route.js";
import personRoute from "./person.route.js" 
import reviewRoute from "./review.route.js"
import mediaRoute from "./media.route.js" 

 
const router = express.Router();
router.use("/user", userRoute);
router.use("/preson", personRoute);
router.use("/reviwes", reviewRoute);
router.use("/:mediaType", mediaRoute);

export default router;
