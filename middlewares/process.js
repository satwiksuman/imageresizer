const imageSize=require('image-size');
const sharp=require('sharp');
const fs=require('fs');

const process=(req,res)=>{
 
 let  height=parseInt(req.body.height);
   let width=parseInt(req.body.width);
   let format=req.body.type

   if(isNaN(height)||isNaN(width)||!format){
    const dimension=imageSize(req.file.path);

    console.log(dimension);
    height=parseInt(dimension.height);
    width=parseInt(dimension.width);
    format=dimension.type;
   }
  
   const outputFilePath= Date.now()+"output."+format;
   
        if(req.file){
            sharp(req.file.path)
            .resize(width,height,{fit:'contain'})
            .toFormat(format)
            .toFile(outputFilePath,
            (error,info)=>{
                if(error)
                 throw error;
                res.download(outputFilePath,(error)=>{
                    if(error){
                      throw error;
                    }
                    fs.unlinkSync(req.file.path);
                    fs.unlinkSync(outputFilePath);
                }
              )}
            )
          
        }
   
}
module.exports=process;