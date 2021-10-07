const { QueryTypes } = require("sequelize");
const models = require("../models/index");

class MovieController {

    async insertMovie(req, res) {
        const response = await models.Movie.create({
            name_movie: req.body.name_movie,
            releaseYear_movie: req.body.releaseYear_movie,
        });

        if (response) {
            res.status(201).send({
                message: "movie created successfully",
                movie_created: response
            });
        } else {
            res.status(400).send({
                message: "Error trying to create movie!"
            });
        }
    }

    async selectMovie(req, res) {
        const response = await models.Movie.findAll();

        if (response) {
            res.status(200).send({
                message: `List of movies!`,
                movie_list: response
            });
        } else {
            res.status(400).send({
                message: "Failed to list movies!"
            });
        }
    }

    async selectMovieById(req, res) {
        const response = await models.Movie.findByPk(req.params.id_movie);
        if (response) {
            res.status(200).send({
                message: "movie " + response.id,
                movie: response
            });
        } else {
            res.status(400).send({
                message: "error when trying to list movie. Check ID."
            });
        }
    }

    async updateMovie(req, res) {
        const response = await models.Movie.update({
            name_movie: req.body.name_movie,
            releaseYear_movie: req.body.releaseYear_movie,
        },
            {
                where: {
                    id: req.params.id_movie
                }
            }
        );


        if (response) {
            const movie_updated = await models.Movie.findByPk(req.params.id_movie);

            if (movie_updated) {
                res.status(202).send({
                    message: "movie updated successfully",
                    movie_update: movie_updated
                });
            }

        } else {
            res.status(400).send({
                message: "Error trying to update user!"
            });
        }
    }

    async deleteMovie(req, res) {
        const response = await models.sequelize.query("DELETE FROM movies WHERE movies.id=" + req.params.id_movie);

        if (response) {
            res.status(202).send({
                message: "movie " + req.params.id_movie + " deleted successfully"
            });
        } else {
            res.status(400).send({
                message: "error when trying delete movie. Check ID."
            });
        }
    }

}
module.exports = new MovieController();