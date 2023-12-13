const mongoose=require('mongoose')
const priceSchema=new mongoose.Schema({
    size: {
        type: [Number],
        required: true
    },
    price: {
        type: [Number],
        required: true
    },
})

const prices=mongoose.model("prices",priceSchema)
module.exports=prices