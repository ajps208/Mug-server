const mongoose=require('mongoose')
const priceSchema=new mongoose.Schema({
    type: String,
    sizes: [{
      dimensions: String,
      price: Number,
    }]
  })

const prices=mongoose.model("prices",priceSchema)
module.exports=prices