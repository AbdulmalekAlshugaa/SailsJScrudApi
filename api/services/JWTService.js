const jwt = require('jsonwebtoken');
const SECERT = '12345'
module.exports = {
    // controller 
    issuer(payload, expiresIn){
        return jwt.sign(payload, SECERT, {
            expiresIn
        })


    },
    verify(token){
        return jwt.verify(token, SECERT);

    }
   
};