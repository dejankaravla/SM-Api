import { pushUser, getUsers, deleteUser } from "../../models/users/usersModel.js";

export const httpGetAllUsers = async (req, res) => {
  const users = await getUsers()
  return res.status(200).json(users)
}

export const httpPushUsers = async (req, res) => {
  const user = req.body

  if (!user.name || !user.password || !user.userType) {
    return res.status(400).json({
      error: 'Missing required user data'
    })
  }

  user.dateCreated = new Date;
  await pushUser(user)
  return res.status(200).json(user)
}

export const httpDeleteUser = async (req, res) => {
  const user = req.body

  if (!user._id) {
    return res.status(400).json({
      error: 'Missing required user data'
    })
  }

  await deleteUser(user)
  return res.status(200).json(user)
}