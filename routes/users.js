var express = require('express');
var router = express.Router();
const bcrypt = require('bcryptjs');
const User = require('../models/User');
const jwt = require('jsonwebtoken');


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});


router.post('/register', async (req, res) => {   
  try{
    const {username, password} = req.body;

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const newUser = new User({username, password:hashedPassword});
    await newUser.save();
    res.status(201).json({message: 'User created'});
  }catch(err){
    res.status(500).json({err: 'Error creating user', "description":err.toString()});
  }
});

router.login('/login', async (req, res) => { 

});

router.post('/login', async function (req, res, next) => {
  try {

    const {username, password} = req.body;
    
    //Buscamos al usuario en la base de datos
    const user = await User.findOne({username});
    if(!user) return res.status(400).json({message: 'User not found'});
    

    //Comparamos la contraseña ingresada con el hash almacenado en la base de datos
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch)  return res.status(400).json({error: 'Incorrect password'});

    //Generar un JWT para la sesiòn

    const token = jwt.sign({userId: user._id}, process.env.JWT_SECRET, {expiresIn: '1h'});
    res.cookie('habitToken', token, {
      httpOnly: false, // Previene acceso desde JavaScript (XSS)
      secure: process.env.NODE_ENV === 'production', // Solo se envia en conexiones HTTPS
      sameSite: 'Strict', // Evita enviò en otros sitios
      maxAge: 7 * 24 * 60 * 60 * 1000 // Caduca en 7 dìas
    });
    res.json({message: 'User logged in', token });
  } catch (error) {
    res.status(500).json({error: 'Error loggin in', "description": error.toString() });
  }
  });



    module.exports = router;
