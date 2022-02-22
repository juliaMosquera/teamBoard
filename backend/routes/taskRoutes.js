import express from "express";
import taskController from "../controllers/taskController.js";

const router = express.Router();

router.post("/registerTask", 
//taskMidd.idUser,
taskController.registerTask);

router.get("/listTask/:name?", taskController.listTask)

router.put("/delete/:_id", taskController.deleteTask)
router.put("/updateTask", taskController.updateTask
)
export default router;