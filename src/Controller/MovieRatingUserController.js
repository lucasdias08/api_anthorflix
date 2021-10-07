const { QueryTypes } = require("sequelize");
const models = require("../models/index");

class MovieRatingUserController {

    async insertMovieRatingUser(req, res) {
        const response = await models.MovieRatingUser.create({
            userWatched: req.body.userWatched,
            userRating: req.body.userRating,
            fk_user_id: req.body.fk_user_id,
            fk_movie_id: req.body.fk_movie_id
        });

        if (response) {
            res.status(201).send({
                message: "Movie Rating By User created successfully",
                movie_rating_by_user_created: response
            });
        } else {
            res.status(400).send({
                message: "Error trying to create movie!"
            });
        }
    }

    async selectMovieRatingUser(req, res) {
        const response = await models.MovieRatingUser.findAll();

        if (response) {
            res.status(200).send({
                message: `List of movies rating by users!`,
                movie_rating_user_list: response
            });
        } else {
            res.status(400).send({
                message: "Failed to list movie rating user!"
            });
        }
    }

    async updateMovieRatingUser(req, res) {
        const response = await models.MovieRatingUser.update({
            userWatched: req.body.userWatched,
            userRating: req.body.userRating,
            fk_user_id: req.params.id_user,
            fk_movie_id: req.params.id_movie,
        },
            {
                where: {
                    id: req.params.id_movie
                }
            }
        );


        if (response) {
            const movie_rating_user_updated = await models.MovieRatingUser.findByPk(req.params.id_movie);

            if (movie_rating_user_updated) {
                res.status(200).send({
                    message: "Movie Rating By User updated successfully",
                    movie_rating_user_update: movie_rating_user_updated
                });
            }

        } else {
            res.status(400).send({
                message: "Error trying to update movie rating user!"
            });
        }
    }
}
module.exports = new MovieRatingUserController();