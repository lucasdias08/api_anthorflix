const jwt = require('jsonwebtoken');

const jwt_secret = "202217";

module.exports = (req, res, next) => {
    var auth_token = req.headers['authorization'];

    if(auth_token){
        var bearer = auth_token.split(' ');
        var token = bearer[1];

        //console.log(bearer[1]);
        jwt.verify(token, jwt_secret, (err, data) => {
            if(err){
                res.status(405).send({
                    message: "Token invalid."
                });
            } else {
                next();
            }
        })
    } else {
        res.status(405).send({
            message: "unauthorized. Send with valid token."
        });
    }
}