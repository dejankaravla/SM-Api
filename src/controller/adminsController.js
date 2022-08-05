import bcrypt from "bcrypt";
import adminsDatabase from "../models/adminsDatabase.js";
import jwt from "jsonwebtoken";
import "dotenv/config";


const setAccesToken = (_id) => {
  const accessToken = jwt.sign({
    id: _id,
  }, process.env.ACCESS_TOKEN_SECRET, {
    expiresIn: '1h'
  })
  return accessToken
}



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

  const adminDB = await adminsDatabase.findOne({ userName: admin.userName });

  if (!adminDB) {
    return res.status(400).json({
      error: "Wrong Username",
    });
  }



  const passwordValidation = await bcrypt.genSalt().then((salt) => {
    return bcrypt.hash(admin.password, salt).then((hash) => {
      return bcrypt.compare(admin.password, adminDB.password).then((result) => result);
    });
  });

  if (!passwordValidation) {
    return res.status(400).json({
      error: "Wrong Password",
    });
  } else {
    const accessToken = setAccesToken(adminDB._id)

    return res.status(200).json({
      _id: adminDB._id,
      admin: adminDB.name,
      accessToken: accessToken
    });
  }
};

// const createAdmin = async () => {
//   const admin = {
//     userName: "dejankaravla",
//     name: "Dejan",
//     type: "Admin",
//     password: "aleksamarija",
//   };
//   const newPassword = await bcrypt.genSalt().then((salt) => {
//     return bcrypt.hash(admin.password, salt).then((hash) => {
//       return hash;
//     });
//   });

//   admin.password = newPassword;
//   await adminsDatabase.create(admin);
// };

// createAdmin();
