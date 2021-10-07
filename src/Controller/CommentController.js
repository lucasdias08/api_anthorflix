const { QueryTypes } = require("sequelize");
const models = require("../models/index");

class CommentController {

  async insertComment(req, res) {
    const response = await models.Comment.create({
      text_comment: req.body.text_comment,
      fk_id_user: req.body.fk_id_user,
      fk_id_movieratinguser: req.body.fk_id_movieratinguser
    });

    if (response) {
      res.status(201).send({
        message: "comment created successfully",
        comment_created: response
      });
    } else {
      res.status(400).send({
        message: "Error trying to create comment!"
      });
    }
  }

  async selectCommentByRatingUser(req, res) {
    const response = await models.Comment.findAll({
        where: {
            fk_id_movieratinguser: req.params.id_rating_user
        }
    });

    if (response) {
      res.status(200).send({
        message: `List of comments By Rating User ${JSON.parse(JSON.stringify(response[0].id))}!`,
        user_list: response
      });
    } else {
      res.status(400).send({
        message: "Failed to list comments by Rating User!"
      });
    }
  }

  async selectCommentByUser(req, res) {
    const response = await models.Comment.findAll(
        {
            where: {
              fk_id_user: req.params.id_user
            }
        });
    if (response) {
      res.status(200).send({
        message: "List of comments by user " + req.params.id_user,
        user: response
      });
    } else {
      res.status(400).send({
        message: "error when trying to list comments by user. Check ID."
      });
    }
  }

  async updateComment(req, res) {
    const response = await models.Comment.update({
      text_comment: req.body.text_comment
    },
      {
        where: {
          id: req.params.id_comment
        }
      }
    );

    if (response) {
      const comment_updated = await models.Comment.findByPk(req.params.id_comment);

      if (comment_updated) {
        res.status(202).send({
          message: "comment updated successfully",
          user_update: comment_updated
        });
      }

    } else {
      res.status(400).send({
        message: "Error trying to update comment!"
      });
    }
  }

  async deleteComment(req, res) {
    //console.log(req.params.id_user)
    const response = await models.sequelize.query("DELETE FROM comments WHERE comments.id=" + JSON.parse(JSON.stringify(response[0].id))); 

    if (response) {
      res.status(202).send({
        message: "comment " +  + " deleted successfully"
      });
    } else {
      res.status(400).send({
        message: "error when trying delete comment. Check ID."
      });
    }
  }

}
module.exports = new CommentController();