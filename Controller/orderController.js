const orders = require("../Model/orderSchema");
const jwt = require("jsonwebtoken");

// add order
exports.addOrders = async (req, res) => {
  console.log("inside the add order");
  const {
    name,
    whatsapp,
    email,
    address,
    thickness,
    size,
    wallmount,
    qty,
    message,
    price

  } = req.body;
  
  const userId = req.payload;
  const image = req.file.filename;
  const date = new Date();
  const formattedDate = date.toLocaleString('en-US', { weekday: 'short', month: 'short', day: 'numeric', year: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric' });
  
  try {
    const newOrder = new orders({
        userId,
        name,
        whatsapp,
        email,
        address,
        thickness,
        size,
        wallmount,
        qty,
        message,
        image,
        price,
        confirmeddate:formattedDate
    });
    await newOrder.save();
    res.status(200).json(newOrder);
  } catch (error) {
    res.status(401).json(`Request failed: ${error}`);
  }
};


// get orders
exports.getOrders=async(req,res)=>{
  console.log("inside getorders");
  const userId=req.payload
  console.log(userId);
  try {
    const result=await orders.find({userId:userId})
    res.status(200).json(result)
    console.log(result);

} catch (error) {
    console.log(error);
    res.status(401).json(`Request failed: ${error}`)

}
}


// get one orders
exports.getONeOrders=async(req,res)=>{
  console.log("inside getOneorders");
   const id=req.query.id
  console.log(id);
  try {
    const result=await orders.findById(id)
    res.status(200).json(result)
    console.log(result);

} catch (error) {
    console.log(error);
    res.status(401).json(`Request failed: ${error}`)

}
}

// getallorders
exports.getAllOrders=async(req,res)=>{
  console.log("inside getAllorders");

  try {
    const result=await orders.find()
    res.status(200).json(result)
    console.log(result);

} catch (error) {
    console.log(error);
    res.status(401).json(`Request failed: ${error}`)

}
}

// update mugprint
exports.updateMugPrint = async (req, res) => {
  console.log("inside updateMugPrint");
  const { orderid, mugprintdate } = req.body;
  console.log(orderid, mugprintdate);

  try {
    const result = await orders.findByIdAndUpdate(
      { "_id": orderid },
      {
        $set: {
          "mugprinted.status": true,
          "mugprinted.date": mugprintdate,
        },
      },
      { new: true }
    );
    await result.save();
    res.status(200).json(result);
    console.log(result);
  } catch (error) {
    res.status(401).json(error);
  }
};

// update outfordelivery
exports.updateoutForDelivery = async (req, res) => {
  console.log("inside updateMugPrint");
  const { orderid, outForDelivery } = req.body;
  console.log(orderid, outForDelivery);

  try {
    const result = await orders.findByIdAndUpdate(
      { "_id": orderid },
      {
        $set: {
          "outfordelivery.status": true,
          "outfordelivery.date": outForDelivery,
        },
      },
      { new: true }
    );
    await result.save();
    res.status(200).json(result);
    console.log(result);
  } catch (error) {
    res.status(401).json(error);
  }
};

// update delivered
exports.updatedelivered = async (req, res) => {
  console.log("inside updatedelivered");
  const { orderid, delivered } = req.body;
  console.log(orderid, delivered);

  try {
    const result = await orders.findByIdAndUpdate(
      { "_id": orderid },
      {
        $set: {
          "orderstatus":true,
          "Delivered.status": true,
          "Delivered.date": delivered,
        },
      },
      { new: true }
    );
    await result.save();
    res.status(200).json(result);
    console.log(result);
  } catch (error) {
    res.status(401).json(error);
  }
};