import {
  pushClient,
  getClients,
  deleteClient,
  patchClient,
  findClientById,
  findClientByName,
} from "../../models/clients/clientsModel.js";

export const httpGetAllClients = async (req, res) => {
  const query = req.query;
  const clients = await getClients(query);
  return res.status(200).json(clients);
};

export const httpPushClient = async (req, res) => {
  const client = req.body;

  if (!client.name || !client.password || !client.clientType) {
    return res.status(400).json({
      error: "Missing required client data",
    });
  }

  const validClientName = await findClientByName({ name: client.name });

  if (validClientName) {
    return res.status(400).json({
      error: "Klijent sa istim imenom vec postoji",
    });
  }

  client.dateCreated = new Date();
  await pushClient(client);
  return res.status(200).json(client);
};

export const httpFindClientById = async (req, res) => {
  const clientId = req.params.id;
  if (!clientId) {
    return res.status(400).json("Missing client ID");
  }

  const client = await findClientById(clientId);
  if (!client) {
    return res.status(400).json("Client not found");
  }

  return res.status(200).json(client);
};

export const httpDeleteClientById = async (req, res) => {
  const clientId = req.params.id;
  if (!clientId) {
    return res.status(400).json({
      error: "Missing client ID",
    });
  }

  await deleteClient(clientId);
  return res.status(200).json("Client Deleted");
};

export const httpPatchClient = async (req, res) => {
  const client = req.body;
  if (!client.name || !client.password || !client.clientType) {
    return res.status(400).json({
      error: "Missing requried client data",
    });
  }

  const clientFormDB = await findClientByName({ name: client.name });

  if (clientFormDB && clientFormDB._id && clientFormDB._id.toString() !== client._id) {
    return res.status(400).json({
      error: "Klijent sa istim imenom vec postoji",
    });
  }

  client.dateModified = new Date();

  await patchClient(client);
  return res.status(200).json(`${client.name} modified`);
};
