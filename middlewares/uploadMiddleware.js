const multer=require('multer');
const path=require('path');
const storage=multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,'./public/uploads')
    },
    filename:(req,file,cb)=>{
      cb(null,
         `${Date.now()}${path.extname(file.originalname)}`
        );
    }
})

const filter=(req,file,cb)=>{
    if(file.mimetype=='image/png'||file.mimetype=='image/jpg'||file.mimetype=='image/jpeg'){
        cb(null,true);
    }
    else{
        cb(null,false);
        return cb(new Error("Only jpg jpeg or png allowed"));
    }
};

const upload=multer({storage:storage,fileFilter:filter});
module.exports=upload;