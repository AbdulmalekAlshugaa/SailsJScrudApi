/**
 * ApplicationController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */



module.exports = {

    async create (req, res){

        try{
            const {name, email, jobId} = req.allParams();
            if (!name){
                return res.badRequest({err:'candidate name is required'})
            }
            if(!email){
                return res.badRequest({err:'email name is required'})
            }
            if (!jobId){
                return res.badRequest({err:'job id  name is required'})

            }

            const candidate = await Candidate.create({
                name, email, jobId
            }).fetch();

            const app = await Application.create({
                candidate:candidate.id, 
                job:jobId
            }).fetch();

            return res.ok(app);

        }catch(err){
            return res.serverError(err)
        }
    },

    // find application 
    async find (req, res){
        try {

            const apps = await Application.find().populate('job').populate('candidate');

            return res.ok(apps)
    

        }catch(err){
            console.log(err)
        }
    }
  

};

