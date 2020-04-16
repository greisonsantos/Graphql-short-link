const  Url= require('../schemas/Url');
const {base_url} = require('../config/index') 

module.exports={
 
  Query:{
      urls:()=> {
         return Url.find()
      },
      url:(ctx,{id})=>{
        return Url.findById(id)
      },

      short_link:async(ctx,{short})=>{

        const url= await Url.find({short})
         
        if( url.length===0){
          return  
        }
          return  ({short_link:url[0].link})
      }
  },
  
  Mutation:{
    createUrl:async(ctx, {link,short})=>{

    //not send params short
      if(!short){
        let short =  Math.random().toString(36).substring(7);
        let url=  await Url.create({link,short})
        let short_link= `${base_url}${url.short}`

        return ({short_link, link,short})
      }
     
      const is_short= await Url.find({short})

    // already exists short in data base
      if(is_short.length >0){
        let number =Math.floor(Math.random() * 999) + 100;
        let new_short= is_short[0].short+short+'-'+number

        
        let url = await Url.create({link,short:new_short})
        let short_link= `${base_url}${url.short}`

        return ({short_link, link,short})
      }else{
        let url = await Url.create({link,short})
        let short_link= `${base_url}${url.short}`

        return ({short_link, link,short})
      }
    }
  }
}