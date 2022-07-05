const db = require("../models");
const config = require("../config/authconfig");
const User = db.USER;

const ROLES = db.ROLES;


const Op = db.Sequelize.Op;

const jwt = require("jsonwebtoken");
const bcrypt = require('bcrypt');
const { privateKey } = require("../config/authconfig");



exports.signup =  (req, res) => {
  // Enregistrer user dans db
  try {
    const user =  User.create({

      Login: req.body.Login,
      Mot:req.body.Mot,
      Password: bcrypt.hashSync(req.body.Password, 8),

    });
  

    if (req.body.ROLES) {
      const roles =  ROLES.findAll({
        where: {
          Login: {
            [Op.or]: req.body.ROLES,
          },
        },
      });

      const result = user.setRoles(roles);
      if (result) res.send({ message: "User registered successfully!" });
    } else {
      // user role = 1
      const result = user.setRoles([1]);
      if (result) res.send({ message: "User registered successfully!" });
    }
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};




exports.signin = (req, res) => {    
    User.findOne({
      where: {
        Mot: req.body.Mot,
      },
      
    })
    .then( user => {
      if (!user) {
        return res.status(404).send({ message: "Mot Not found." });
      }
  
      const passwordIsValid = bcrypt.compareSync(
        req.body.password,
        user.password
  
        
      );
  
      // res.status(200).json("connecter")
      
      if (!passwordIsValid) {
        return res.status(401).send({
          accessToken: null,
          message: "Invalid Password!",
        });
      }

  
      const token = jwt.sign({ id: user.id }, "test" ,{
        expiresIn: 86400, // 24 heures
  
  
      });
      // res.status(200).json({token})
  console.log(token);
  
      let authorities = [];
  
      const roles =  user.getRoles();
  
  
      for (let i = 0; i < roles.length; i++) {
        authorities.push("ROLE_" + roles[i].name.toUpperCase());
      }
      console.log('toto');
      res.status(200).send({
        id: user.id,
       
        roles: authorities,
        role : roles,
        accessToken: token
      });
  
      // req.session.token = token;
  
     
    })
    .catch(err => { 
      res.status(500).send({message: err.message})
    })
    }

    


exports.signout =  (req, res) => {
  try {
    req.session = null;
    return res.status(200).send({
      message: "You've been signed out!"
    });
  } catch (err) {
    this.next(err);
  }
}
