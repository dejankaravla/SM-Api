import { findAdmin } from "../../models/admins/adminsModel.js";
import bcrypt from 'bcrypt'

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

  const passwordValidation = await bcrypt.genSalt().then(salt => {
    return bcrypt.hash(admin.password, salt).then(hash => {
      return bcrypt.compare(admin.password, adminDB.password).then(result => result)
    })
  })

  if (!passwordValidation) {
    return res.status(400).json({
      error: 'Wrong Password'
    })
  } else {
    return res.status(200).json(
      adminDB._id
    )
  }
};

