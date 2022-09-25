import jwt from "jsonwebtoken";
import "dotenv/config";
import adminsDatabase from "../models/adminsDatabase.js";

export const verigyJWT = (req, res) => {
  const token = req.headers["x-access-token"];
  if (token === null) {
    res.status(400).json("No Token");
  } else {
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, async (error, decoded) => {
      if (error) {
        console.log(error);
        res.status(400).json({ auth: false, message: "faild to auth" });
      } else {
        const admin = await adminsDatabase.findOne({ _id: decoded.id });

        res.status(200).json({
          _id: admin._id,
          admin: admin.name,
        });
      }
    });
  }
};
