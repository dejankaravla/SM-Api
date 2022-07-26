import adminsDatabase from "./adminsDatabase.js";
import bcrypt from 'bcrypt'

export const findAdmin = async (userName) => {
  return await adminsDatabase.findOne({ userName: userName });
};

export const createAdmin = async (admin) => {
  const newPassword = await bcrypt.genSalt().then((salt) => {
    return bcrypt.hash(admin.password, salt).then(hash => {
      return hash
    })
  })

  admin.password = newPassword
  await adminsDatabase.create(admin)
}

// const newAdmin = {
//   userName: 'dejan',
//   password: 'aleksamarijadejankaravla'
// }

// createAdmin(newAdmin)