import { v2 as cloudinary} from "cloudinary";
import fs from "fs";

          
cloudinary.config({ 
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
});

const uploadOnCloudinary = async (localfilePath)=>{
    try {
        if(!localfilePath) return null;
        //upload the file here
        const response =await cloudinary.uploader.upload(localfilePath,{
            resource_type:"auto"
        })
        console.log("file is uploaded on clodinary",response.url);
        return response;
    } catch (error) {
        fs.unlinkSync(localfilePath) //remove the local saved temporary file as upload failed
        return null;
    }
}

export {uploadOnCloudinary}
