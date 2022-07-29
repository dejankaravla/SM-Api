import clientsDatabase from "./clientsDatabase.js";

export const getClients = async (req) => {
  return await clientsDatabase.find({ ...req });
};

export const findClientById = async (id) => {
  return await clientsDatabase.findOne({ _id: id });
};

export const findClient = async (data) => {
  return await clientsDatabase.findOne(data);
};

export const pushClient = async (client) => {
  try {
    await clientsDatabase.insertMany(client);
  } catch (error) {
    console.log(error);
  }
};

export const deleteClient = async (id) => {
  return await clientsDatabase.deleteOne({
    _id: id,
  });
};

export const patchClient = async (client) => {
  return await clientsDatabase.findOneAndUpdate(
    {
      _id: client._id,
    },
    {
      ...client,
    }
  );
};
