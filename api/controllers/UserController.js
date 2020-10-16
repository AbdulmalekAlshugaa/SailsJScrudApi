/**
 * UserController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

const Joi = require('@hapi/joi');
module.exports = {
  

  /**
   * `UserController.signup()`
   */
  signup: async function (req, res) {
    try {
      const schema = Joi.object().keys({
        email:Joi.string().required().email(),
        password:Joi.string().required()
      });
      const params = await Joi.validate(req.allParams(), schema);
       return res.ok(params);

    
    }catch(err){
      console.log("Error")
      if (err.name == 'ValidationError'){
        return res.badRequest({err});
      }
      console.log("Error")
      return res.serverError(err);

    }
   
   
  },

  /**
   * `UserController.login()`
   */
  login: async function (req, res) {
    return res.json({
      todo: 'login() is not implemented yet!'
    });
  }

};

