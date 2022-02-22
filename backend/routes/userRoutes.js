import express from "express";
import userController from "../controllers/userController.js";
import userMiddle from "../middleware/userValidate.js";
import roleMiddle from "../middleware/roleValidate.js";
const router = express.Router();

router.post("/registerUser",
userMiddle.existingUser,
roleMiddle.existingRole,
userController.registerUser);

router.get("/listUser/:name?", userController.listUser)

router.post("/login", userController.login)
//router.delete("/delete/:_id", userController.deleteUser)
router.put("/delete/:_id", userController.deleteUser)
router.put("/updateUserAdmin", userController.updateUserAdmin)


export default router;