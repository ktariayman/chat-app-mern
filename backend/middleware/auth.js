const jwt = require('jsonwebtoken');

const config = process.env;

const verifyToken = (req,res,next) => {
    let token = req.body.token || req.query.token || req.headers['authorization'];
    if(token) {token = token.replace(/^Bearer\s+/, "")};
    
    if (!token) {
        return res.status(401).send("a token required for this request");
    }
    try {
        token = token.replace(/^Bearer\s+/, "");
        const tokendecoded = jwt.verify(token, config.JWT_SECRET);
        req.user = tokendecoded;
      } catch (err) {
        return res.status(401).send("Invalid Token");
      }
    
      return next();
}

module.exports = verifyToken;
