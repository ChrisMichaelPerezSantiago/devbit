const jwt = require('jsonwebtoken');
const config = require('../config');

/**
 * Middleware Token (Authorization)
 * 
 * This middleware can be used on those routes that require authorization for the user to access.
 * The req has access to the user, for example:
 *
 * router.get('/' , verifyToken , (req , res) => { res.send(req.user)})
 *   
 **/

module.exports = function(req , res , next){
  const userToken = req.header('Auth-Token');
  if(!userToken){
    return res.status(401).send('Access Denied!');
  }
  try{
    const tokenVerified = jwt.verify(userToken , config.TOKEN_SECRET);
    req.user = tokenVerified;
    next();
  }catch(err){
    res.status(400).send('Invalid Token!')
  }
};