import bcrypt from "bcrypt";
import adminsDatabase from "../models/adminsDatabase.js";

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
    console.log(adminDB);
    return res.status(200).json({
      _id: adminDB._id,
      admin: adminDB.name,
    });
  }
};

// const createAdmin = async () => {
//   const admin = {
//     userName: "sasamorar",
//     name: "Sale",
//     type: "Admin",
//     password: "stasadaca",
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
