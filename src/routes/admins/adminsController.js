import { findAdmin } from "../../models/admins/adminsModel.js";

export const httpFindAdmin = async (req, res) => {
  const admin = req.query;

  if (!admin.userName) {
    return res.status(400).json({
      error: "Username is missing",
    });
  }

  if (!admin.password) {
    return res.status(400).json({
      error: "Password is missing",
    });
  }

  const adminDB = await findAdmin(admin.userName);

  if (!adminDB) {
    return res.status(400).json({
      error: "Wrong Username",
    });
  }
  if (adminDB && adminDB.password !== admin.password) {
    return res.status(400).json({
      error: "Wrong Password",
    });
  }

  return res.status(200).json({
    login: true,
  });
};
