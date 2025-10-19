import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken';
import User from '../models/userModel.js';

const authControllers = {
    signUp: async (req, res) => {
        try {
           const{firstname, lastname, email, password} = req.body;
           
           if(! firstname || !lastname || ! email || !password)
            return res.status(400).json({msg: "Please enter all fields."})

           const userExist = await User.findOne({email})
           if (userExist)
            return res.status(400).json({msg: 'User with this email already exists.'});

        //    const salt = bcrypt.genSalt('12');
        
           const hashPassword = await bcrypt.hash(password,12)

           const user = await User({
            firstname,
            lastname,
            email,
            password:hashPassword
           })
           await user.save()
           user.password = undefined

           return res.status(201).json({msg: 'User sign up was successful', data: user})
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },

    signIn: async (req, res) => {
        try {
            const {email, password} = req.body;
            if(!email || !password)
                return res
                  .status(400)
                  .json({ msg: "Please enter all fields." });

           const user = await User.findOne({ email });
           if (!user)
             return res
               .status(400)
               .json({ msg: "User does not exists." });

            const verifyPassword = await bcrypt.compare(password, user.password)
            if (!verifyPassword) 
                return res.status(400).json({ msg: "Password is incorrect." });

            const token = jwt.sign({_id: user._id}, process.env.JWT_SECRECT)

            user.password = undefined

            return res.status(200).json({msg: 'User sign in successful',token, data: user})
  

        } catch (err) {
            return res.status(500).json({ msg: err.message });
        }
    },

    logout: async (req,res)=>{
        try{
            res.clearCookie('token');
            return res.status(200).json({
                msg:'User logged out successfully'
            });
        }catch(err){
            console.error(err);
            return res.status(500).json({
                msg:'Server error during logout'
            })
        }
    }

}

export default authControllers;