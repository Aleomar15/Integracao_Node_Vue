var jwt = require("jsonwebtoken");
var secret = "6484d84ad68d46d84a8d6";

module.exports = function(req, res, next){

    const authToken = req.headers['authorizarion'];
    if (authToken != undefined) {
        
        const bearer = authToken.split(' ');
        var token = bearer[1];

        
        try {
            var decoded = jwt.verify(token,secret);
            if(decoded.role == 1){
                next();
            }else{
                res.status(403);
                res.send("Você não permissão para isso!");
                return; 
            }
        } catch (err) {
            res.status(403);
            res.send("Você não está autenticado");
            return; 
        }
        
    }else{
        res.status(403);
        res.send("Você não está autenticado");
        return;
    }
}