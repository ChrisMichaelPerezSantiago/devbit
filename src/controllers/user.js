const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('../config');
const {User , registerValidation , loginValidation} = require('../model/User/index');


exports.login = async(req , res) =>{
  const {error} = loginValidation(req.body);
  if(error){
    return res.status(400).send(error.details[0].message);
  }
  const user = await User.findOne({email: req.body.email});
  if(!user){
    return res.status(400).send('Email or password is wrong!');
  }
  const validPassword = await bcrypt.compare(req.body.password , user.password);
  if(!validPassword){
    return res.status(400).send('Invalid password!')
  }
  const token = jwt.sign({_id: user._id} , config.TOKEN_SECRET);
  res.header('Auth-Token', token).send({user: user , token: token});
  //res.send('Logged In!!');
};

exports.signup = async(req, res) => {
  const {error} = registerValidation(req.body);
  if(error){
    return res.status(400).send(error.details[0].message);
  }
  const emailExist = await User.findOne({email: req.body.email});
  if(emailExist){
    return res.status(400).send('Email already exists in the database!')
  }
  const salt = await bcrypt.genSalt(10);
  const hashPassword = await bcrypt.hash(req.body.password , salt);
  const user = new User({
    name: req.body.name,
    email: req.body.email,
    password: hashPassword
  });
  try{
    const saveUser = await user.save();
    res.send(saveUser);
  }catch(err){
    res.status(404).send(err);
  }
};