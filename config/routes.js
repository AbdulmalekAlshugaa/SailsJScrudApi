/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * https://sailsjs.com/anatomy/config/routes-js
 */

module.exports.routes = {
  'post /companies':'CompanyController.create',
  'get /companies':'CompanyController.find',
  'get /companies/:id':'CompanyController.findOne',
  'PATCH /companies/:id':'CompanyController.update',
  'DELETE /companies/:id':'CompanyController.delete',
  
  
  // Job Controller 
  'POST /jobs':'JobController.create',
  'GET /jobs':'JobController.find',

  // Applicstrion 
  'POST /applications':'ApplicationController.create',
  'GET /applications':'ApplicationController.find',

  // User 
  'POST /user/login':'UserController.login',
  'POST /user/signup':'UserController.signup',


};
