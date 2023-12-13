const express=require('express')
const router=new express.Router()
const userController=require('../Controller/userController')
const priceController=require('../Controller/priceController')
const orderController=require('../Controller/orderController')
const adminController=require('../Controller/adminController')
const jwtMiddileware = require('../Middileware/jwtMiddileware')
const multerConfig = require('../Middileware/multerMiddileware')


// const projectController=require('../Controller/projectController')
// const jwtMiddileware = require('../Middlewares/jwtMiddileware')
// const multerConfig = require('../Middlewares/multerMiddileware')
// register
router.post('/user/register',userController.register)
// login
router.post('/user/login',userController.login)
// price get
router.get('/user/price',priceController.priceInfo)
// add order
router.post('/user/addorder',jwtMiddileware,multerConfig.single("image"),orderController.addOrders)
// get order
router.get('/user/getorders',jwtMiddileware,orderController.getOrders)
// one order
router.get('/user/getoneorder',orderController.getONeOrders)

// --------------admin-----------------------------------------------------------------

// Admin login
router.post('/admin/login', adminController.login);
// get allorder
router.get('/user/getallorders',orderController.getAllOrders)
// get allusers
router.get('/user/getallusers',userController.getAllUsers)
// update order by mugprint
router.patch('/user/mugprint',orderController.updateMugPrint)
// update order by mugprint
router.patch('/user/outfordelivery',orderController.updateoutForDelivery)
// update order by delivered
router.patch('/user/delivered',orderController.updatedelivered)


// export router
module.exports=router