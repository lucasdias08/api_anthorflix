require('dotenv').config();

module.exports = (req, res, next) => {
    if (process.env.API_KEY == req.header('api-key')) {
        console.log(req.header('api-key'));
        next();
    } else {
        res.status(401).send({
            message: "Unauthenticated. Check API-KEY."
        });
    }
}