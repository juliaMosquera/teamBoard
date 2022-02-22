import task from "../models/task.js";

const idUser = async (req, res, next) =>{
    const userId = await task.findOne({name: "task"})
    if(!userId) return res.status(500).send({message: "No user was assigned"})

    req.body.user = userId._id;
    next();
}

export default { idUser }