import role from "../models/role.js"; // importamos la base de datos

const registerRole = async (req, res) => {
  if (!req.body.name || !req.body.description)
    // solo valida si no se cumple
    return res.status(400).send({ message: "Imcomplete data" }); //400 error por parte del usuario y 500 error del servidor

  let schema = new role({
    // crea un esquema basandose en rol.js que esta en mongo si se cumple haga un objeto
    name: req.body.name,
    description: req.body.description,
    dbStatus: true,
  });

  let result = await schema.save();
  if (!result)
    return res.status(500).send({ message: "Failed to register role" });

  res.status(200).send({ result });
};

const listRole = async (req, res) => {
  let roles = await role.find();
  if(roles.length === 0)
  return res.status(400).send({ message: "No search results"})

  return res.status(200).send({ roles })
}

export default { registerRole, listRole };
