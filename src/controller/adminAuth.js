import jwt from "jsonwebtoken";
import "dotenv/config";

export const verigyJWT = (req, res) => {
  const token = req.headers["x-access-token"]
  if (token === null) {
    res.status(400).json('No Token')
  } else {
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (error, decoded) => {
      if (error) {
        console.log(error);
        res.status(400).json({ auth: false, message: 'faild to auth' })
      } else {
        res.status(200).json({})
      }
    })
  }
}