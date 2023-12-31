const asyncHandler = (reqestHandler) => {
    return  (req, res, next) => {
                Promise.resolve(
                    reqestHandler(req, res, next)
                ).catch(
                    (err) => {next(err)}
                )
            }
    
}


export {asyncHandler}


// code in trycatch 
/*
const asyncHandler = (fn) => async (req, res, next) => {
    try {
        return await fn(req, res, next)
    } catch (error) {
        res.status(error.code || 500).json({
            success : false,
            message: error.message
        })
    }
}
*/