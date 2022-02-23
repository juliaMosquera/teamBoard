import task from "../models/task.js";
import jwt from "jsonwebtoken";
import moment from "moment";

const registerTask = async (req, res) => {
    if(!req.body.name || !req.body.description || !req.body.taskStatus || !req.body.imageUrl)
    return res.status(400).send({ message: "Incomplete data"})

let taskSchema = new task({
    name: req.body.name,
    description: req.body.description,
    imageUrl: "vacio",
    taskStatus: req.body.taskStatus,
    user: req.body.user
  });

  const result = await taskSchema.save();

  if(!result) return res.status(500).send({ message: "Failed to register task"});

  try {
    return res.status(200).json({
        token: jwt.sign({
            _id: result._id,
            user: result.user,
            name: result.name,
            description: result.description,
            iat: moment().unix()
        },
        process.env.SK_JWT
        ),
    });
  } catch (e) {
      return res.status(500).send({message: "Register error"});
  }

};

const listTask = async (req, res)=>{
    let tasks = await task.find({name: new RegExp(req.params["name"])})
    .populate("name")
    .exec();
  
    if(tasks.length === 0)
    return res.status(400).send({ message: "No search results"})
    return res.status(200).send({tasks})
  
  }

const deleteTask = async (req, res) => {
    if(!req.params["_id"])
    return res.status(400).send({ message: "Incomplete data"})

    const tasks = await task.findByIdAndDelete(req.params["_id"])

    return !tasks
    ? res.status(400).send({message: "Error deleting task"})
    : res.status(200).send({ message: "Task deleted"})
};

  const updateTask = async (req, res) => {
    if(!req.body._id || !req.body.imageUrl || !req.body.description)
    return res.status(400).send({message: "Incomplete data"})
  
    const editTask = await task.findByIdAndUpdate(req.body._id, {
      imageUrl: req.body.imageUrl,
      taskStatus: req.body.taskStatus
    })
    if(!editTask) return res.status(500).send({ message: "Error editing task"})
    return res.status(200).send({message: "Task update"})
  }

export default {registerTask, deleteTask, listTask, updateTask}