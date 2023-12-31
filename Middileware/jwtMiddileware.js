const jwt=require('jsonwebtoken')

const jwtMiddileware=(req,res,next)=>{
    console.log('inside the jwtmiddileware');

    // Check if 'authorization' header exists
    if (!req.headers['authorization']) {
        return res.status(401).json("Authorization header is missing. Please provide a valid token.");
    }

    const token = req.headers['authorization'].split(" ")[1];
    
    try {
        const jwtResponse = jwt.verify(token, "supersecretkey12345");
        console.log(jwtResponse);
        req.payload = jwtResponse.userId;
        next();
    } catch (err) {
        res.status(401).json("Authorization failed!!! Please Login....");
    }
}

module.exports = jwtMiddileware;
