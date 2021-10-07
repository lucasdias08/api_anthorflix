const Sequelize = require("sequelize");

const connection = new Sequelize("anthor_db", "root", "root", {
    host: 'localhost',
    dialect: 'mysql'
});

const exist_trigger_insert = "DROP TRIGGER IF EXISTS AfterInsertEvaluation;"
const exist_trigger_update = "DROP TRIGGER IF EXISTS AfterUpdateEvaluation;"
var query_trigger_insert = "CREATE TRIGGER AfterInsertEvaluation AFTER INSERT ON movieratingusers FOR EACH ROW BEGIN UPDATE movies SET averageRating = (SELECT AVG(movieratingusers.userRating) FROM movieratingusers WHERE fk_movie_id = movieratingusers.fk_movie_id); END;";
var query_trigger_update = "CREATE TRIGGER AfterUpdateEvaluation AFTER UPDATE ON movieratingusers FOR EACH ROW BEGIN UPDATE movies SET averageRating = (SELECT AVG(movieratingusers.userRating) FROM movieratingusers WHERE fk_movie_id = movieratingusers.fk_movie_id); END;";

/*connection.query(exist_trigger_insert);
connection.query(exist_trigger_update);
connection.query(query_trigger_insert);
connection.query(query_trigger_update);
*/
module.exports = connection;