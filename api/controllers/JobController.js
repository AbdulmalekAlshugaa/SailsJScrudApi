/**
 * JobController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */



module.exports = {
  

  /**
   * `JobController.create()`
   */
  create: async function (req, res) {
    try {
      let {title, description, salary, position, companyid } = req.allParams();
      console.log("Hi from id ", companyid)
      if (!title){
        return res.badRequest({err:"Title is required"})
      }
      if (!salary){
        return res.badRequest({err:"Salary is required"})
      }
      // create a jobsetails 
      const jobDetails = await JobDetails.create({
        description, salary,position
        
      }).fetch();
      // job 
      const job = await Job.create({
        title, jobDetails:jobDetails.id,
        company:companyid
      }).fetch();

      return res.ok(job)



    }catch(err){
      return res.serverError(err);
    }
   


    // 
    
    
  },

  /**
   * `JobController.find()`
   */
  find: async function (req, res) {
    try {
      const getJobs = await Job.find()
      .populate('jobDetails');    
       res.ok(getJobs)

    }catch(err){
      res.serverError(err)
    }
    
  
    return res.json({
      todo: 'find() is not implemented yet!'
    });
  }

};

