const mongoose=require('mongoose')

const orderSchema=new mongoose.Schema({
    userId:{
        type:String,
        required:true,
        
    },
    name:{
        type:String,
        required:true,
        
    },
    whatsapp:{
        type:String,
        required:true,
        
    },
    email:{
        type:String,
        required:true
    },
    size:{
        type:String,
        required:true

    },
    style:{
        type:String,
        required:true

    },
    color:{
        type:String,
        required:true

    },
    address:{
        type:String,
        required:true
    },
    qty:{
        type:Number,
        required:true
    },
    message:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    confirmeddate:{
        type:String,
        default:null
    },
    paymentId:{
        type:String,
        default:null
    },
    orderstatus:{
        type:Boolean,
        default:false
    },
    mugprinted:{
        status:{
            type:Boolean,
            default:false
        },
        date:{
            type:String,
            default:null
        }
    },
    outfordelivery:{
        status:{
            type:Boolean,
            default:false
        },
        date:{
            type:String,
            default:null
        }
    },
    Delivered:{
        status:{
            type:Boolean,
            default:false
        },
        date:{
            type:String,
            default:null
        }
    },

})

const orders=mongoose.model("orders",orderSchema)
module.exports=orders