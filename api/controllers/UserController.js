/**
 * UserController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

const Joi = require('@hapi/joi');
const JWTService = require('../services/JWTService');

const UtilService = require('../services/UtilService');
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
      const {email, password} = await Joi.validate(req.allParams(), schema);
      //
      const encryptPassword = await UtilService.hashPassword(password);
      console.log("Hi from password")
      console.log(encryptPassword)
      const user = await User.create({
        email,
        password:encryptPassword
      });


       return res.ok(user);


    
    }catch(err){
      console.log(err)
      if (err.name == 'ValidationError'){
        return res.badRequest({err});
      }
      return res.serverError(err);

    }
   
   
  },

  /**
   * `UserController.login()`
   */
  login: async function (req, res) {
    try {
      const schema = Joi.object().keys({
        email:Joi.string().required().email(),
        password:Joi.string().required()
      });
      const {email, password} = await Joi.validate(req.allParams(), schema);
      const getUsers = await User.findOne({email});
      const encrypePassword = getUsers.password;
      console.log(getUsers.password);
      //
     const matchPassword = await UtilService.comparePassword(password, encrypePassword);
     if(!getUsers){
      res.notFound({err:"User does not exists"})
    }
     if (!matchPassword){
      res.badRequest({err:"Unthrorized user"})
     }
     const token = JWTService.issuer({user: getUsers.id}, '1 day');

     return res.ok({token});
   
  
      


    
    }catch(err){
      console.log(err)
      if (err.name == 'ValidationError'){
        return res.badRequest({err});
      }
      return res.serverError(err);

    }
  }

};

