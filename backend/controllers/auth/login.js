const User = require("../../models/user");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");


const login = async (req, res) => {
    try {
      const { email, password } = req.body;
  
      // check if user exists
      const user = await User.findOne({ email: email.toLowerCase() });
      // const userExists = await User.findOne({ email: email.toLowerCase() });


      // valid if password are equals
      const equalPassword = await bcrypt.compare(password, user.password);
  
      if (!user || !equalPassword) {  
        return res.status(409).send(" user not found : email or password are wrong "); 
      }
  
      
            // we will send token for the authorization & authentication

            const token = jwt.sign({
                userId : user.id,
                email
              },
              process.env.JWT_SECRET,{
                expiresIn: '24h'
              }
              )  
      res.status(201).json({
          email: user.email,
          token: token,
          username: user.username,
      });
    } catch (err) {
      return res.status(500).send("Error occured. Please try again");
    }
  };
module.exports= login;