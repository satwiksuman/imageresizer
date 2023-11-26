const express=require('express');

const router=express();
const uploadMiddleware=require('../middlewares/uploadMiddleware');
const process=require('../middlewares/process')
router.route('/upload').post(uploadMiddleware.single('image'),process);
module.exports=router;