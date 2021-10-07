const models = require("../models/index");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const jwt_secret = "202217";

class UserController {

  async authenticateUser(req, res) {

    try {
      const user_response = await models.User.findOne({ where: { email_user: req.body.email_user } });

      if (user_response) {
        const correct = await bcrypt.compareSync(req.body.password_user, user_response.password_user);
        if (correct) {
          jwt.sign({ id: user_response.id, email: user_response.email_user }, jwt_secret, { expiresIn: '48h' }, (err, token) => {
            if (err) {
              res.status(500).send({
                message: "Internal error server-token",
              });
            } else {
              res.status(200).send({
                message: "user authenticated successfully",
                user_authenticated: user_response,
                token: token
              });
            }
          });
        } else {
          res.status(405).send({
            message: "user unauthenticated. Incorrect password",
          });
        }
      } else {
        res.status(404).send({
          message: "user not exists",
        });
      }
    } catch (err) {
      res.status(500).send({
        message: "Internal error server",
      });
    }
  }

  async insertUser(req, res) {

    console.log(req.body);
    try {
      const salt = await bcrypt.genSaltSync(10);
      const password = await bcrypt.hashSync(req.body.password_user, salt);

      const response = await models.User.create({
        name_user: req.body.name_user,
        email_user: req.body.email_user,
        password_user: password
      });

      var user_created = response;
      user_created.password_user = "*****"

      if (response) {
        res.status(201).send({
          message: "user created successfully",
          user_created: user_created
        });
      } else {
        res.status(400).send({
          message: "Error trying to create user!"
        });
      }
    } catch (err) {
      console.log(err)
      res.status(500).send({
        message: "Internal error server",
      });
    }

  }

  async selectUser(req, res) {
    const response = await models.User.findAll();

    if (response) {
      res.status(200).send({
        message: `List of users!`,
        user_list: response
      });
    } else {
      res.status(400).send({
        message: "Failed to list users!"
      });
    }
  }

  async selectUserById(req, res) {
    const response = await models.User.findByPk(req.params.id_user);
    if (response) {
      res.status(200).send({
        message: "user " + response.id,
        user: response
      });
    } else {
      res.status(400).send({
        message: "error when trying to list user. Check ID."
      });
    }
  }

  async updateUser(req, res) {

    try {
      const salt = await bcrypt.genSaltSync(10);
      const password = await bcrypt.hashSync(req.body.password_user, salt);

      const response = await models.User.update({
        name_user: req.body.name_user,
        email_user: req.body.email_user,
        password_user: password
      },
        {
          where: {
            id: req.params.id_user
          }
        }
      );

      if (response) {
        var user_updated = await models.User.findByPk(req.params.id_user);
        var user_up = user_updated;
        user_up.password_user = '*****';

        if (user_updated) {
          res.status(202).send({
            message: "user updated successfully",
            user_update: user_up
          });
        } else {
          res.status(404).send({
            message: "user not exists",
          });
        }

      } else {
        res.status(400).send({
          message: "Error trying to update user!"
        });
      }
    } catch (err) {
      res.status(500).send({
        message: "Internal error server",
        error: err
      });
    }

  }

  async deleteUser(req, res) {
    console.log(req.params.id_user)
    const response = await models.sequelize.query("DELETE FROM users WHERE users.id=" + req.params.id_user);

    if (response) {
      res.status(202).send({
        message: "user " + req.params.id_user + " deleted successfully"
      });
    } else {
      res.status(400).send({
        message: "error when trying delete user. Check ID."
      });
    }
  }

}
module.exports = new UserController();