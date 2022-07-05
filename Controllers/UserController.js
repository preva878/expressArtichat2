const db = require("../Models")
const USER = db.USER
const Op = db.Sequelize.Op

exports.create = (req, res) => {
       // Validate request
       if (!req.body.Login) {
        res.status(400).send({
          message: "Content can not be empty!"
        });
        return;
      }
      // Create a User
      const User = {
        Login: req.body.Login,
        Password: req.body.Password,
        Mot:req.body.Mot,
        
    
      };
      // Save User in the database
      User.create(User)
        .then(data => {
          res.send(data);
        })
        .catch(err => {
          res.status(500).send({
            message:
              err.message || "error"
          });
        });
     };



exports.findAll = (req, res) => {
    const Login = req.query.Login;
    let condition = Login ? { Login: { [Op.like]: `%${Login}%` } } : null;
    USER.findAll({ where: condition })
      .then(data => {
        res.send(data);
        console.log('ok');
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "error."
        });
      });
};