
module.exports = {
  async create(req, res) {
    try{
      let params = req.allParams();
      // name vaildtio 
      if (!params.name) {
        return res.badRequest({ err: "Name is required filed" })
      }
      console.log(params.name);
      
    const results = await Company.create({
        name: params.name,
        address: params.address,
        city: params.city,
        user:req.user
      });
return res.ok(results)
    }catch(err){
      return res.serverError(err);

    }

   
  },
 async find(req, res) {
    console.log("Hi before sending request")
    try {
      const companies = await Company.find().populate('jobs');
      return res.ok(companies);
    }catch(err){
      res.serverError(err)
    } 
  },
 async findOne(req, res) {
   // get the id first 
   console.log("hi from one request")
   try{
     const company = await Company.findOne({
       id:req.params.id
     });
     return res.ok(company)

   }catch(err){
     res.serverError(err)
   }

   },
  async update (req, res){
    console.log("Hi from update function ");
     try {
       let params = req.allParams();
       let attributes = {};
       if (params.name){
         attributes.name = params.name;
       }
       if (params.city){
        attributes.city = params.city;
      }
      if (params.address){
        attributes.address = params.address;
      }

    const results =  await Company.update({id: req.params.id}, attributes);
    return res.ok(results);



     }catch(err){
       res.serverError(err)
     }


   },
  async delete(req, res) 
  {
    console.log("Hi from delete function ");

    const {id} = req.params.id;
    if (!id){
      return res.serverError("No id")
    }
    const results = await Company.destroy({
      id
    });
    
    return res.ok(results)
   },
};
