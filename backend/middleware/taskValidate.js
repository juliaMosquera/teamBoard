import user from "../models/user.js";

const existingIdUser = async (req,res,next) => {
    const userId = await user.findOne({name: "Juanito jaramillo"})
    if(!userId) return res.status(500).send({message: "No user was assigned"})

    req.body.user = userId._id;
    next();
}

export default { existingIdUser }