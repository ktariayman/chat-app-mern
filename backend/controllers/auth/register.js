const User = require("../../models/user");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const postRegister = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    // check if user exists
    const userExists = await User.exists({ email: email.toLowerCase() });
    // const userExists = await User.findOne({ email: email.toLowerCase() });

    if (userExists) {
      return res.status(409).send("Error registering user : email already registered "); 
    }

    // encrypt password
    const encryptedPassword = await bcrypt.hash(password, 10);

    // create user document and save in database
    const user = await User.create({
      username,
      email: email.toLowerCase(),
      password: encryptedPassword,
    });

    // create JWT token
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

module.exports = postRegister;
