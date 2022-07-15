import usersDatabase from "./usersDatabase.js";

export const findUser = async (id) => {
  return await usersDatabase.findOne({ id })
}

export const pushUser = async (user) => {

  try {
    await usersDatabase.updateOne({
      ...user
    }, { ...user }, {
      upsert: true
    })
  } catch (error) {
    console.log(error);
  }
}

export const getUsers = async () => {
  return await usersDatabase.find({})
}

export const deleteUser = async (id) => {
  return await usersDatabase.deleteOne({
    _id: id
  })
}