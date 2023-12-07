const jwt = require("jsonwebtoken")

const verifyToken = (req, res, next) => {
  const authHeader = req.header.authorization;

  if(!authHeader){
    res.send()
  }
  else{
    const token = authHeader.split(" ")[1]  
    jwt.verify(token, process.env.JWTSECRET, function(err, user) {
      if(err){
        res.status(403).json({
          status:false,
          message: "Invalid token"
        })
      }
      else{
        req.user = user
        next()
      }
    });

  }

}



const verifyAll = (req, res, next) => {
  verifyToken(req,res, ()=>{
    const userType = req.user.userType;
    if( userType === "Client" ||
    userType === "Vendor" ||
    userType === "Admin"){
      next()
    }
    else{
      res
      .status(403)
      .json({ status: false, message: "You are not authorized" });
    }

  })
}


const verifyVendor = (req,res,next) => {
  verifyToken(req,res,() => {
    const userType = req.user.Usertype
    if(userType === "Vendor" || userType === "Admin" ){
      next()
    }
    else{
      res.status(403).json({
        status: false,
        message: "Access denied"
      })
    }
  })
}


const verifyAdmin = (req, res, next) => {
  verifyToken(req, res, () => {
    const userType = req.user.userType;
    if (userType === "Admin") {
      next();
    } else {
      res
        .status(403)
        .json({ status: false, message: "You are not authorized" });
    }
  });
};

module.exports = {
  verifyToken,
  verifyAll,
  verifyAdmin,
  verifyVendor,
};