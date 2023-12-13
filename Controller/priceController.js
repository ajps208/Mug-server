const prices=require('../Model/priceSchema')

// price
exports.priceInfo=async(req,res)=>{
    // console.log("inside price controller function");
   
    try{
        const price=await prices.find()
        res.status(200).json(price)
        // console.log(price);
        
    }
    catch(err){
        res.status(406).json(err)
        console.log(err);

    }
}
