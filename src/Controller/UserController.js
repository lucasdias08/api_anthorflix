const { QueryTypes } = require("sequelize");
const models = require("../models/index");

class UserController {

  async selectUser(req, res) {
    const response = await models.User.findAll({
      limit: req.params.limit ? parseInt(req.params.limit) : 50
    });

    if (response) {
      res.status(200).send({
        message: `List of ${req.params.limit ? req.params.limit + " " : ''}users!`,
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
    const response = await models.User.update({
      name_user: req.body.name_user,
      email_user: req.body.email_user,
      phone_user: req.body.phone_user,
      genre_user: req.body.genre_user,
      birth_user: req.body.birth_user,
      nationality_user: req.body.nationality_user,
      path_image_user: req.body.path_image_user,
      street_user_address: req.body.city_user_address,
      number_home_user_address: req.body.number_home_user_address,
      city_user_address: req.body.city_user_address,
      state_user_address: req.body.state_user_address,
      latitude_user_address: req.body.latitude_user_address,
      longitude_user_address: req.body.longitude_user_address
    },
      {
        where: {
          id: req.params.id_user
        }
      }
    );


    if (response) {
      const user_updated = await models.User.findByPk(req.params.id_user);
      
      if (user_updated) {
        res.status(200).send({
          message: "Usuário atualizado com sucesso!",
          user_update: user_updated
        });
      }

    } else {
      res.status(400).send({
        message: "Erro ao tentar atualizar usuário!"
      });
    }
  }

  async deleteUser(req, res) {
    console.log(req.params.id_user)
    const response = await models.sequelize.query("DELETE FROM users WHERE users.id=" + req.params.id_user);

    if (response) {
      res.status(200).send({
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