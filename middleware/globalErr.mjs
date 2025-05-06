const globalError = (err, _req, res, next) => {
    res.status(500).json({ msg: err.message });
  };
  
  export default globalError;