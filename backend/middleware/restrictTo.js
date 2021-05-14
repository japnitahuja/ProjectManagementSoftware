module.exports = restrictTo = (role) => {
    return (req, res, next) => {   
      console.log('hi')
      if (role != req.headers.role) {
        return res.status(403).json({error: 'you are not authorized to access this',done:false})
      }
      next();
    };
  };