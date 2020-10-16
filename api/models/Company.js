module.exports = {
  attributes: {
    name: {
      type: "string",
      required: true,
    },
    city: {
      type: "string",
    },
    address: {
      type: "string",
    },
    jobs:{
      collection:'Job',
      via:'company'
    }
    
  }   
  
};
//  one to manay condatoin 
// compmany can have manay jobs 