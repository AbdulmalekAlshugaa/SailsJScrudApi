const bcrypt = require('bcrypt');
const saltRounds = 10;
module.exports = {

    // controller 
    async hashPassword (password){  
        try {
            if (!password){
                console.log("Someting wtn fd")

            }
            return await bcrypt.hash(password, saltRounds);
            
        }catch(err){
            console.log(err)
        }
     
    },   
    async comparePassword(password, hash){
        return await bcrypt.compare(password, hash)

    }   
};