import role from "../models/role.js";

const existingRole = async (req, res, next) =>{
    const roleId = await role.findOne({name: "user"})
    if(!roleId) return res.status(500).send({message: "No role was assigned"})

    // como agregar datos a un objeto en javaScript
    // req.body ---> role: roleId._id
    req.body.role = roleId._id;
    next();
}

export default { existingRole };