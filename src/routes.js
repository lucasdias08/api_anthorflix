const express = require("express");
const router = express.Router();
const mid = require("./middleware");

const userController = require("./Controller/UserController");
const movieController = require("./Controller/MovieController");
const movieRatingUserController = require("./Controller/MovieRatingUserController");
const commentController = require("./Controller/CommentController");

router.get('/', (req, res) => res.status(200).send("REST Back-end Challenge Running"));
router.post('/authenticate', userController.authenticateUser);
router.get('/users'/*, mid*/, userController.selectUser);
router.get('/users/:id_user'/*, mid*/, userController.selectUserById);
router.post('/users'/*, mid*/, userController.insertUser);
router.put('/users/:id_user'/*, mid*/, userController.updateUser);
router.delete('/users/:id_user'/*, mid*/, userController.deleteUser);

router.get('/movies', /*mid,*/ movieController.selectMovie);
router.get('/movies/:id_movie', /*mid,*/ movieController.selectMovieById);
router.post('/movies', /*mid,*/ movieController.insertMovie);
router.put('/movies/:id_movie', /*mid,*/ movieController.updateMovie);
router.delete('/movies/:id_movie', /*mid,*/ movieController.deleteMovie);

router.get('/movies', /*mid,*/ movieRatingUserController.selectMovieRatingUser);
router.get('/movies/:id_movie',/*mid,*/ movieRatingUserController.selectMovieRatingUserById);
router.post('/movieratingbyuser', /*mid,*/ movieRatingUserController.insertMovieRatingUser);
router.put('/movieratingbyuser/:id_user/:id_movie', /*mid,*/ movieRatingUserController.updateMovieRatingUser);

router.get('/commentsbyuser/:id_user', /*mid,*/ commentController.selectCommentByUser);
router.get('/commentsbymovieratinguser/:id_rating_user', /*mid,*/ commentController.selectCommentByRatingUser);
router.post('/comments', /*mid,*/ commentController.insertComment);
router.put('/comments/:id_comment', /*mid,*/ commentController.updateComment);
router.delete('/comments/:id_comment', /*mid,*/ commentController.deleteComment);

module.exports = router;