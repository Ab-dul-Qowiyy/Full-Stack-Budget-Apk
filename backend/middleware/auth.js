import jwt from "jsonwebtoken";
import User from "../models/userModel.js";

const auth = (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization)
    return res
      .status(403)
      .json({ msg: "unauthorized User. Permission Denied" });

      const token = authorization.replace('Bearer ', '');
      jwt.verify(token, process.env.JWT_SECRECT, async (err, payload) =>{
        if(err)
            return res
              .status(403)
              .json({ msg: "unauthorized User. Request Denied" });

        const { _id } = payload;
        const userData = await User.findById(_id)  
        req.User = userData;
        next()   
      })
};

export default auth;
