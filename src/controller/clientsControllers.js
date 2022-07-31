import bcrypt from "bcrypt";
import clientsDatabase from "../models/clientsDatabase.js";

export const httpGetAllClients = async (req, res) => {
  const query = req.query;
  const clients = await clientsDatabase.find(query);
  return res.status(200).json(clients);
};

export const httpPushClient = async (req, res) => {
  const client = req.body;

  if (!client.name) {
    return res.status(400).json({
      error: "Missing Clients Name",
    });
  }
  if (!client.username) {
    return res.status(400).json({
      error: "Missing Clients Username",
    });
  }
  if (!client.password) {
    return res.status(400).json({
      error: "Missing Clients Password",
    });
  }
  if (!client.clientType) {
    return res.status(400).json({
      error: "Missing Clients Type",
    });
  }

  const validClientName = await clientsDatabase.findOne({ name: client.name });

  if (validClientName) {
    return res.status(400).json({
      error: "Client with this name allready exists",
    });
  }
  const validClientUsername = await clientsDatabase.findOne({ username: client.username });

  if (validClientUsername) {
    return res.status(400).json({
      error: "Client with this Username allready exists",
    });
  }

  const passwordEncryption = await bcrypt.genSalt().then((salt) => {
    return bcrypt.hash(client.password, salt).then((hash) => hash);
  });
  if (!passwordEncryption) {
    return res.status(400).json({
      error: "Password Encryption Failed",
    });
  }

  client.password = passwordEncryption;
  client.dateCreated = new Date();
  await clientsDatabase.insertMany(client);
  return res.status(200).json(client);
};

export const httpFindClientById = async (req, res) => {
  const clientId = req.params.id;
  if (!clientId) {
    return res.status(400).json("Missing client ID");
  }

  const client = await clientsDatabase.findOne({ _id: clientId });
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

  await clientsDatabase.deleteOne({ _id: clientId });
  return res.status(200).json("Client Deleted");
};

export const httpPatchClient = async (req, res) => {
  const client = req.body;
  if (!client.name) {
    return res.status(400).json({
      error: "Missing Clients Name",
    });
  }
  if (!client.clientType) {
    return res.status(400).json({
      error: "Missing Clients Type",
    });
  }

  const clientFormDB = await clientsDatabase.findOne({ _id: client._id });

  if (clientFormDB && clientFormDB._id && clientFormDB._id.toString() !== client._id) {
    return res.status(400).json({
      error: "Klijent sa istim imenom vec postoji",
    });
  }

  if (!client.password) {
    client.password = clientFormDB.password;
  } else {
    client.password = await bcrypt.genSalt().then((salt) => {
      return bcrypt.hash(client.password, salt).then((hash) => hash);
    });
  }

  if (!client.username) {
    client.username = clientFormDB.username;
  }
  client.dateModified = new Date();

  await clientsDatabase.findOneAndUpdate(
    {
      _id: client._id,
    },
    {
      ...client,
    }
  );
  return res.status(200).json(`${client.name} modified`);
};
