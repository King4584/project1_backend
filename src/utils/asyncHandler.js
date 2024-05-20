const asyncHandler = (requestHandler)=>{
     (req,res,next)=>{
        Promise.resolve(requestHandler(req,res,next)).catch((e)=>next(e))
    }
}

export{asyncHandler};




/*
const asyncHandler=(fn)=>async(req,res,next)=>{ //async handler with try catch with Higher Order Functions
    try {
        await fn(req,res,next);
    } catch (error) {
        res.status(error.code || 500).json({
            success:false,
            message : error.message
        })
    }
}
*/