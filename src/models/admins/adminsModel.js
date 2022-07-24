import adminsDatabase from "./adminsDatabase.js";

export const findAdmin = async (userName) => {
  return await adminsDatabase.findOne({ userName: userName });
};
